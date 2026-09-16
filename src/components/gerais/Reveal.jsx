import { motion, useReducedMotion } from "framer-motion"
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
 * Quem pediu menos movimento recebe o estado final, sem transição — e não uma versão
 * reduzida da animação. `useReducedMotion` do framer-motion assina a media query, então
 * mudar a preferência do sistema durante a visita reflete sem recarregar a página.
 */

const entrada = {
    oculto: { opacity: 0, y: DESLOCAMENTO },
    visivel: { opacity: 1, y: 0, transition: { duration: DURACAO_ENTRADA, ease: EASE } },
}

const parado = {
    oculto: { opacity: 1, y: 0 },
    visivel: { opacity: 1, y: 0 },
}

export function Reveal({ as = "div", className = "", children, ...resto }) {
    const semMovimento = useReducedMotion()
    const Elemento = motion[as] ?? motion.div

    return (
        <Elemento
            initial="oculto"
            whileInView="visivel"
            viewport={VIEWPORT}
            variants={semMovimento ? parado : entrada}
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
    const semMovimento = useReducedMotion()
    const Elemento = motion[as] ?? motion.div

    return (
        <Elemento
            initial="oculto"
            whileInView="visivel"
            viewport={VIEWPORT}
            variants={{
                oculto: {},
                visivel: { transition: { staggerChildren: semMovimento ? 0 : CASCATA } },
            }}
            className={className}
            {...resto}
        >
            {children}
        </Elemento>
    )
}

Cascata.Item = function CascataItem({ as = "div", className = "", children, ...resto }) {
    const semMovimento = useReducedMotion()
    const Elemento = motion[as] ?? motion.div

    return (
        <Elemento variants={semMovimento ? parado : entrada} className={className} {...resto}>
            {children}
        </Elemento>
    )
}
