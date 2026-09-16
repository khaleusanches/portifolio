/**
 * Em que a Brand se apoia, e com que ela constrói.
 *
 * Duas listas e não uma, porque são duas afirmações diferentes: "Quem está com a
 * gente" nomeia plataformas e serviços de terceiros que sustentam o trabalho, e
 * "Stack" nomeia o que a Brand escreve. Nenhum item aparece nas duas.
 *
 * As duas são exibidas pela mesma faixa (FaixaDeApoio): a diferença entre elas é de
 * conteúdo, não de layout.
 */

/**
 * Parceiros e plataformas, exibidos como logo.
 *
 * `logo` aponta para um SVG de uma só cor em `public/logos`. Ele é aplicado como
 * máscara e pintado com a cor do texto — é o que faz o mesmo arquivo servir aos dois
 * temas, sem uma versão clara e uma escura de cada marca.
 */
export const parceiros = [
    { slug: "aws", nome: "AWS", logo: "/logos/aws.svg" },
    { slug: "hostinger", nome: "Hostinger", logo: "/logos/hostinger.svg" },
    { slug: "docker", nome: "Docker", logo: "/logos/docker.svg" },
    { slug: "trello", nome: "Trello", logo: "/logos/trello.svg" },
]

/**
 * O que a Brand usa para construir, exibido como nome e não como logo.
 *
 * Tipográfico de propósito. Quatro destes — C#, SQL Server, Claude e Gemini — não têm
 * marca monocromática de uma só cor disponível, e uma faixa com sete logos e quatro
 * nomes soltos não é uma faixa: é um logo faltando quatro vezes. Escrito por extenso,
 * o conjunto fica uniforme e diz exatamente a mesma coisa.
 */
export const stack = [
    "Kotlin",
    "C#",
    "Java",
    "SQL Server",
    "MongoDB",
    "React",
    "Tailwind",
    "N8N",
    "Gemini",
    "Claude",
]
