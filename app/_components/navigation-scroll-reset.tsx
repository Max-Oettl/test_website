"use client";

import { useLayoutEffect, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

function normalizePathname(pathname: string) {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }

  return pathname;
}

function scrollToPageTop() {
  const root = document.documentElement;
  const previousInlineScrollBehavior = root.style.scrollBehavior;

  // The site uses smooth scrolling for anchor links. Route changes must be
  // instant, otherwise Next.js can restore an intermediate scroll position.
  root.style.scrollBehavior = "auto";
  window.scrollTo(0, 0);
  root.scrollTop = 0;
  document.body.scrollTop = 0;
  root.style.scrollBehavior = previousInlineScrollBehavior;
}

export function NavigationScrollReset() {
  const pathname = usePathname();
  const pendingPathname = useRef<string | null>(null);

  useEffect(() => {
    function handleNavigationClick(event: MouseEvent) {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.altKey ||
        event.ctrlKey ||
        event.metaKey ||
        event.shiftKey
      ) {
        return;
      }

      const target = event.target;
      const link =
        target instanceof Element ? target.closest<HTMLAnchorElement>("a[href]") : null;

      if (!link || link.download || (link.target && link.target !== "_self")) {
        return;
      }

      const targetUrl = new URL(link.href, window.location.href);

      if (targetUrl.origin !== window.location.origin || targetUrl.hash) {
        return;
      }

      const nextPathname = normalizePathname(targetUrl.pathname);
      const currentPathname = normalizePathname(window.location.pathname);

      if (nextPathname === currentPathname) {
        pendingPathname.current = null;
        scrollToPageTop();
        return;
      }

      pendingPathname.current = nextPathname;
    }

    window.addEventListener("click", handleNavigationClick);
    return () => window.removeEventListener("click", handleNavigationClick);
  }, []);

  useLayoutEffect(() => {
    if (pendingPathname.current !== normalizePathname(pathname)) {
      return;
    }

    pendingPathname.current = null;
    scrollToPageTop();

    // Next.js performs its own scroll-and-focus work during navigation. Two
    // animation frames ensure the final rendered page wins that race as well.
    let secondFrame = 0;
    const firstFrame = window.requestAnimationFrame(() => {
      scrollToPageTop();
      secondFrame = window.requestAnimationFrame(scrollToPageTop);
    });

    return () => {
      window.cancelAnimationFrame(firstFrame);
      if (secondFrame) {
        window.cancelAnimationFrame(secondFrame);
      }
    };
  }, [pathname]);

  return null;
}
