"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps, ReactNode } from "react";

type ActiveNavLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string;
  activeClassName: string;
  activeHrefs?: readonly string[];
  blurOnPointerActivation?: boolean;
  children: ReactNode;
  exact?: boolean;
  inactiveClassName?: string;
  scrollToTopWhenActive?: boolean;
};

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function normalizePath(path: string) {
  const withoutHash = path.split("#")[0] ?? path;
  const withoutQuery = withoutHash.split("?")[0] ?? withoutHash;

  if (withoutQuery.length > 1 && withoutQuery.endsWith("/")) {
    return withoutQuery.slice(0, -1);
  }

  return withoutQuery;
}

function pathMatches(pathname: string, href: string, exact: boolean) {
  const currentPath = normalizePath(pathname);
  const targetPath = normalizePath(href);

  if (!targetPath || targetPath.startsWith("http")) {
    return false;
  }

  if (exact) {
    return currentPath === targetPath;
  }

  return currentPath === targetPath || currentPath.startsWith(`${targetPath}/`);
}

export function ActiveNavLink({
  activeClassName,
  activeHrefs,
  blurOnPointerActivation = false,
  children,
  className,
  exact = false,
  href,
  inactiveClassName,
  onClick,
  onPointerUp,
  scrollToTopWhenActive = false,
  ...props
}: ActiveNavLinkProps) {
  const pathname = usePathname();
  const hrefs = activeHrefs?.length ? activeHrefs : [href];
  const isActive = hrefs.some((activeHref) =>
    pathMatches(pathname, activeHref, exact),
  );

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={cx(className, isActive ? activeClassName : inactiveClassName)}
      onClick={(event) => {
        onClick?.(event);

        if (
          event.defaultPrevented ||
          !scrollToTopWhenActive ||
          !isActive ||
          event.button !== 0 ||
          event.metaKey ||
          event.ctrlKey ||
          event.shiftKey ||
          event.altKey
        ) {
          return;
        }

        event.preventDefault();
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
            ? "auto"
            : "smooth",
        });
      }}
      onPointerUp={(event) => {
        onPointerUp?.(event);
        if (blurOnPointerActivation && !event.defaultPrevented) {
          event.currentTarget.blur();
        }
      }}
      {...props}
    >
      {children}
    </Link>
  );
}
