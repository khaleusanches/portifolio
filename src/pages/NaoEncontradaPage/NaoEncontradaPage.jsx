import { Link } from "react-router-dom"
import Container from "../../components/gerais/Container"

/**
 * O endereço não existe.
 *
 * Existe por causa da pré-renderização. O `vercel.json` devolve o `index.html` da home
 * para qualquer caminho sem arquivo, então uma URL errada chega ao navegador com a
 * marcação da home pronta; sem uma rota que case com ela, o React não renderiza nada e
 * o visitante fica diante de uma página branca — pior que um erro, porque não diz nada.
 */
function NaoEncontradaPage() {
    return (
        <div className="bg-base text-ink">
            <Container className="flex min-h-screen flex-col items-center justify-center gap-6 text-center">
                <p className="rotulo-secao">Erro 404</p>
                <h1 className="font-baskerville text-titulo">Esta página não existe</h1>
                <p className="medida-leitura text-lg text-muted">
                    O endereço pode ter sido digitado errado, ou o trabalho que estava aqui
                    mudou de lugar.
                </p>
                <Link
                    to="/"
                    className="rounded-full bg-brand px-8 py-3 font-bold text-white transition hover:brightness-110"
                >
                    Voltar para a vitrine
                </Link>
            </Container>
        </div>
    )
}

export default NaoEncontradaPage
