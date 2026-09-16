import { motion, useReducedMotion } from "framer-motion"
import { CASCATA, DESLOCAMENTO, DURACAO_ENTRADA, EASE } from "../../theme/movimento"

/**
 * A headline entrando palavra a palavra.
 *
 * Usada na headline do herói e em nenhum outro lugar: repetida, a mesma entrada deixa
 * de ser abertura e vira maneirismo.
 *
 * A frase continua sendo uma frase para quem não a vê: ela existe uma vez inteira, num
 * span só para leitor de tela, e as palavras visíveis são `aria-hidden`. Sem isso o
 * leitor anunciaria cada palavra como um item próprio, com pausa entre elas, e a frase
 * chegaria picada.
 *
 * O texto tem de estar no conteúdo, e não num `aria-label`: um `<span>` é um elemento
 * genérico, e o ARIA proíbe nomear genéricos. O rótulo era ignorado, e como todas as
 * palavras estão escondidas, o `<h1>` do herói ficava sem nome acessível nenhum — e a
 * `<section>` que se rotula por ele, também.
 *
 * O espaço entre palavras é um NBSP (U+00A0) dentro do span, e não um espaço entre
 * spans: como cada palavra é `inline-block` para poder ser deslocada, um espaço de
 * texto entre elas some no colapso de espaço em branco e a frase sai grudada.
 *
 * Sob a preferência por menos movimento, o que muda é a duração e não a marcação: o
 * build pré-renderiza em Node, onde não há preferência nenhuma, e uma estrutura
 * diferente no navegador quebraria a hidratação da página pronta.
 */
function SplitText({ children, className = "", as = "span" }) {
    const semMovimento = useReducedMotion()
    const Elemento = motion[as] ?? motion.span
    const texto = String(children ?? "")
    const palavras = texto.split(/\s+/).filter(Boolean)
    const duracao = semMovimento ? 0 : DURACAO_ENTRADA

    return (
        <Elemento
            className={className}
            initial="oculto"
            animate="visivel"
            variants={{
                oculto: {},
                visivel: { transition: { staggerChildren: semMovimento ? 0 : CASCATA } },
            }}
        >
            <span className="sr-only">{texto}</span>
            {palavras.map((palavra, indice) => (
                <motion.span
                    key={`${palavra}-${indice}`}
                    aria-hidden="true"
                    className="inline-block"
                    variants={{
                        oculto: { opacity: 0, y: DESLOCAMENTO },
                        visivel: { opacity: 1, y: 0, transition: { duration: duracao, ease: EASE } },
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
