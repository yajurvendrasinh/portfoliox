/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import ThemeToggle from "./ThemeToggle";

export interface NavigationProps {
  activeItem?: string;
}

const NAV_ITEMS = [
  { label: "HOME", href: "#/" },
  { label: "LINKEDIN", href: "https://www.linkedin.com/in/ygohil", external: true },
];

export default function Navigation({ activeItem = "HOME" }: NavigationProps) {
  return (
    <nav className="flex justify-between items-center px-6 md:px-12 w-full h-16">
      <a href="#/" className="font-display font-bold tracking-tighter text-ink text-lg hover:opacity-70 transition-opacity">
        Yajurvendrasinh Gohil
      </a>
      <div className="hidden md:flex items-center gap-8">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.label}
            href={item.href}
            {...("external" in item && item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className={`font-display uppercase tracking-widest text-[10px] transition-colors ${
              item.label === activeItem ? "text-ink font-bold border-b border-accent pb-1" : "text-ink-subtle hover:text-ink"
            }`}
          >
            {item.label}
          </a>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <a 
          href="/resume.html"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-accent text-on-accent px-6 py-2 font-display uppercase tracking-widest text-[10px] transition-colors hover:bg-accent-hover"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}
