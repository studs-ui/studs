import { useEffect, RefObject, useMemo, useState } from 'react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

export default function useOnScreen(ref: RefObject<HTMLElement>) {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = useMemo(
    () => {
      if (ExecutionEnvironment.canUseDOM) {
      return new IntersectionObserver(([entry]) =>
        setIntersecting(entry.isIntersecting)
      )}},
    [ref]
  );

  useEffect(() => {
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return isIntersecting;
}
