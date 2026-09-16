import { renderToString } from 'react-dom/server'
import { MemoryRouter } from 'react-router-dom'
import App from './App.jsx'

/**
 * Renderiza uma rota como HTML, para o build escrever no documento.
 *
 * MemoryRouter porque não há barra de endereços em Node: a rota é dada, não lida. É o
 * mesmo App que o navegador monta, então o que o robô de busca lê e o que o Client vê
 * saem do mesmo lugar — não há um segundo site escrito para o buscador.
 *
 * Efeitos não rodam em renderToString: o que depende de scroll, de observador ou de
 * medida de tela simplesmente não aparece no HTML, e passa a existir quando o React
 * assume no navegador. É esperado, e é por isso que os metadados do <head> são escritos
 * pelo script de build a partir do módulo de conteúdo, e não pelo componente Metadados.
 */
export function render(rota) {
    return renderToString(
        <MemoryRouter initialEntries={[rota]}>
            <App />
        </MemoryRouter>
    )
}

export { rotas, metadadosDaRota, jsonLdOrganizacao, sitemapXml, robotsTxt } from './content/seo'
