import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

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

/* 300ms com fade. Antes: 1s, sem nunca alterar opacidade, em 'backOut' — que é o
   ease que faz a página quicar na parada. A direção do slide segue fixa (custom={1}
   abaixo): a 300ms com fade ela é imperceptível, e acertá-la exigiria rastrear
   intenção de navegação num componente global. */
const pageTransition = {
  type: 'tween',
  ease: 'easeOut',
  duration: 0.3
};

export default function PageTransition({ children }) {
  const location = useLocation();

  return (
    <motion.div
      key={location.pathname}
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
