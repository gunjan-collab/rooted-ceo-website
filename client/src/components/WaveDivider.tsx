interface Props {
  flip?: boolean;
  color?: string;
  className?: string;
}

export default function WaveDivider({ flip = false, color = "#faf8f5", className = "" }: Props) {
  return (
    <div
      className={`w-full overflow-hidden leading-none -my-1 relative z-[1] ${className}`}
      style={{ transform: flip ? "scaleY(-1)" : undefined }}
    >
      <svg
        viewBox="0 0 1440 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto block"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 C360,50 720,60 1080,35 C1260,22 1380,40 1440,0 L1440,60 L0,60 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
