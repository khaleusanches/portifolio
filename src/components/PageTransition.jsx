import { motion } from 'framer-motion';
import { DURACAO_PAGINA, EASE } from '../theme/movimento';

/* 200ms por metade, ~400ms de navegação. Antes: 1s só de entrada, sem nunca alterar
   opacidade, em 'backOut' — o ease que fazia a página quicar na parada.

   O AnimatePresence é mode="wait", então saída e entrada não se sobrepõem e a duração
   percebida é o dobro desta. Sobrepor exigiria tirar o mode="wait", e aí as duas páginas
   ficariam ambas no fluxo, dobrando a altura por um instante.

   A direção do slide segue fixa: nesta duração ela é imperceptível, e acertá-la exigiria
   rastrear intenção de navegação num componente global.

   Os estados são objetos, e nunca rótulos de variante. Um rótulo em `animate` desce por
   toda a árvore de motion abaixo dele, e governa todo filho que não declare o próprio
   `animate` — que é o caso do Reveal, cujo gatilho é `whileInView`. Enquanto isto usou
   rótulos, nenhuma entrada ao rolar acontecia: os blocos nasciam já no estado final,
   porque quem mandava neles era esta transição. */
const transicao = { type: 'tween', ease: EASE, duration: DURACAO_PAGINA };

export default function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ x: 24, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -24, opacity: 0 }}
      transition={transicao}
      style={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden'
      }}
    >
      {children}
    </motion.div>
  );
}
