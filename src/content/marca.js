/**
 * Quem é a Brand e como se fala com ela. Ver CONTEXT.md para o vocabulário.
 *
 * Mora no módulo de conteúdo pelo mesmo motivo que os Projects e os Services
 * (ADR 0001): o e-mail e o WhatsApp aparecem em mais de uma tela, e cravados no JSX
 * eles divergem — foi o que aconteceu com o link do WhatsApp, repetido em quatro
 * componentes.
 */

export const marca = {
    nome: "KH Softwares",
    /** A origem onde o site é servido. Ver `src/content/seo.js` para o uso. */
    site: "https://khsoftwares.vercel.app",
}

export const contato = {
    email: "contato.khsoftwares@gmail.com",
    /** O mesmo destino de todo CTA do site. */
    whatsapp: "https://wa.link/q560iy",
    whatsappRotulo: "Falar no WhatsApp",
    cidade: "São Paulo – SP",
    abrangencia: "Atendemos todo o Brasil",
}

/**
 * As redes onde a Brand realmente está.
 *
 * `url: null` significa que a rede não é publicada — e o componente não a renderiza.
 * O estado anterior era pior que a ausência: três ícones com `href=""` em três seções
 * diferentes, que levavam o Client a lugar nenhum e contavam ao robô de busca que o
 * site tem links quebrados.
 *
 * O Twitter saiu: a Brand não mantém conta lá.
 */
export const redes = [
    { slug: "instagram", nome: "Instagram", url: null },
    { slug: "youtube", nome: "YouTube", url: null },
]

/** Só as redes publicadas. É esta lista que a tela percorre. */
export const redesPublicadas = () => redes.filter((rede) => Boolean(rede.url))
