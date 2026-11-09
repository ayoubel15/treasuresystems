import Logo from '@/components/Logo';
import { useLanguage } from '@/hooks/useLanguage';

type FooterProps = {
  onBook: () => void;
};

const INSTAGRAM_URL = 'https://instagram.com/treasuresystems';
const WHATSAPP_URL = 'https://wa.me/213662542006';
const EMAIL_HREF = 'mailto:treasuresystems15@gmail.com';
const PHONE_HREF = 'tel:+213662542006';

const linkClass = 'text-sm text-paper/70 transition-colors hover:text-white';

export default function Footer({ onBook }: FooterProps) {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink px-5 py-12 text-paper sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <a href="#top" className="inline-flex items-center gap-3 text-white">
            <Logo className="h-8 w-8" />
            <span className="font-brand text-sm">TREASURE SYSTEMS</span>
          </a>
          <p className="font-display mt-5 max-w-xl text-3xl leading-tight sm:text-4xl">{t.footer.tagline}</p>
        </div>

        <nav aria-label={t.footer.navHeading} className="flex flex-wrap gap-x-6 gap-y-3 md:justify-end">
          <a href="#services" className={linkClass}>{t.footer.links.services}</a>
          <a href="#demo" className={linkClass}>{t.footer.links.work}</a>
          <a href="#process" className={linkClass}>{t.footer.links.process}</a>
          <a href="#faq" className={linkClass}>{t.nav.faq}</a>
          <button type="button" onClick={onBook} className={linkClass}>{t.footer.links.book}</button>
        </nav>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-4 border-t border-white/15 pt-5 text-xs text-paper/55 sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} Treasure Systems. {t.footer.rights}</p>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>{t.footer.contact.instagram}</a>
          <a href={EMAIL_HREF} className={linkClass}>{t.footer.contact.email}</a>
          <a href={PHONE_HREF} dir="ltr" className={linkClass}>{t.footer.contact.phone}</a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>{t.footer.contact.whatsapp}</a>
        </div>
      </div>
    </footer>
  );
}
