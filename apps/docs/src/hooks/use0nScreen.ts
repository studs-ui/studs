import { useEffect, RefObject, useMemo, useState } from 'react';
import useIsBrowser from '@docusaurus/useIsBrowser';

export default function useOnScreen(ref: RefObject<HTMLElement>) {
  const [isIntersecting, setIntersecting] = useState(false);
  const isBrowser = useIsBrowser();

  const observer = useMemo(
    () => {
      if (isBrowser) {
      return new IntersectionObserver(([entry]) =>
        setIntersecting(entry.isIntersecting)
      )}},
    [ref]
  );

  useEffect(() => {
    if(isBrowser){
    observer.observe(ref.current);
    return () => observer.disconnect();}
  }, []);

  return isIntersecting;
}
