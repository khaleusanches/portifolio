import { motion } from 'framer-motion';

const pageVariants = {
  initial: (direction) => ({
    x: direction > 0 ? 24 : -24,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 24 : -24,
    opacity: 0
  })
};

/* 200ms por metade, ~400ms de navegação. Antes: 1s só de entrada, sem nunca
   alterar opacidade, em 'backOut' — o ease que fazia a página quicar na parada.

   O AnimatePresence é mode="wait", então saída e entrada não se sobrepõem e a
   duração percebida é o dobro desta. Sobrepor exigiria tirar o mode="wait", e aí
   as duas páginas ficariam ambas no fluxo, dobrando a altura por um instante.

   A direção do slide segue fixa (custom={1} abaixo): nesta duração ela é
   imperceptível, e acertá-la exigiria rastrear intenção de navegação num
   componente global. */
const pageTransition = {
  type: 'tween',
  ease: 'easeOut',
  duration: 0.2
};

export default function PageTransition({ children }) {
  return (
    <motion.div
      initial="initial"
      animate="center"
      exit="exit"
      variants={pageVariants}
      transition={pageTransition}
      custom={1}
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
