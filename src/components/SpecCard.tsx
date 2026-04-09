/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface SpecCardProps {
  version?: string;
  label?: string;
  specs?: { name: string; value: string }[];
}

const DEFAULT_SPECS = [
  { name: "TopAppBar", value: "FIXED_TOP_0" },
  { name: "Blur Radius", value: "20PX_ATMOSPHERIC" },
  { name: "Easing", value: "0.2, 0, 0, 1" },
];

export default function SpecCard({
  version = "VER_2.4.0",
  label = "Navigation Logic",
  specs = DEFAULT_SPECS,
}: SpecCardProps) {
  return (
    <div className="p-8 bg-surface-high border-[0.5px] border-outline-variant/20 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 font-display text-[10px] tracking-widest text-ink-faint">
        {version}
      </div>
      <p className="font-display text-xs tracking-widest uppercase mb-8 text-ink-subtle">{label}</p>
      <ul className="space-y-4">
        {specs.map((spec) => (
          <li key={spec.name} className="flex justify-between items-end border-b-[0.5px] border-outline-variant/30 pb-2">
            <span className="text-xs uppercase font-medium">{spec.name}</span>
            <span className="font-display text-[10px] text-ink-faint">{spec.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
