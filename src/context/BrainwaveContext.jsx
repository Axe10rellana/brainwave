//react
import { createContext, useContext, useEffect, useRef, useState } from "react";

//react-router-dom
import { useLocation } from "react-router-dom";

//scroll-lock
import { disablePageScroll, enablePageScroll } from "scroll-lock";

//context
const BrainwaveContext = createContext();

//hook context
export const useBrainwave = () => {
  return useContext(BrainwaveContext);
};

//provider
export const BrainwaveProvider = ({ children }) => {
  //refs
  const parallaxRef = useRef(null);

  //react router variables
  const pathname = useLocation();

  //state variables
  const [openNavigation, setOpenNavigation] = useState(false);
  const [mounted, setMounted] = useState(false);

  //variables
  const getCurrentYear = new Date().getFullYear();

  //useEffect
  useEffect(() => {
    setMounted(true);
  }, []);

  //functions
  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  const value = {
    getCurrentYear,
    mounted,
    openNavigation,
    parallaxRef,
    pathname,
    toggleNavigation,
    handleClick,
  };

  return (
    <BrainwaveContext.Provider value={value}>
      {children}
    </BrainwaveContext.Provider>
  );
};
