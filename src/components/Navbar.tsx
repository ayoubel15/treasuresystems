import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Logo from '@/components/Logo';
import { ScrambleText } from '@/components/ScrambleText';
import SquashHamburger from '@/components/SquashHamburger';
import { useLanguage } from '@/hooks/useLanguage';

type NavbarProps = {
  onBook: () => void;
};

export default function Navbar({ onBook }: NavbarProps) {
  const { t, toggleLang } = useLanguage();
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#services', label: t.nav.services },
    { href: '#projects', label: t.nav.work },
    { href: '#process', label: t.nav.process },
  ];

  const close = () => setOpen(false);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <motion.nav
        layout
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        aria-label={t.nav.menu}
        className="pointer-events-auto overflow-hidden rounded-[28px] border border-cream/15 bg-ink/80 shadow-[0_12px_40px_rgba(0,0,0,0.55)] backdrop-blur-md"
      >
        <div className="flex h-14 items-center gap-3 ps-3 pe-2">
          <a href="#top" onClick={close} className="flex items-center gap-2">
            <Logo className="h-7 w-7" />
            <span className="font-brand text-sm tracking-[0.2em] text-cream">TREASURE</span>
          </a>
          <SquashHamburger open={open} onToggle={() => setOpen((value) => !value)} label={t.nav.menu} />
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="panel"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, delay: 0.05 }}
              className="w-[min(88vw,400px)] px-3 pb-4"
            >
              <ul className="flex flex-col gap-1">
                {links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={close}
                      className="group flex items-center justify-between rounded-2xl px-4 py-3 text-lg text-cream transition-colors hover:bg-cream/5 hover:text-emerald-light"
                    >
                      <ScrambleText text={link.label} />
                      <ArrowUpRight className="h-4 w-4 opacity-40 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-3 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    close();
                    onBook();
                  }}
                  className="flex-1 rounded-full bg-emerald px-5 py-3 text-sm font-bold text-ink transition-colors hover:bg-emerald-light"
                >
                  {t.nav.book}
                </button>
                <button
                  type="button"
                  onClick={toggleLang}
                  className="rounded-full border border-cream/20 px-4 py-3 text-sm text-cream transition-colors hover:border-emerald"
                >
                  {t.nav.toggle}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
