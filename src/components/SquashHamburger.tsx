import { motion } from 'framer-motion';

type SquashHamburgerProps = {
  open: boolean;
  onToggle: () => void;
  label: string;
};

const SPRING = { type: 'spring', stiffness: 500, damping: 30 } as const;

export default function SquashHamburger({ open, onToggle, label }: SquashHamburgerProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={label}
      aria-expanded={open}
      className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-cream/10"
    >
      <span className="relative block h-3.5 w-5">
        <motion.span
          className="absolute start-0 top-0 block h-[2px] w-full origin-center rounded-full bg-cream"
          animate={open ? { y: 6, rotate: 45, scaleY: 1.4 } : { y: 0, rotate: 0, scaleY: 1 }}
          transition={SPRING}
        />
        <motion.span
          className="absolute start-0 top-[6px] block h-[2px] w-full origin-center rounded-full bg-cream"
          animate={open ? { scaleX: 0, opacity: 0 } : { scaleX: 1, opacity: 1 }}
          transition={SPRING}
        />
        <motion.span
          className="absolute start-0 top-[12px] block h-[2px] w-full origin-center rounded-full bg-cream"
          animate={open ? { y: -6, rotate: -45, scaleY: 1.4 } : { y: 0, rotate: 0, scaleY: 1 }}
          transition={SPRING}
        />
      </span>
    </button>
  );
}
