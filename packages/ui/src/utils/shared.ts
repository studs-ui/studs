export const generateUniqueId = (prefix: string): string => {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
};

export const isMobile = (): boolean => {
  if (typeof window !== undefined) return window.innerWidth < 600;
  return false;
};
export const isMobileDevice = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  if (/windows phone/i.test(userAgent)) {
    return true;
  }
  if (/android/i.test(userAgent)) {
    return true;
  }
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return true;
  }
  return false;
};
export const isTablet = (): boolean => {
  if (typeof window !== undefined) return window.innerWidth < 900;
  return false;
};
export const isDesktop = (): boolean => {
  if (typeof window !== undefined) return window.innerWidth > 900;
  return false;
};
