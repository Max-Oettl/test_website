"use client";

import { usePathname } from "next/navigation";
import {
  type ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { createPortal } from "react-dom";

type CompactHeaderMenuProps = {
  brand?: ReactNode;
  children: ReactNode;
  closeLabel: string;
  footer?: ReactNode;
  label: string;
};

function subscribeToClientState() {
  return () => {};
}

export function CompactHeaderMenu({
  brand,
  children,
  closeLabel,
  footer,
  label,
}: CompactHeaderMenuProps) {
  const pathname = usePathname();
  const isClient = useSyncExternalStore(
    subscribeToClientState,
    () => true,
    () => false,
  );
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDetailsElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const closeMenu = useCallback(() => {
    menuRef.current?.removeAttribute("open");
    document.documentElement.classList.remove("site-compact-menu-open");
  }, []);

  const closeMenuAndRestoreFocus = useCallback(() => {
    closeMenu();
    menuRef.current?.querySelector("summary")?.focus();
  }, [closeMenu]);

  useEffect(() => {
    closeMenu();
  }, [closeMenu, pathname]);

  useEffect(() => {
    const desktopNavigation = window.matchMedia("(min-width: 1360px)");

    function closeWhenDesktopNavigationAppears(event: MediaQueryListEvent) {
      if (event.matches) {
        closeMenu();
      }
    }

    desktopNavigation.addEventListener(
      "change",
      closeWhenDesktopNavigationAppears,
    );

    return () => {
      desktopNavigation.removeEventListener(
        "change",
        closeWhenDesktopNavigationAppears,
      );
    };
  }, [closeMenu]);

  useEffect(() => {
    function closeOnOutsidePointer(event: PointerEvent) {
      const menu = menuRef.current;
      const layer = layerRef.current;

      if (
        menu?.open &&
        event.target instanceof Node &&
        !menu.contains(event.target) &&
        !layer?.contains(event.target)
      ) {
        closeMenu();
      }
    }

    function closeOnEscape(event: KeyboardEvent) {
      const menu = menuRef.current;

      if (!menu?.open) {
        return;
      }

      if (event.key === "Escape") {
        closeMenuAndRestoreFocus();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const panel = panelRef.current;
      const focusableElements = panel?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), summary, [tabindex]:not([tabindex="-1"])',
      );

      if (!panel || !focusableElements?.length) {
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      const activeElement = document.activeElement;

      if (event.shiftKey && activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      } else if (!(activeElement instanceof Node) || !panel.contains(activeElement)) {
        event.preventDefault();
        firstElement.focus();
      }
    }

    document.addEventListener("pointerdown", closeOnOutsidePointer);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("pointerdown", closeOnOutsidePointer);
      document.removeEventListener("keydown", closeOnEscape);
      document.documentElement.classList.remove("site-compact-menu-open");
    };
  }, [closeMenu, closeMenuAndRestoreFocus]);

  return (
    <>
      <details
        ref={menuRef}
        className="site-compact-menu group relative min-[1360px]:hidden"
        onToggle={(event) => {
          const nextIsOpen = event.currentTarget.open;

          setIsOpen(nextIsOpen);
          document.documentElement.classList.toggle(
            "site-compact-menu-open",
            nextIsOpen,
          );

          if (nextIsOpen) {
            window.requestAnimationFrame(() => closeButtonRef.current?.focus());
          }
        }}
      >
        <summary
          className="site-compact-menu-trigger flex min-h-12 cursor-pointer list-none items-center gap-3 border border-brand-marine/20 px-4 py-2 font-winnstein-display text-sm font-semibold text-brand-marine outline-none transition-[background-color,border-color,color] duration-150 hover:border-brand-steel-cyan hover:bg-[#edf5f8] focus-visible:border-brand-steel-cyan focus-visible:bg-[#edf5f8] focus-visible:ring-2 focus-visible:ring-brand-steel-cyan/40 [&::-webkit-details-marker]:hidden"
          aria-controls="site-compact-navigation"
        >
          <span>{label}</span>
          <svg
            aria-hidden="true"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M3 5h14M3 10h14M3 15h14"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="1.8"
            />
          </svg>
        </summary>
      </details>

      {isClient
        ? createPortal(
            <div
              ref={layerRef}
              className={`site-compact-menu-layer ${
                isOpen ? "site-compact-menu-layer-open" : ""
              }`}
            >
              <button
                type="button"
                className="site-compact-menu-backdrop absolute inset-0 cursor-default bg-brand-marine/35 backdrop-blur-[2px]"
                aria-label={closeLabel}
                onClick={closeMenuAndRestoreFocus}
              />
              <div
                ref={panelRef}
                className="site-compact-menu-panel relative ml-auto flex h-full w-full max-w-none flex-col border-l border-brand-marine/15 bg-white shadow-[-18px_0_45px_rgba(20,36,82,0.16)] sm:max-w-[30rem]"
                role="dialog"
                aria-modal="true"
                aria-label={label}
                onClick={(event) => {
                  if (
                    event.target instanceof Element &&
                    event.target.closest("a, button")
                  ) {
                    closeMenu();
                  }
                }}
              >
                {brand ? (
                  <div className="shrink-0 border-b border-brand-steel-cyan/20 bg-white px-5 sm:hidden">
                    {brand}
                  </div>
                ) : null}

                <div className="flex min-h-16 shrink-0 items-center justify-between border-b border-brand-marine/12 px-5">
                  <p className="font-winnstein-display text-base font-bold text-brand-marine">
                    {label}
                  </p>
                  <button
                    ref={closeButtonRef}
                    type="button"
                    className="flex min-h-11 min-w-11 items-center justify-center border border-brand-marine/15 text-brand-marine transition-colors hover:border-brand-steel-cyan hover:bg-brand-steel-cyan-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-steel-cyan"
                    aria-label={closeLabel}
                    onClick={closeMenuAndRestoreFocus}
                  >
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="m4 4 12 12M16 4 4 16"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeWidth="1.8"
                      />
                    </svg>
                  </button>
                </div>

                <nav
                  id="site-compact-navigation"
                  className="site-compact-menu-scroll min-h-0 flex-1 overflow-y-auto overscroll-contain"
                  aria-label={label}
                >
                  {children}
                </nav>

                {footer ? (
                  <div className="shrink-0 border-t border-brand-marine/12 bg-white p-4 sm:p-5">
                    {footer}
                  </div>
                ) : null}
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
