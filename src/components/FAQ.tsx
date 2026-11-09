import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

export default function FAQ() {
  const { t } = useLanguage();

  return (
    <section id="faq" className="scroll-mt-20 bg-[#E8EEE8] px-5 py-20 text-ink sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
        <div>
          <p className="eyebrow text-forest">{t.nav.faq}</p>
          <h2 className="font-display mt-5 text-4xl leading-tight sm:text-5xl">{t.faq.heading}</h2>
        </div>
        <div className="divide-y divide-ink/15 border-y border-ink/15">
          {t.faq.items.map((item) => (
            <details key={item.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-5 text-base font-semibold leading-7 marker:hidden sm:text-lg">
                <span>{item.question}</span>
                <ChevronDown aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-forest transition-transform group-open:rotate-180" />
              </summary>
              <p className="max-w-2xl pe-8 pt-3 text-sm leading-7 text-ink/70">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}