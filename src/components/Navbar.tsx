import { useState } from 'react';
import { ArrowUpLeft, Menu, X } from 'lucide-react';
import Logo from '@/components/Logo';
import { useLanguage } from '@/hooks/useLanguage';

export default function Navbar() {
  const { t, toggleLang } = useLanguage();
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#services', label: t.nav.services },
    { href: '#demo', label: t.nav.demo },
    { href: '#projects', label: t.nav.work },
    { href: '#process', label: t.nav.process },
    { href: '#faq', label: t.nav.faq },
  ];

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/95 text-ink backdrop-blur-sm">
      <nav aria-label={t.nav.menu} className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-5 px-5 sm:px-8 lg:px-12">
        <a href="#top" onClick={close} className="flex shrink-0 items-center gap-2" aria-label="Treasure Systems">
          <Logo className="h-8 w-8" />
          <span className="font-brand text-sm text-forest">TREASURE SYSTEMS</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          <ul className="flex items-center gap-6">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-ink/70 transition-colors hover:text-forest">{link.label}</a>
              </li>
            ))}
          </ul>
          <button type="button" onClick={toggleLang} className="border-s border-ink/15 ps-5 text-sm font-semibold text-forest" aria-label={t.nav.toggle}>
            {t.nav.toggle}
          </button>
          <a href="#contact" className="button-primary py-2.5">{t.nav.contact}<ArrowUpLeft aria-hidden="true" className="h-4 w-4" /></a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button type="button" onClick={toggleLang} className="text-sm font-semibold text-forest" aria-label={t.nav.toggle}>{t.nav.toggle}</button>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label={open ? t.nav.closeMenu : t.nav.menu}
            className="flex h-10 w-10 items-center justify-center border border-ink/20"
          >
            {open ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-ink/10 bg-paper px-5 py-4 md:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col">
            {links.map((link) => (
              <li key={link.href} className="border-b border-ink/10">
                <a href={link.href} onClick={close} className="block py-3 text-base text-ink">{link.label}</a>
              </li>
            ))}
          </ul>
          <a href="#contact" onClick={close} className="button-primary mt-4 w-full">{t.nav.contact}<ArrowUpLeft aria-hidden="true" className="h-4 w-4" /></a>
        </div>
      )}
    </header>
  );
}
