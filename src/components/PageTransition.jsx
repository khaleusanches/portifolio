import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const pageVariants = {
  initial: (direction) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 1
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 100 : -100,
    opacity: 1
  })
};

const pageTransition = {
  type: 'tween',
  ease: 'backOut',
  duration: 1
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
