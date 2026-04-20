import { useEffect, useRef, useState } from 'react';

export default function useCounter(target, duration = 1600) {
  const [count, setCount] = useState(0);
  const ran = useRef(false);
  const elRef = useRef(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !ran.current) {
        ran.current = true;
        const step = target / (duration / 16);
        let current = 0;
        const timer = setInterval(() => {
          current = Math.min(current + step, target);
          setCount(Math.floor(current));
          if (current >= target) clearInterval(timer);
        }, 16);
      }
    }, { rootMargin: '0px 0px 100px 0px' });
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return [count, elRef];
}
