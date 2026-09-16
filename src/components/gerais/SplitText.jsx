import { motion, useReducedMotion } from "framer-motion"
import { CASCATA, DESLOCAMENTO, DURACAO_ENTRADA, EASE } from "../../theme/movimento"

/**
 * A headline entrando palavra a palavra.
 *
 * Usada na headline do herói e em nenhum outro lugar: repetida, a mesma entrada deixa
 * de ser abertura e vira maneirismo.
 *
 * A frase continua sendo uma frase para quem não a vê. O texto inteiro está no
 * `aria-label` do bloco e as palavras são `aria-hidden` — sem isso o leitor de tela
 * anunciaria cada palavra como um item próprio, com pausa entre elas, e a frase
 * chegaria picada.
 *
 * O espaço entre palavras é um NBSP (U+00A0) dentro do span, e não um espaço entre spans:
 * como cada palavra é `inline-block` para poder ser deslocada, um espaço de texto
 * entre elas some no colapso de espaço em branco e a frase sai grudada.
 */
function SplitText({ children, className = "", as = "span" }) {
    const semMovimento = useReducedMotion()
    const Elemento = motion[as] ?? motion.span
    const texto = String(children ?? "")
    const palavras = texto.split(/\s+/).filter(Boolean)

    if (semMovimento) {
        return <span className={className}>{texto}</span>
    }

    return (
        <Elemento
            className={className}
            aria-label={texto}
            initial="oculto"
            animate="visivel"
            variants={{ oculto: {}, visivel: { transition: { staggerChildren: CASCATA } } }}
        >
            {palavras.map((palavra, indice) => (
                <motion.span
                    key={`${palavra}-${indice}`}
                    aria-hidden="true"
                    className="inline-block"
                    variants={{
                        oculto: { opacity: 0, y: DESLOCAMENTO },
                        visivel: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: DURACAO_ENTRADA, ease: EASE },
                        },
                    }}
                >
                    {palavra}
                    {indice < palavras.length - 1 ? " " : ""}
                </motion.span>
            ))}
        </Elemento>
    )
}

export default SplitText
