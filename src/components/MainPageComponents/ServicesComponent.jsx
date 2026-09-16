import Container from "../gerais/Container"
import { Cascata, Reveal } from "../gerais/Reveal"
import ServicesCard from "./ServicesCard"
import { serviceList } from "../../content/services"

function ServicesComponent(){
    return(
        <section id="services" aria-labelledby="titulo-servicos" className="secao bg-base-alt text-ink-alt">
            <Container>
            <Reveal>
                <h2 id="titulo-servicos" className="font-baskerville text-titulo">Serviços</h2>
            </Reveal>
            <Cascata className="mt-12 flex flex-wrap justify-center gap-8">
                {serviceList.map((service) => (
                    <Cascata.Item key={service.slug}>
                        <ServicesCard service={service}/>
                    </Cascata.Item>
                ))}
                </Cascata>
            </Container>
        </section>
    )
}
export default ServicesComponent