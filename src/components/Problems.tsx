import { useLanguage } from '@/hooks/useLanguage';

export default function Problems() {
  const { t } = useLanguage();

  return (
    <section id="problems" className="bg-ink px-5 py-20 text-paper sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="eyebrow text-[#B6D7C2]">{t.problems.eyebrow}</p>
          <h2 className="font-display mt-6 max-w-xl text-4xl leading-tight sm:text-5xl">{t.problems.heading}</h2>
          <p className="mt-6 max-w-lg text-base leading-8 text-paper/70">{t.problems.description}</p>
        </div>

        <ol className="grid gap-x-10 sm:grid-cols-2">
          {t.problems.items.map((item, index) => (
            <li key={item.title} className="border-t border-paper/25 py-5 sm:py-7">
              <span className="font-display text-sm text-[#B6D7C2]">0{index + 1}</span>
              <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-paper/65">{item.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}