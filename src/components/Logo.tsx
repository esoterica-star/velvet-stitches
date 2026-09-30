/**
 * Velvet Stitch circular brand mark — recreated from her Instagram pfp:
 * black disc, thin silver ring, sparkle star, stacked serif wordmark.
 * Strictly monochrome.
 */
export default function Logo({
  className = "",
  title = "Velvet Stitch",
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg viewBox="0 0 120 120" className={className} role="img" aria-label={title}>
      {/* disc + double ring */}
      <circle cx="60" cy="60" r="58" fill="#0b0b0d" />
      <circle cx="60" cy="60" r="58" fill="none" stroke="#dcdce0" strokeWidth="1.5" />
      <circle cx="60" cy="60" r="53" fill="none" stroke="#dcdce0" strokeOpacity="0.3" strokeWidth="0.8" />

      {/* sparkle star */}
      <path
        d="M60 12 L62.6 21.4 L72 24 L62.6 26.6 L60 36 L57.4 26.6 L48 24 L57.4 21.4 Z"
        fill="#f4f4f2"
      />
      <path d="M78 15 L79 18.5 L82.5 19.5 L79 20.5 L78 24 L77 20.5 L73.5 19.5 L77 18.5 Z" fill="#90909a" />

      {/* wordmark */}
      <text
        x="60"
        y="62"
        textAnchor="middle"
        fill="#f4f4f2"
        fontFamily="Cormorant Garamond, Georgia, 'Times New Roman', serif"
        fontSize="21"
        fontWeight="600"
        letterSpacing="4"
      >
        VELVET
      </text>
      <text
        x="60"
        y="86"
        textAnchor="middle"
        fill="#f4f4f2"
        fontFamily="Cormorant Garamond, Georgia, 'Times New Roman', serif"
        fontSize="21"
        fontWeight="600"
        letterSpacing="4"
      >
        STITCH
      </text>

      {/* hairline + subtitle */}
      <line x1="34" y1="94.5" x2="86" y2="94.5" stroke="#dcdce0" strokeOpacity="0.45" strokeWidth="0.8" />
      <text
        x="60"
        y="104"
        textAnchor="middle"
        fill="#a3a3ab"
        fontFamily="Georgia, serif"
        fontSize="5.6"
        letterSpacing="2.6"
      >
        HANDMADE · JEDDAH
      </text>
    </svg>
  );
}
