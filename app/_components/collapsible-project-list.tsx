"use client";

import { Children, type ReactNode, useState } from "react";

type CollapsibleProjectListProps = {
  action?: ReactNode;
  children: ReactNode;
  collapseLabel: string;
  expandLabel: string;
  visibleCount?: number;
};

export function CollapsibleProjectList({
  action,
  children,
  collapseLabel,
  expandLabel,
  visibleCount = 3,
}: CollapsibleProjectListProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const projects = Children.toArray(children);
  const visibleProjects = projects.slice(0, visibleCount);
  const additionalProjects = projects.slice(visibleCount);

  return (
    <div className="mt-12">
      <div className="space-y-6">{visibleProjects}</div>

      {additionalProjects.length > 0 ? (
        <>
          <div
            className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
              isExpanded
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="min-h-0 overflow-hidden">
              <div className="space-y-6 pt-6">{additionalProjects}</div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] sm:items-center">
            <span
              aria-hidden="true"
              className="hidden sm:col-start-1 sm:row-start-1 sm:block"
            />
            <button
              type="button"
              aria-expanded={isExpanded}
              onClick={() => setIsExpanded((currentValue) => !currentValue)}
              className="group inline-flex min-h-12 items-center justify-center gap-4 border border-brand-marine/20 bg-white px-6 font-winnstein-display text-sm font-bold text-brand-marine transition-colors hover:border-brand-steel-cyan hover:text-brand-steel-cyan focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-steel-cyan focus-visible:ring-offset-4 sm:col-start-2 sm:row-start-1 sm:self-center"
            >
              {isExpanded ? collapseLabel : expandLabel}
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                className={`h-4 w-4 transition-transform duration-300 ${
                  isExpanded ? "rotate-180" : ""
                }`}
              >
                <path
                  d="m5 7.5 5 5 5-5"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.7"
                />
              </svg>
            </button>
            {action ? (
              <div className="flex items-center justify-center sm:col-start-3 sm:row-start-1 sm:self-center sm:justify-end">
                {action}
              </div>
            ) : null}
          </div>
        </>
      ) : action ? (
        <div className="mt-8 flex justify-center sm:justify-end">{action}</div>
      ) : null}
    </div>
  );
}
