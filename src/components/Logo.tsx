import { useId, type SVGProps } from 'react';

export default function Logo(props: SVGProps<SVGSVGElement>) {
  const gradientId = `logo-gradient-${useId().replace(/:/g, '')}`;

  return (
    <svg viewBox="0 0 100 90" aria-hidden="true" {...props}>
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#19DB92" />
          <stop offset="0.6" stopColor="#0AC57A" />
          <stop offset="1" stopColor="#003A19" />
        </linearGradient>
      </defs>
      <polygon fill={`url(#${gradientId})`} points="17,0 100,0 84,19 1,19" />
      <polygon fill={`url(#${gradientId})`} points="24,22 44,25 44,84 24,71" />
      <polygon fill={`url(#${gradientId})`} points="49,24 83,44 83,66 49,46" />
      <polygon fill={`url(#${gradientId})`} points="49,63 80,69 49,89" />
    </svg>
  );
}
