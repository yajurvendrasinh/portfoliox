/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function Footer() {
  const internalLinks = [
    { label: "HOME", href: "#/" },
  ];

  return (
    <footer className="bg-surface-muted w-full pt-12 pb-[calc(3rem_+_var(--sab))] px-6 md:px-12 border-t-[0.5px] border-outline-variant relative z-30">
      <div className="max-w-7xl mx-auto flex justify-center gap-6 w-full">
        {internalLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="font-sans text-[10px] tracking-[0.1em] uppercase text-ink-faint hover:text-ink transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
