/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function Manifesto() {
  const items = [
    {
      id: "01 / REDUCTION",
      text: "We believe that complexity is a failure of design. Our approach starts by stripping away the non-essential until only the structural truth remains.",
    },
    {
      id: "02 / PRECISION",
      text: "Every pixel is a decision. Every white space is a breath. We utilize mathematical grids to ensure perfect optical balance across all digital canvases.",
    },
    {
      id: "03 / HONESTY",
      text: "Digital materials should not pretend to be physical ones. We celebrate the raw, the monochromatic, and the functional nature of the machine.",
    },
  ];

  return (
    <section id="process" className="px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-12 gap-12 items-start">
        <div className="col-span-12 md:col-span-4 sticky top-32">
          <span className="font-display text-[10px] font-bold uppercase tracking-[0.3em] text-ink-subtle border-l-2 border-accent pl-4 mb-4 block">
            Manifesto
          </span>
          <h2 className="font-display text-5xl font-bold tracking-tighter uppercase leading-[0.9] text-balance">
            The Linear <br /> Process
          </h2>
        </div>
        <div className="col-span-12 md:col-span-7 md:col-start-6 space-y-16">
          {items.map((item) => (
            <div key={item.id} className="space-y-6">
              <span className="font-display text-xs font-medium text-ink-faint">{item.id}</span>
              <p className="text-2xl leading-snug text-ink">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
