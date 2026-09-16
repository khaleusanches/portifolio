import Container from "../gerais/Container"
import { Reveal } from "../gerais/Reveal"
import { formatText } from "../gerais/formatText"

/**
 * Sobre a Brand.
 *
 * O texto é o mesmo de antes, com duas correções de grafia. O que mudou é a forma de
 * lê-lo: era `text-justify` numa coluna de `40vw`, o que em tela larga passa de
 * cem caracteres por linha e ainda abre rios de espaço entre as palavras. Agora a
 * coluna tem medida de leitura e alinhamento à esquerda.
 *
 * Os parágrafos são parágrafos. Antes eram um bloco único quebrado por `<br/><br/>`,
 * que dá a aparência de parágrafo sem a estrutura: o espaço entre eles não podia vir do
 * sistema, e para quem usa leitor de tela o texto inteiro era uma frase só.
 *
 * O título fica numa coluna à parte no desktop. É o que permite ao texto ter medida de
 * leitura sem deixar metade da faixa vazia.
 *
 * A ênfase em "Engenheiros de Software" era um <strong> cravado no JSX; passa a usar a
 * convenção `**trecho**` e o formatText, que é como a página de Project e o modal de
 * Service marcam ênfase. Assim o mesmo negrito tem a mesma cor nas três telas.
 */

const PARAGRAFOS = [
    "Somos especializados no desenvolvimento de sistemas e soluções digitais que ajudam empresas a otimizar processos, aumentar a produtividade e expandir seus negócios. Com expertise em softwares personalizados, ERPs, CRMs, automações, integrações e até soluções para redes sociais, transformamos ideias em tecnologia que gera resultados reais.",
    "Nossos **Engenheiros de Software** dominam tecnologias como Kotlin, C#, Java, SQL Server e MongoDB, garantindo soluções robustas, escaláveis e seguras. Cada projeto é desenvolvido sob medida, pensando na melhor experiência para o usuário e no crescimento do seu negócio.",
    "Acreditamos que tecnologia deve simplificar, não complicar. Por isso, trabalhamos lado a lado com nossos clientes, entendendo suas necessidades e entregando sistemas que realmente fazem a diferença. Se você procura inovação, eficiência e confiabilidade, estamos prontos para transformar sua ideia em realidade.",
]

function AboutComponent() {
    return (
        <section id="about" aria-labelledby="titulo-sobre" className="secao bg-base text-ink">
            <Container className="flex flex-col gap-10 md:flex-row md:gap-16">
                <Reveal className="md:w-1/3 md:shrink-0">
                    <p className="rotulo-secao">Quem somos</p>
                    <h2 id="titulo-sobre" className="mt-3 font-baskerville text-titulo">
                        Sobre nós
                    </h2>
                </Reveal>

                <Reveal className="medida-leitura space-y-6 text-lg leading-relaxed text-ink/85">
                    {PARAGRAFOS.map((paragrafo) => (
                        <p key={paragrafo.slice(0, 24)}>{formatText(paragrafo)}</p>
                    ))}
                </Reveal>
            </Container>
        </section>
    )
}

export default AboutComponent
