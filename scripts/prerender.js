import { mkdir, readFile, rm, writeFile } from "node:fs/promises"
import { dirname, join } from "node:path"
import { fileURLToPath, pathToFileURL } from "node:url"

/**
 * Escreve um HTML de verdade para cada rota do site.
 *
 * O site é uma SPA: sem isto, o que o robô de busca recebe é a casca do index.html, e
 * as páginas de Project não existem como documento nenhum — só como rota de JavaScript.
 * Prévia de link no WhatsApp, que é para onde todo CTA aponta, também não sai de uma
 * casca vazia.
 *
 * As rotas vêm de `rotas()`, que deriva do módulo de conteúdo. Uma lista escrita aqui
 * sairia do ar no dia em que um Project novo entrasse — e o sitemap, que usa a mesma
 * função, passaria a divergir do que existe.
 *
 * O `<head>` é montado aqui a partir de `metadadosDaRota`, e não pelo componente que
 * faz isso no navegador: efeitos não rodam em renderToString, então aquele componente
 * não escreveria nada no documento gerado.
 */

const raiz = join(dirname(fileURLToPath(import.meta.url)), "..")
const saida = join(raiz, "dist")
const bundleSsr = join(raiz, "dist-ssr", "entry-prerender.js")

const escapar = (texto) =>
    String(texto)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")

/** As tags que descrevem a página para buscador e para prévia de link. */
function cabecalho(meta, ehHome, jsonLd) {
    const tags = [
        `<meta name="description" content="${escapar(meta.description)}">`,
        `<link rel="canonical" href="${escapar(meta.canonical)}">`,
        `<meta property="og:type" content="${escapar(meta.type)}">`,
        `<meta property="og:site_name" content="KH Softwares">`,
        `<meta property="og:locale" content="pt_BR">`,
        `<meta property="og:title" content="${escapar(meta.title)}">`,
        `<meta property="og:description" content="${escapar(meta.description)}">`,
        `<meta property="og:url" content="${escapar(meta.canonical)}">`,
        `<meta property="og:image" content="${escapar(meta.image)}">`,
        `<meta name="twitter:card" content="summary_large_image">`,
        `<meta name="twitter:title" content="${escapar(meta.title)}">`,
        `<meta name="twitter:description" content="${escapar(meta.description)}">`,
        `<meta name="twitter:image" content="${escapar(meta.image)}">`,
    ]

    // A Brand é uma só: o dado estruturado dela vai na home e em nenhuma outra página,
    // senão cada Project declararia uma organização.
    if (ehHome) {
        tags.push(
            `<script type="application/ld+json">${JSON.stringify(jsonLd).replaceAll("<", "\\u003c")}</script>`
        )
    }

    // Marcadas como as do navegador: assim o componente Metadados as apaga antes de
    // escrever as suas, e a página não termina com duas de cada.
    return tags.map((tag) => tag.replace(/^<(\w+)/, '<$1 data-seo=""')).join("\n    ")
}

/** Onde o arquivo de uma rota mora, para que o servidor estático a encontre. */
const arquivoDaRota = (rota) =>
    rota === "/" ? join(saida, "index.html") : join(saida, rota.replace(/^\//, ""), "index.html")

async function main() {
    const { render, rotas, metadadosDaRota, jsonLdOrganizacao, sitemapXml, robotsTxt } =
        await import(pathToFileURL(bundleSsr).href)

    const modelo = await readFile(join(saida, "index.html"), "utf-8")
    const jsonLd = jsonLdOrganizacao()

    for (const rota of rotas()) {
        const meta = metadadosDaRota(rota)
        if (!meta) throw new Error(`Rota sem metadados: ${rota}`)

        const corpo = render(rota)

        const html = modelo
            .replace(/<title>[^<]*<\/title>/, `<title>${escapar(meta.title)}</title>`)
            // A description de partida do index.html é substituída, e não acrescentada:
            // duas descriptions no mesmo documento deixam o buscador escolher.
            .replace(/\n\s*<meta name="description"[^>]*>/, "")
            .replace("</head>", `  ${cabecalho(meta, rota === "/", jsonLd)}\n  </head>`)
            .replace('<div id="root" ></div>', `<div id="root">${corpo}</div>`)

        if (!html.includes(corpo.slice(0, 40))) {
            throw new Error(`O corpo não entrou no documento de ${rota}: o modelo mudou?`)
        }

        const destino = arquivoDaRota(rota)
        await mkdir(dirname(destino), { recursive: true })
        await writeFile(destino, html, "utf-8")
        console.log(`  ${rota} → ${destino.replace(raiz + "/", "")}`)
    }

    // Mesma lista de rotas das páginas acima: se as duas divergissem, o sitemap
    // apontaria para página que não existe.
    await writeFile(join(saida, "sitemap.xml"), sitemapXml(), "utf-8")
    await writeFile(join(saida, "robots.txt"), robotsTxt(), "utf-8")
    console.log("  sitemap.xml e robots.txt")

    // O bundle de SSR é ferramenta de build, não coisa a publicar.
    await rm(join(raiz, "dist-ssr"), { recursive: true, force: true })
}

main().catch((erro) => {
    console.error(erro)
    process.exit(1)
})
