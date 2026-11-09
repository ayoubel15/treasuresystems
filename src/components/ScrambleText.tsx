import { useState } from 'react';
import { useScramble } from '@/hooks/useScramble';

type ScrambleTextProps = {
  text: string;
  className?: string;
};

export function ScrambleText({ text, className }: ScrambleTextProps) {
  const [trigger, setTrigger] = useState(0);
  const display = useScramble(text, trigger, 500);

  return (
    <span className={className} onMouseEnter={() => setTrigger((count) => count + 1)}>
      {display}
    </span>
  );
}

export function ScrambleIn({ text, className }: ScrambleTextProps) {
  const display = useScramble(text, 1, 900);
  return <span className={className}>{display}</span>;
}
