import { motion } from 'framer-motion';
import Logo from '@/components/Logo';

export default function Splash() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-ink"
    >
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <Logo className="h-20 w-20" />
      </motion.div>
    </motion.div>
  );
}
