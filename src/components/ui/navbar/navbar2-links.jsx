"use client";
import { useEffect, useRef, useMemo } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { usePathname } from "next/navigation";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);

const ACTIVE_COLOR = "#529fbe";
const IDLE_COLOR = "white";

const Navbar2Links = ({ setnavbar2bool, navbar2bool }) => {
  const pathname = usePathname();
  const containerRef = useRef(null);

  // ✅ Single ref array instead of navref0–navref3
  const itemRefs = useRef([]);

  // ✅ Stable array — not recreated on every render
  const navItems = useMemo(() => [
    { id: 0, name: "home",    link: "/",        classname: "texthome"    },
    { id: 1, name: "work",    link: "/work",     classname: "textwork"    },
    { id: 2, name: "contact", link: "/contact",  classname: "textcontact" },
  ], []);

  // ✅ SplitType with cleanup — re-runs when nav opens
  useEffect(() => {
    if (!navbar2bool) return;

    const splits = navItems.map((item) => {
      const split = new SplitType(`.${item.classname}`, { types: "chars" });
      const anim = gsap.from(split.chars, {
        y: 90,
        delay: 0.05,
        stagger: 0.03,
        duration: 0.3,
        ease: "power2.out",
      });
      return { split, anim };
    });

    return () => {
      splits.forEach(({ split, anim }) => {
        anim.kill();
        split.revert(); // ✅ restore DOM between open/close cycles
      });
    };
  }, [navbar2bool, navItems]);

  const close = () => setnavbar2bool(false);

  return (
    <ul
      ref={containerRef}
      className="flex flex-col place-content-around items-start sm:items-center my-auto px-10 sm:px-0 w-full sm:w-auto gap-2"
    >
      {navItems.map((item, i) => {
        const isActive =
          item.link === "/"
            ? pathname === "/"
            : pathname.startsWith(item.link);

        return (
          <li
            key={item.id}
            ref={(el) => (itemRefs.current[i] = el)}
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
            className="group"
            onClick={close}
          >
            <Link href={item.link}>
              <p
                style={{ color: isActive ? ACTIVE_COLOR : IDLE_COLOR }}
                // ✅ Fixed: was `hover:[#89c2d7]` (invalid) — now correct Tailwind + CSS var
                className={`${item.classname} mylabel cursor-pointer tracking-tighter font-medium text-5xl sm:text-7xl md:text-8xl transition-colors duration-150 hover:text-[#89c2d7] capitalize`}
              >
                {item.name}
              </p>
              {/* ✅ Consistent underline on all items, not just home */}
              <div className="h-[2px] w-0 rounded-full bg-white/60 group-hover:w-full transition-all duration-200" />
            </Link>
          </li>
        );
      })}

      {/* ✅ Moved out of <ul> — decorative, not a list item */}
      <div className="h-10 w-5 rounded-full border border-white/30 relative mt-4" aria-hidden="true">
        <div className="h-2 w-2 rounded-full bg-white left-[5.6px] scrollindic absolute" />
      </div>
    </ul>
  );
};

export default Navbar2Links;