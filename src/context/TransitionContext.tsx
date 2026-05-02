"use client";
import { createContext, useContext, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";

type TransitionContextType = {
  navigateTo: (href: string) => void;
  overlayRef: React.RefObject<HTMLDivElement | null>;
};

const TransitionContext = createContext<TransitionContextType | null>(null);

export const TransitionProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const overlayRef = useRef<HTMLDivElement>(null);

  const navigateTo = useCallback((href: string) => {
    const overlay = overlayRef.current;
    if (!overlay) {
      router.push(href);
      return;
    }

    // Phase 1: expand from bottom → full screen
    overlay.animate(
      [
        { clipPath: "circle(0% at 50% 120%)" },
        { clipPath: "circle(150% at 50% 120%)" },
      ],
      { duration: 600, easing: "cubic-bezier(0.76, 0, 0.24, 1)", fill: "forwards" }
    ).onfinish = () => {
      // Phase 2: navigate while screen is black
      router.push(href);

      // Phase 3: shrink toward top → reveal new page
      // Small timeout lets the new page render behind the overlay
      setTimeout(() => {
        overlay.animate(
          [
            { clipPath: "circle(150% at 50% -20%)" },
            { clipPath: "circle(0% at 50% -20%)" },
          ],
          { duration: 600, easing: "cubic-bezier(0.76, 0, 0.24, 1)", fill: "forwards" }
        );
      }, 100);
    };
  }, [router]);

  return (
    <TransitionContext.Provider value={{ navigateTo, overlayRef }}>
      {children}
      {/* Overlay lives here — persists across route changes */}
      <div
        ref={overlayRef}
        style={{ clipPath: "circle(0% at 50% 120%)" }}
        className="fixed inset-0 bg-[#16181a] z-[200] pointer-events-none"
      />
    </TransitionContext.Provider>
  );
};

export const useTransition = () => {
  const ctx = useContext(TransitionContext);
  if (!ctx) throw new Error("useTransition must be used inside TransitionProvider");
  return ctx;
};
