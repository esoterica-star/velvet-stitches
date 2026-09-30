/**
 * Cybersigilism ornament — thorned crescents and a four-point star,
 * drawn from the brand's hand-drawn sigil sketches. Decorative only.
 */
export default function Sigil({
  className = "",
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 200 420"
      fill="none"
      aria-hidden
      className={className}
      style={flip ? { transform: "scaleX(-1)" } : undefined}
    >
      <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
        {/* central thorn spine */}
        <path d="M100 10 C 96 60, 104 90, 100 130 C 96 170, 106 200, 100 250 C 95 300, 107 340, 100 410" />
        {/* upper crescent */}
        <path d="M100 130 C 60 128, 42 96, 58 70 C 46 96, 62 120, 100 122" />
        <path d="M100 130 C 140 128, 158 96, 142 70 C 154 96, 138 120, 100 122" />
        {/* thorn spikes off the spine */}
        <path d="M100 90 C 88 78, 74 74, 58 76 C 76 68, 92 72, 102 84" />
        <path d="M100 90 C 112 78, 126 74, 142 76 C 124 68, 108 72, 98 84" />
        <path d="M100 210 C 84 200, 66 198, 48 204 C 68 190, 90 192, 102 204" />
        <path d="M100 210 C 116 200, 134 198, 152 204 C 132 190, 110 192, 98 204" />
        <path d="M100 300 C 86 292, 70 290, 54 296 C 72 282, 92 286, 102 296" />
        <path d="M100 300 C 114 292, 130 290, 146 296 C 128 282, 108 286, 98 296" />
        {/* four-point star */}
        <path d="M100 250 L 104.5 264 L 118 268.5 L 104.5 273 L 100 287 L 95.5 273 L 82 268.5 L 95.5 264 Z" fill="currentColor" fillOpacity="0.85" stroke="none" />
        {/* small crescents below */}
        <path d="M100 340 C 74 336, 62 314, 72 294 C 64 316, 76 332, 100 334" />
        <path d="M100 340 C 126 336, 138 314, 128 294 C 136 316, 124 332, 100 334" />
        {/* curled tips */}
        <path d="M100 410 C 92 396, 78 390, 62 394 C 80 380, 98 388, 104 402" />
        <path d="M100 410 C 108 396, 122 390, 138 394 C 120 380, 102 388, 96 402" />
        {/* hairline ticks */}
        <path d="M40 140 H 58 M142 140 H 160 M36 268 H 60 M140 268 H 164" strokeOpacity="0.6" />
      </g>
    </svg>
  );
}
