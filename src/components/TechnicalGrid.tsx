/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Terminal } from "lucide-react";

export interface TechnicalGridProps {
  title?: string;
  items?: { label: string; title: string; text: string }[];
  status?: string;
  terminalLines?: string[];
  image?: string;
}

// Full-width contrast section — inverts from dark-on-light to light-on-dark via contrast tokens
export default function TechnicalGrid({
  title = "Structural Integrity",
  items = [
    { label: "Architecture // 01", title: "The Monochromatic Axis", text: "By removing color, we force the user to interact with shape and hierarchy. The interface becomes a tool of focus, not distraction." },
    { label: "Architecture // 02", title: "Functional Transparency", text: "System status and technical metadata are elevated from secondary information to primary UI elements, celebrating the engineering behind the design." }
  ],
  status = "Verified",
  terminalLines = ["DEPLOYMENT_PACKAGE_V.2.4.0", "PRECISION_INDEX: 0.9992"],
  image
}: TechnicalGridProps) {
  return (
    <section className="bg-contrast py-32 px-6 md:px-12 text-on-contrast overflow-hidden relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 relative z-10">
        <div>
          <h2 className="font-display text-4xl font-bold mb-12 leading-none uppercase text-balance">{title}</h2>
          <div className="space-y-12">
            {items.map((item) => (
              <div key={item.title} className="border-l-[0.5px] border-on-contrast/20 pl-8">
                <span className="font-display text-[10px] uppercase tracking-[0.2em] text-on-contrast-muted block mb-4">{item.label}</span>
                <h4 className="font-display text-xl mb-4">{item.title}</h4>
                <p className="text-on-contrast-muted text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className={`relative bg-on-contrast/5 border border-on-contrast/10 flex flex-col justify-between aspect-square md:aspect-auto overflow-hidden ${image ? "" : "p-8"}`}>
          {image ? (
            <img src={image} alt={title} className="w-full h-full object-cover grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-500" />
          ) : (
            <>
              <div className="flex justify-between items-start">
                <Terminal className="text-on-contrast opacity-50" size={40} strokeWidth={1} aria-hidden="true" />
                <div className="text-right">
                  <span className="font-display text-[10px] uppercase tracking-widest text-on-contrast-muted">Status: {status}</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-[0.5px] bg-on-contrast/10 w-full"></div>
                <div className="h-[0.5px] bg-on-contrast/10 w-3/4"></div>
                <div className="h-[0.5px] bg-on-contrast/10 w-1/2"></div>
              </div>
              <div>
                <p className="font-mono text-[10px] text-on-contrast-muted leading-relaxed">
                  {terminalLines.map((line, idx) => (
                    <span key={idx}>
                      {line}
                      {idx < terminalLines.length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
