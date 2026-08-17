"use client";

import { usePathname } from "next/navigation";
import { type ReactNode, useEffect, useRef } from "react";

type CompactHeaderMenuProps = {
  children: ReactNode;
  label: string;
};

export function CompactHeaderMenu({
  children,
  label,
}: CompactHeaderMenuProps) {
  const pathname = usePathname();
  const menuRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    menuRef.current?.removeAttribute("open");
  }, [pathname]);

  useEffect(() => {
    function closeOnOutsidePointer(event: PointerEvent) {
      const menu = menuRef.current;

      if (
        menu?.open &&
        event.target instanceof Node &&
        !menu.contains(event.target)
      ) {
        menu.removeAttribute("open");
      }
    }

    function closeOnEscape(event: KeyboardEvent) {
      const menu = menuRef.current;

      if (event.key !== "Escape" || !menu?.open) {
        return;
      }

      menu.removeAttribute("open");
      menu.querySelector("summary")?.focus();
    }

    document.addEventListener("pointerdown", closeOnOutsidePointer);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("pointerdown", closeOnOutsidePointer);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  return (
    <details ref={menuRef} className="group relative xl:hidden">
      <summary className="site-compact-menu-trigger flex cursor-pointer list-none items-center border border-brand-marine/20 px-4 py-2 font-winnstein-display text-sm font-semibold text-brand-marine outline-none transition-[background-color,border-color,color] duration-150 hover:border-brand-steel-cyan hover:bg-[#edf5f8] focus-visible:border-brand-steel-cyan focus-visible:bg-[#edf5f8] focus-visible:ring-2 focus-visible:ring-brand-steel-cyan/40 [&::-webkit-details-marker]:hidden">
        {label}
      </summary>
      <div
        className="absolute right-0 mt-3 w-72 border border-brand-marine/15 bg-white p-3 shadow-[0_18px_45px_rgba(20,36,82,0.12)]"
        onClick={(event) => {
          if (
            event.target instanceof Element &&
            event.target.closest("a, button")
          ) {
            menuRef.current?.removeAttribute("open");
          }
        }}
      >
        {children}
      </div>
    </details>
  );
}
