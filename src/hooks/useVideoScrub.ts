import { useCallback, useEffect, useRef, type RefObject } from 'react';

export function useVideoScrub(videoRef: RefObject<HTMLVideoElement>) {
  const seekingRef = useRef(false);
  const pendingRef = useRef<number | null>(null);

  const seekTo = useCallback(
    (time: number) => {
      const video = videoRef.current;
      if (!video) return;
      if (seekingRef.current) {
        pendingRef.current = time;
        return;
      }
      seekingRef.current = true;
      video.currentTime = time;
    },
    [videoRef]
  );

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onSeeked = () => {
      seekingRef.current = false;
      const pending = pendingRef.current;
      if (pending !== null) {
        pendingRef.current = null;
        seekTo(pending);
      }
    };

    video.pause();
    video.addEventListener('seeked', onSeeked);
    return () => video.removeEventListener('seeked', onSeeked);
  }, [videoRef, seekTo]);

  const scrubBy = useCallback(
    (deltaPx: number) => {
      const video = videoRef.current;
      if (!video || !Number.isFinite(video.duration) || video.duration <= 0) return;
      const duration = video.duration;
      const base = pendingRef.current ?? video.currentTime;
      const delta = (deltaPx / window.innerWidth) * duration * 0.8;
      const next = (((base + delta) % duration) + duration) % duration;
      seekTo(next);
    },
    [videoRef, seekTo]
  );

  return { scrubBy };
}
