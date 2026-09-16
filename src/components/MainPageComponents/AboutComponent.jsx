import Container from "../gerais/Container"
import { Reveal } from "../gerais/Reveal"

function AboutComponent(){
    return(
        <section id="about" aria-labelledby="titulo-sobre" className="secao bg-base-alt text-ink-alt">
            <Container>
            <Reveal>
                <h2 id="titulo-sobre" className="font-baskerville text-titulo">Sobre nós</h2>
            </Reveal>
            <Reveal className="flex">
                <p className="text-lg">
                    Somos espezializados no desenvolvimento de sistemas e soluções digitais que ajudam empresas a otimizar processos, aumentar a produtividade e expandir seus negócios. Com expertise em softwares personalizados, ERPs, CRMs, automações, integrações e até soluções para redes sociais, transformamos ideias em tecnologia que gera resultados reais.
                    <br/> <br/>
                    Nossos <strong>Engenheiros de Software</strong> dominam tecnologias como Kotlin, C#, Java, SQL Server e MongoDB, garantindo soluções robustas, escaláveis e seguras. Cada projeto é desenvolvido sob medida, pensando na melhor experiência para o usuário e no crescimento do seu negócio.
                    <br/> <br/>
                    Acreditamos que tecnologia deve simplificar, não complicar. Por isso, trabalhamos lado a lado com nossos clientes, entendendo suas necessidades e entregando sistemas que realmente fazem a diferença. Se você procura inovação, eficiência e confiabilidade, estamos prontos para transformar sua ideia em realidade.
                </p>
                </Reveal>
            </Container>
        </section>
    )
}

export default AboutComponent