import { useEffect, useState } from "react";

const breakpoints = {
  mobile: 768,
  tablet: 1024,
  desktop: 1440,
}

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const isMobile = windowSize.width < breakpoints.mobile;
  const isTablet = windowSize.width >= breakpoints.mobile && windowSize.width < breakpoints.tablet;
  const isDesktop = windowSize.width >= breakpoints.tablet;

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { windowSize, isMobile, isTablet, isDesktop };
};
