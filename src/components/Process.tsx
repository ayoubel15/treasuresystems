import { useLanguage } from '@/hooks/useLanguage';

export default function Process() {
  const { t } = useLanguage();

  return (
    <section id="process" className="scroll-mt-20 bg-paper px-5 py-20 text-ink sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-5 md:grid-cols-[1fr_0.7fr] md:items-end md:gap-12">
          <div>
            <p className="eyebrow text-forest">{t.nav.process}</p>
            <h2 className="font-display mt-5 max-w-3xl text-4xl leading-tight sm:text-5xl">{t.process.heading}</h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-ink/65">{t.process.intro}</p>
        </div>

        <ol className="mt-12 grid border-t border-ink/15 sm:grid-cols-2 lg:grid-cols-4">
          {t.process.steps.map((step) => (
            <li key={step.number} className="border-b border-ink/15 py-6 sm:min-h-56 sm:border-e sm:px-5 sm:py-8 lg:px-7">
              <span className="font-display text-4xl text-forest">{step.number}</span>
              <h3 className="mt-7 text-xl font-semibold leading-snug">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-ink/65">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
