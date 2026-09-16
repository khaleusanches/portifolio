import Container from "../gerais/Container"
import { Cascata, Reveal } from "../gerais/Reveal"
import ServicesCard from "./ServicesCard"
import { serviceList } from "../../content/services"

function ServicesComponent(){
    return(
        <section id="services" aria-labelledby="titulo-servicos" className="secao bg-base-alt text-ink-alt">
            <Container>
            <Reveal>
                <p className="rotulo-secao">O que fazemos</p>
                <h2 id="titulo-servicos" className="mt-3 font-baskerville text-titulo">Serviços</h2>
            </Reveal>
            <Cascata className="mt-12 grid grid-cols-1 items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {serviceList.map((service) => (
                    <Cascata.Item key={service.slug} className="h-full">
                        <ServicesCard service={service}/>
                    </Cascata.Item>
                ))}
                </Cascata>
            </Container>
        </section>
    )
}
export default ServicesComponent