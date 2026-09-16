import { projects } from "./projects"
import { contato, marca } from "./marca"
import logo from "../../public/logo.png"

/**
 * Os metadados de cada rota, derivados do conteúdo que já existe.
 *
 * Nada aqui é texto de SEO escrito à parte: o título de um Project é a Headline dele e
 * a descrição é o Pitch. Duas fontes divergem — a página passaria a dizer uma coisa e o
 * resultado de busca outra, e quem edita o conteúdo não saberia que existe um segundo
 * lugar para editar.
 *
 * Este módulo é lido por três consumidores: o componente que escreve as tags no
 * navegador, a pré-renderização que as escreve no HTML servido, e o gerador do
 * sitemap. A lista de rotas sai daqui para os três, porque se divergirem o sitemap
 * aponta para página que não existe.
 */

/**
 * A origem onde o site é servido, hoje a Vercel. Numa constante só: o dia do domínio
 * próprio muda um lugar, e não cada `<link rel="canonical">` do projeto.
 */
export const ORIGEM = marca.site

const HOME = {
    title: "KH Softwares — Sistemas sob medida, automação e aplicativos",
    description:
        "Desenvolvemos sistemas, automações e aplicativos sob medida para empresas: ERPs, integrações, websites e apps. Veja os trabalhos já entregues e peça um orçamento.",
}

/**
 * Transforma um caminho em URL absoluta. Robô de busca e prévia de link não resolvem
 * caminho relativo — uma `og:image` em `/assets/x.webp` simplesmente não aparece.
 *
 * O que já é absoluto passa intacto: em produção o Vite pode servir um asset de outro
 * host, e reescrevê-lo quebraria o endereço.
 */
export const absoluta = (caminho) => {
    if (!caminho) return caminho
    if (/^https?:\/\//.test(caminho)) return caminho
    return `${ORIGEM}/${String(caminho).replace(/^\//, "")}`
}

/** Toda rota que o site publica: a home e uma por Project. */
export const rotas = () => ["/", ...Object.keys(projects).map((slug) => `/project/${slug}`)]

/**
 * Os metadados de uma rota, ou null quando ela não é publicada.
 *
 * Ausência e não fallback: com fallback para a home, `/project/NaoExiste` seria
 * pré-renderizado como se fosse uma página legítima, e o robô indexaria uma página
 * inexistente com o título da home.
 */
export function metadadosDaRota(rota) {
    if (rota === "/") {
        return {
            ...HOME,
            canonical: `${ORIGEM}/`,
            image: absoluta(logo),
            type: "website",
        }
    }

    const encontrado = /^\/project\/([^/]+)\/?$/.exec(rota ?? "")
    const project = encontrado ? projects[encontrado[1]] : null
    if (!project) return null

    return {
        // A Headline já nomeia a coisa e a categoria ("OlimpicLink — Plataforma Social
        // Moderna..."), então o sufixo só acrescenta de quem é o trabalho.
        title: `${project.headline} | ${marca.nome}`,
        description: project.pitch,
        canonical: `${ORIGEM}/project/${project.slug}`,
        image: absoluta(project.cover),
        type: "article",
    }
}

/**
 * A Brand, em dado estruturado. Vai só na home: repetido em cada página de Project,
 * declararia uma organização por trabalho entregue.
 */
export function jsonLdOrganizacao() {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: marca.nome,
        url: `${ORIGEM}/`,
        logo: absoluta(logo),
        email: contato.email,
        description: HOME.description,
        areaServed: contato.abrangencia,
        address: {
            "@type": "PostalAddress",
            addressLocality: "São Paulo",
            addressRegion: "SP",
            addressCountry: "BR",
        },
    }
}

/**
 * O sitemap, derivado das mesmas rotas que a pré-renderização escreve.
 *
 * A URL de cada entrada é a canonical da própria página, e não uma montada aqui: se as
 * duas fossem construídas em lugares diferentes, o sitemap apontaria para um endereço
 * e a página declararia outro como canônico — e o buscador teria de escolher.
 *
 * Sem `lastmod`: o modelo não tem data (ver CONTEXT.md, Featured é curadoria e não
 * recência), e uma data inventada a cada build diz ao buscador que tudo mudou sempre.
 */
export function sitemapXml() {
    const urls = rotas()
        .map((rota) => `  <url>\n    <loc>${metadadosDaRota(rota).canonical}</loc>\n  </url>`)
        .join("\n")

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`
}

/** O robots.txt: tudo liberado, e o caminho do sitemap. */
export function robotsTxt() {
    return `User-agent: *
Allow: /

Sitemap: ${ORIGEM}/sitemap.xml
`
}
