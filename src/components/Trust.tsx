import { ArrowRight, Bot, CheckCircle2, Cpu, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const trustIcons = [Bot, Cpu, ShieldCheck];

export default function Trust() {
  const { t } = useLanguage();
  const trustPoints = t.trust.cards.map((card, index) => ({
    icon: trustIcons[index % trustIcons.length],
    title: card.title,
    description: card.description,
  }));

  return (
    <section id="trust" className="relative px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-emerald/15 bg-forest/40 p-6 sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-emerald-light">{t.trust.eyebrow}</p>
            <h2 className="font-display mt-4 text-4xl uppercase text-cream sm:text-5xl">
              {t.trust.heading}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-[1.7] text-cream/75">
              {t.trust.description}
            </p>
            <ul className="mt-8 space-y-4">
              {t.trust.bullets.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-cream/85">
                  <CheckCircle2 className="h-5 w-5 text-emerald" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-emerald/50 bg-emerald/10 px-5 py-3 text-sm font-semibold text-emerald-light hover:bg-emerald/20"
            >
              {t.trust.cta}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="grid gap-4">
            {trustPoints.map(({ icon: Icon, title, description }) => (
              <article key={title} className="rounded-2xl border border-cream/10 bg-ink/70 p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald/10 text-emerald">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-2xl uppercase text-cream">{title}</h3>
                </div>
                <p className="mt-4 text-sm leading-[1.6] text-cream/70">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
