"use client";

import { type ReactNode, useState } from "react";

type DesktopNavigationDropdownProps = {
  children: ReactNode;
};

export function DesktopNavigationDropdown({
  children,
}: DesktopNavigationDropdownProps) {
  const [isDismissed, setIsDismissed] = useState(false);

  return (
    <div
      className="site-nav-dropdown-group group relative"
      data-dismissed={isDismissed ? "true" : undefined}
      onClickCapture={(event) => {
        const target = event.target;
        const link =
          target instanceof Element
            ? target.closest<HTMLAnchorElement>("a[href]")
            : null;

        if (!link || !event.currentTarget.contains(link)) {
          return;
        }

        setIsDismissed(true);
        link.blur();
      }}
      onFocusCapture={(event) => {
        if (
          event.target instanceof HTMLElement &&
          event.target.hasAttribute("data-site-nav-dropdown-trigger")
        ) {
          setIsDismissed(false);
        }
      }}
      onPointerLeave={() => setIsDismissed(false)}
    >
      {children}
    </div>
  );
}
