/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mail } from "lucide-react";

export interface FloatingMailButtonProps {
  href?: string;
}

export default function FloatingMailButton({ href = "mailto:contact@linearprecision.com" }: FloatingMailButtonProps) {
  return (
    <div className="fixed bottom-[calc(3rem_+_var(--sab))] right-6 md:right-12 z-50">
      <a
        className="w-16 h-16 bg-accent text-on-accent flex items-center justify-center hover:opacity-90 transition-opacity"
        href={href}
        aria-label="Send email"
      >
        <Mail size={24} aria-hidden="true" />
      </a>
    </div>
  );
}
