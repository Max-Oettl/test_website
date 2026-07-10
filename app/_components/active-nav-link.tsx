"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps, ReactNode } from "react";

type ActiveNavLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string;
  activeClassName: string;
  activeHrefs?: readonly string[];
  children: ReactNode;
  exact?: boolean;
  inactiveClassName?: string;
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
  children,
  className,
  exact = false,
  href,
  inactiveClassName,
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
      {...props}
    >
      {children}
    </Link>
  );
}
