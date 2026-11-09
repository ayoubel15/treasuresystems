import { Check } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

export default function Trust() {
  const { t } = useLanguage();

  return (
    <section id="why" className="scroll-mt-20 bg-forest px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="eyebrow text-[#B6D7C2]">{t.trust.eyebrow}</p>
          <h2 className="font-display mt-6 text-4xl leading-tight sm:text-5xl">{t.trust.heading}</h2>
          <p className="mt-6 max-w-lg text-base leading-8 text-white/75">{t.trust.description}</p>
        </div>
        <ol className="divide-y divide-white/20 border-y border-white/20">
          {t.trust.principles.map((principle, index) => (
            <li key={principle.title} className="grid gap-3 py-5 sm:grid-cols-[3rem_0.8fr_1.2fr] sm:items-start sm:gap-5">
              <span className="font-display text-xl text-[#B6D7C2]">0{index + 1}</span>
              <h3 className="text-lg font-semibold leading-7">{principle.title}</h3>
              <p className="text-sm leading-7 text-white/70">{principle.description}</p>
              <Check aria-hidden="true" className="hidden h-4 w-4 text-[#B6D7C2] sm:block" />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
