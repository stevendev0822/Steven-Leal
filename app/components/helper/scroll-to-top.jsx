"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";
import { isBrowser, safeWindow } from "@/utils/browser";

const DEFAULT_BTN_CLS =
  "fixed bottom-8 right-6 z-50 flex items-center rounded-full bg-gradient-to-r from-pink-500 to-violet-600 p-4 hover:text-xl transition-all duration-300 ease-out";
const SCROLL_THRESHOLD = 50;

const ScrollToTop = () => {
  const [btnCls, setBtnCls] = useState(DEFAULT_BTN_CLS + " hidden");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || !isBrowser()) return;
    
    const handleScroll = () => {
      if (safeWindow.scrollY > SCROLL_THRESHOLD) {
        setBtnCls(DEFAULT_BTN_CLS.replace(" hidden", ""));
      } else {
        setBtnCls(DEFAULT_BTN_CLS + " hidden");
      }
    };
    
    safeWindow.addEventListener("scroll", handleScroll, { passive: true });
    
    // Initial check
    handleScroll();
    
    return () => {
      safeWindow.removeEventListener("scroll", handleScroll, { passive: true });
    };
  }, [isMounted]);

  const onClickBtn = () => {
    safeWindow.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button className={btnCls} onClick={onClickBtn}>
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTop;
