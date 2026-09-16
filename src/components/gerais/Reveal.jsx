import { motion } from "framer-motion"
import {
    CASCATA,
    DESLOCAMENTO,
    DURACAO_ENTRADA,
    EASE,
    VIEWPORT,
} from "../../theme/movimento"

/**
 * O gesto padrão de toda seção: entrar com fade e um deslize curto ao chegar na
 * viewport, uma vez só.
 *
 * Duas peças e não uma, porque uma lista não pode ser animada pelo mesmo componente
 * que anima um bloco: se o contêiner da grade tivesse a sua própria entrada, os cards
 * apareceriam em cascata dentro de um bloco que já está entrando, e as duas animações
 * se somariam.
 *
 * O movimento não consulta `prefers-reduced-motion`. É decisão explícita da Brand,
 * contra a prática usual — ver spec 0003, "O movimento não se reduz". O efeito colateral
 * é bom para a pré-renderização: sem nenhum ramo que dependa do ambiente, o HTML gerado
 * em Node e a primeira renderização no navegador são necessariamente idênticos.
 */

const entrada = {
    oculto: { opacity: 0, y: DESLOCAMENTO },
    visivel: { opacity: 1, y: 0, transition: { duration: DURACAO_ENTRADA, ease: EASE } },
}

export function Reveal({ as = "div", className = "", children, ...resto }) {
    const Elemento = motion[as] ?? motion.div

    return (
        <Elemento
            initial="oculto"
            whileInView="visivel"
            viewport={VIEWPORT}
            variants={entrada}
            className={className}
            {...resto}
        >
            {children}
        </Elemento>
    )
}

/**
 * A mesma entrada aplicada aos filhos, em cascata.
 *
 * O contêiner não anima nada de si — ele só distribui o tempo. Os filhos precisam ser
 * `Cascata.Item`, porque é a variante herdada que os move: um filho comum ficaria
 * parado enquanto o contêiner escalonasse o nada.
 */
export function Cascata({ as = "div", className = "", children, ...resto }) {
    const Elemento = motion[as] ?? motion.div

    return (
        <Elemento
            initial="oculto"
            whileInView="visivel"
            viewport={VIEWPORT}
            variants={{ oculto: {}, visivel: { transition: { staggerChildren: CASCATA } } }}
            className={className}
            {...resto}
        >
            {children}
        </Elemento>
    )
}

Cascata.Item = function CascataItem({ as = "div", className = "", children, ...resto }) {
    const Elemento = motion[as] ?? motion.div

    return (
        <Elemento variants={entrada} className={className} {...resto}>
            {children}
        </Elemento>
    )
}
