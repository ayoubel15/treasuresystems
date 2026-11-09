import { ArrowUpLeft, ClipboardList, MessageCircle, UsersRound, Workflow } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const ICONS = [MessageCircle, ClipboardList, UsersRound, Workflow];

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="scroll-mt-20 bg-paper px-5 py-20 text-ink sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-5 border-b border-ink/15 pb-8 md:grid-cols-[1fr_0.7fr] md:items-end md:gap-12">
          <div>
            <p className="eyebrow text-forest">{t.nav.services}</p>
            <h2 className="font-display mt-5 max-w-3xl text-4xl leading-tight sm:text-5xl">{t.services.heading}</h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-ink/65">{t.services.intro}</p>
        </div>

        <ol className="grid gap-x-12 md:grid-cols-2">
          {t.services.items.map((item, index) => {
            const Icon = ICONS[index];
            return (
              <li key={item.tag} className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-ink/15 py-7 sm:grid-cols-[3.5rem_1fr] sm:gap-6 sm:py-9">
                <span className="font-display pt-1 text-sm text-forest">0{index + 1}</span>
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <p className="eyebrow text-ink/70">{item.tag.split(' / ')[1]}</p>
                    <Icon aria-hidden="true" className="h-5 w-5 shrink-0 text-forest" />
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold leading-snug sm:text-3xl">{item.title}</h3>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-ink/65 sm:text-base">{item.description}</p>
                </div>
              </li>
            );
          })}
        </ol>
        <a href="#contact" className="button-text mt-8 inline-flex">
          {t.nav.contact}
          <ArrowUpLeft aria-hidden="true" className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
