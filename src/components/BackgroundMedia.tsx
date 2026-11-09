import { useState, type RefObject } from 'react';

type BackgroundMediaProps = {
  src: string;
  videoRef?: RefObject<HTMLVideoElement>;
  loop?: boolean;
  autoPlay?: boolean;
};

export default function BackgroundMedia({
  src,
  videoRef,
  loop = true,
  autoPlay = true,
}: BackgroundMediaProps) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const showVideo = src !== '' && !failed;

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="dot-grid absolute inset-0 opacity-40" />
      <div className="ambient-glow" />
      {showVideo && (
        <video
          ref={videoRef}
          src={src}
          muted
          playsInline
          loop={loop}
          autoPlay={autoPlay}
          preload="auto"
          onLoadedData={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={`h-full w-full object-cover transition-opacity duration-700 ${
            loaded ? 'opacity-70' : 'opacity-0'
          }`}
        />
      )}
      <div className="absolute inset-0 bg-ink/55" />
    </div>
  );
}
