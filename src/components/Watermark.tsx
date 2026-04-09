/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface WatermarkProps {
  glyph?: string;
  className?: string;
}

export default function Watermark({ glyph = "A", className = "" }: WatermarkProps) {
  return (
    <div
      className={`absolute right-[-5%] bottom-[-10%] opacity-[0.03] select-none pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <span className="font-display text-[40rem] leading-none font-bold">{glyph}</span>
    </div>
  );
}
