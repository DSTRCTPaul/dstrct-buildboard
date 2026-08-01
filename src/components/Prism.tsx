// The prism mark from the OS design language: one beam refracted into the brand spectrum.
// One directive, many outputs. No external assets.
export function Prism({ size = 26 }: { size?: number }) {
  return (
    <svg className="prism" width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
      <defs>
        <linearGradient id="pm-spectrum" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2563eb" />
          <stop offset="0.4" stopColor="#176999" />
          <stop offset="0.7" stopColor="#22d3ee" />
          <stop offset="1" stopColor="#34e0a1" />
        </linearGradient>
      </defs>
      <path d="M16 3 L29 26 H3 Z" fill="none" stroke="url(#pm-spectrum)" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M16 3 V26" stroke="url(#pm-spectrum)" strokeWidth="0.9" opacity="0.5" />
      <path d="M3 26 L16 14 L29 26" fill="none" stroke="url(#pm-spectrum)" strokeWidth="0.9" opacity="0.5" />
    </svg>
  );
}
