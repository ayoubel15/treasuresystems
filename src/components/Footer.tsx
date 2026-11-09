import BackgroundMedia from '@/components/BackgroundMedia';
import Logo from '@/components/Logo';
import { ScrambleText } from '@/components/ScrambleText';
import { useLanguage } from '@/hooks/useLanguage';
import { VIDEOS } from '@/lib/media';

type FooterProps = {
  onBook: () => void;
};

const INSTAGRAM_URL = 'https://instagram.com/treasuresystems';
const WHATSAPP_URL = 'https://wa.me/213662542006';
const EMAIL_HREF = 'mailto:treasuresystems15@gmail.com';
const PHONE_HREF = 'tel:+213662542006';

const linkClass =
  'text-base text-cream/85 transition-colors duration-300 hover:text-emerald-light';

export default function Footer({ onBook }: FooterProps) {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="relative grid min-h-screen grid-cols-1 md:grid-cols-2">
      <div className="relative flex min-h-[50vh] items-center justify-center overflow-hidden border-b border-cream/10 py-20 md:min-h-screen md:border-b-0 md:border-e">
        <BackgroundMedia src={VIDEOS.footer} />
        <Logo className="relative z-10 h-28 w-28 drop-shadow-[0_0_30px_rgba(10,197,122,0.35)] sm:h-36 sm:w-36" />
      </div>

      <div className="flex flex-col justify-between gap-12 bg-ink px-6 py-16 sm:px-10 lg:px-16">
        <div>
          <p className="font-brand text-sm tracking-[0.25em] text-cream/70">TREASURE SYSTEMS</p>
          <p className="font-display mt-4 text-4xl leading-[1.1] uppercase text-cream sm:text-5xl">
            {t.footer.tagline}
          </p>
        </div>

        <nav aria-label={t.footer.navHeading} className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="mb-4 text-xs uppercase tracking-[0.2em] text-cream/60">{t.footer.navHeading}</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="#services" className={linkClass}>
                  <ScrambleText text={t.footer.links.services} />
                </a>
              </li>
              <li>
                <a href="#projects" className={linkClass}>
                  <ScrambleText text={t.footer.links.work} />
                </a>
              </li>
              <li>
                <a href="#process" className={linkClass}>
                  <ScrambleText text={t.footer.links.process} />
                </a>
              </li>
              <li>
                <button type="button" onClick={onBook} className={`${linkClass} text-start`}>
                  <ScrambleText text={t.footer.links.book} />
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs uppercase tracking-[0.2em] text-cream/60">{t.footer.contactHeading}</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  {t.footer.contact.instagram}
                </a>
              </li>
              <li>
                <a href={EMAIL_HREF} className={`${linkClass} break-all`}>
                  {t.footer.contact.email}
                </a>
              </li>
              <li>
                <a href={PHONE_HREF} dir="ltr" className={`${linkClass} inline-block text-start`}>
                  {t.footer.contact.phone}
                </a>
              </li>
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  {t.footer.contact.whatsapp}
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <p className="text-xs text-cream/60">
          © {year} Treasure Systems. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
