import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { loadFont } from "@remotion/google-fonts/ArchivoBlack";

interface CountdownCircleProps {
  durationSeconds: number; // countdown in seconds
  radius?: number;
  strokeWidth?: number;
  fps?: number;
}

const { fontFamily } = loadFont("normal", {
  weights: ["400"],
  subsets: ["latin"],
});

export const CountdownCircle: React.FC<CountdownCircleProps> = ({
  durationSeconds,
  radius = 75,
  strokeWidth = 10,
  fps = 30,
}) => {
  const frame = useCurrentFrame();

  // Total frames for the countdown
  const totalFrames = durationSeconds * fps;

  // Progress 0 → 1
  const progress = Math.min(frame / totalFrames, 1);

  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  // Stroke offset for circular progress
  const strokeDashoffset = circumference * (1 - progress);

  // Remaining time in seconds (whole number)
  const remainingSeconds = Math.ceil(durationSeconds * (1 - progress));

  return (
    <AbsoluteFill>
      <div
        style={{
          position: "absolute",
          top: "78%",
          left: "45%",
        }}
      >
        <svg
          height={radius * 2 + strokeWidth * 2}
          width={radius * 2 + strokeWidth * 2}
        >
          {/* Background circle */}
          <circle
            stroke="#DDD"
            fill="#FFF"
            strokeWidth={strokeWidth}
            r={normalizedRadius}
            cx={radius + strokeWidth}
            cy={radius + strokeWidth}
          />
          {/* Foreground progress circle */}
          <circle
            stroke="#FF5555"
            fill="transparent"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference + " " + circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            r={normalizedRadius}
            cx={radius + strokeWidth}
            cy={radius + strokeWidth}
            transform={`rotate(-90 ${radius + strokeWidth} ${radius + strokeWidth})`}
          />
          <text
            x="50%"
            y="53%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontFamily={fontFamily}
            fontSize={radius}
            fill="#333"
          >
            {remainingSeconds}
          </text>
        </svg>
      </div>
    </AbsoluteFill>
  );
};
