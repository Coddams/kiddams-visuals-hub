import React from "react";

type SpinnerProps = {
  color?: string;
  size?: "sm" | "md" | "lg" | "xl";
};

const Spinner: React.FC<SpinnerProps> = ({ color = "#A855F7", size = "md" }) => {
  // Define sizes
  const sizeMap = {
    sm: 24,
    md: 48,
    lg: 72,
    xl: 196,
  };

  const dotSize = sizeMap[size] / 2; // Dots are half the loader
  const translate = sizeMap[size] / 2; // Distance for before dot

  const loaderStyle: React.CSSProperties = {
    width: `${sizeMap[size]}px`,
    height: `${sizeMap[size]}px`,
    display: "inline-block",
    position: "relative",
    color: "#FFF",
    boxSizing: "border-box",
    animation: "rotation 1s linear infinite",
    marginLeft: "10px",
  };

  const sharedDotStyle: React.CSSProperties = {
    content: "''",
    boxSizing: "border-box",
    position: "absolute" as const,
    width: `${dotSize}px`,
    height: `${dotSize}px`,
    top: "50%",
    left: "50%",
    transform: "scale(0.5) translate(0, 0)",
    backgroundColor: "#FFF",
    borderRadius: "50%",
    animation: "animloader 1s infinite ease-in-out",
  };

  const beforeStyle = {
    ...sharedDotStyle,
    backgroundColor: color,
    transform: `scale(0.5) translate(-${translate}px, -${translate}px)`,
  };

  return (
    <span style={loaderStyle}>
      <span style={sharedDotStyle}></span>
      <span style={beforeStyle}></span>
      <style>
        {`
          @keyframes rotation {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          @keyframes animloader {
            50% {
              transform: scale(1) translate(-50%, -50%);
            }
          }
        `}
      </style>
    </span>
  );
};

export default Spinner;
