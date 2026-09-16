import Container from "../gerais/Container"
import RedesSociaisComponent from "../gerais/RedesSociaisComponent"
import { contato, marca } from "../../content/marca"

/**
 * O fim da página: onde quem rolou tudo descobre como falar com a Brand.
 *
 * Antes era uma linha de copyright e três ícones apontando para `href=""` — quem
 * chegava ao fim não tinha para onde ir. Agora traz contato de verdade, e o mesmo
 * destino de WhatsApp que todo CTA do site usa, lido do módulo de conteúdo: repetido no
 * JSX, ele já divergiu entre quatro componentes.
 *
 * Não há formulário. O pedido de orçamento é a saída do site e não uma entidade dele —
 * ver CONTEXT.md.
 *
 * O texto secundário é a tinta da superfície esmaecida, e não `muted`: o rodapé mora em
 * `base-alt`, que no tema escuro é quase branca, e ali `muted` dá 2,3:1.
 */

const SECOES = [
    { href: "#projetos", rotulo: "Projetos" },
    { href: "#services", rotulo: "Serviços" },
    { href: "#parceiros", rotulo: "Quem está com a gente" },
    { href: "#about", rotulo: "Sobre nós" },
]

function RodapeComponent() {
    return (
        <footer className="border-t border-line/10 bg-base-alt text-ink-alt">
            <Container className="py-16">
                <div className="grid gap-12 md:grid-cols-3">
                    <div>
                        <p className="rotulo-secao">Fale conosco</p>
                        <h2 className="mt-3 font-baskerville text-2xl">{marca.nome}</h2>
                        <p className="mt-4 text-sm opacity-70">
                            {contato.cidade}
                            <br />
                            {contato.abrangencia}
                        </p>
                    </div>

                    <address className="not-italic">
                        <p className="rotulo-secao">Contato</p>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <a
                                    href={`mailto:${contato.email}`}
                                    className="text-ink-alt underline decoration-line/25 underline-offset-4 transition-colors hover:decoration-current"
                                >
                                    {contato.email}
                                </a>
                            </li>
                            <li>
                                <a
                                    href={contato.whatsapp}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-ink-alt underline decoration-line/25 underline-offset-4 transition-colors hover:decoration-current"
                                >
                                    {contato.whatsappRotulo}
                                </a>
                            </li>
                        </ul>
                        <RedesSociaisComponent className="mt-6" />
                    </address>

                    <nav aria-label="Navegação do rodapé">
                        <p className="rotulo-secao">Navegar</p>
                        <ul className="mt-4 space-y-2">
                            {SECOES.map((secao) => (
                                <li key={secao.href}>
                                    <a
                                        href={secao.href}
                                        className="opacity-70 transition-opacity hover:opacity-100"
                                    >
                                        {secao.rotulo}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                <p className="mt-12 border-t border-line/10 pt-8 text-sm opacity-70">
                    Copyright © 2026 Khaléu Sanches Mancini
                </p>
            </Container>
        </footer>
    )
}

export default RodapeComponent
