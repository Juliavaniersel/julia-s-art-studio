import React from "react";

interface HandSVGProps {
  className?: string;
  fill?: string;
  style?: React.CSSProperties;
  mirrored?: boolean;
}

export const HandSVG: React.FC<HandSVGProps> = ({ className = "", fill = "#d2a679", style, mirrored = false }) => {
  return (
    <svg 
      viewBox="0 0 100 120" 
      className={className} 
      style={{
        ...style,
        transform: mirrored ? "scaleX(-1) " + (style?.transform || "") : style?.transform
      }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="subtle-brush">
          <feTurbulence type="fractalNoise" baseFrequency="0.1" numOctaves="2" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.5" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>

      <g filter="url(#subtle-brush)">
        {/* Palm */}
        <rect x="30" y="45" width="40" height="45" rx="12" fill={fill} />
        
        {/* Wrist (rounded bottom stroke so it isn't cut off sharply) */}
        <path d="M50 80 L50 102" stroke={fill} strokeWidth="28" fill="none" strokeLinecap="round" />
        
        {/* Thumb */}
        <path d="M32 75 L14 58" stroke={fill} strokeWidth="13" fill="none" strokeLinecap="round" />
        
        {/* Index */}
        <path d="M38 55 L34 20" stroke={fill} strokeWidth="13" fill="none" strokeLinecap="round" />
        
        {/* Middle */}
        <path d="M50 50 L50 12" stroke={fill} strokeWidth="13" fill="none" strokeLinecap="round" />
        
        {/* Ring */}
        <path d="M62 55 L66 18" stroke={fill} strokeWidth="13" fill="none" strokeLinecap="round" />
        
        {/* Pinky */}
        <path d="M70 65 L82 35" stroke={fill} strokeWidth="11" fill="none" strokeLinecap="round" />

        {/* Hand lines inside palm for detail */}
        <path d="M38 75 Q48 85 64 70" stroke="rgba(0,0,0,0.15)" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M32 60 Q45 65 60 55" stroke="rgba(0,0,0,0.15)" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  );
};
