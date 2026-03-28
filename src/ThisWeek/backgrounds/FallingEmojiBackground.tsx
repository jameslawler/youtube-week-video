import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";

type FallingEmojiProps = {
  emojis: string[];
  backgroundColor: string;
  durationSeconds?: number;
};

const initialPositions = [
  {
    left: 5,
    top: 5,
  },
  {
    left: 5,
    top: 30,
  },
  {
    left: 5,
    top: 75,
  },
  {
    left: 15,
    top: 15,
  },
  {
    left: 15,
    top: 50,
  },
  {
    left: 20,
    top: 90,
  },
  {
    left: 40,
    top: 20,
  },
  {
    left: 40,
    top: 65,
  },
  {
    left: 50,
    top: 100,
  },
  {
    left: 55,
    top: 15,
  },
  {
    left: 60,
    top: 60,
  },
  {
    left: 60,
    top: 90,
  },
  {
    left: 70,
    top: 10,
  },
  {
    left: 70,
    top: 55,
  },
  {
    left: 75,
    top: 85,
  },
  {
    left: 85,
    top: 20,
  },
  {
    left: 90,
    top: 45,
  },
];

export const FallingEmojiBackground: React.FC<FallingEmojiProps> = ({
  emojis,
  backgroundColor,
  durationSeconds = 10,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const totalFrames = durationSeconds * fps;
  const frameProgress = ((frame / totalFrames) % 1) * 120;

  return (
    <AbsoluteFill style={{ backgroundColor }}>
      {initialPositions.map((position, index) => {
        const top = ((position.top - 20 + frameProgress) % 120) - 20;
        const emojiIndex = index % emojis.length;

        return (
          <div
            key={index}
            style={{
              position: "absolute",
              top: `${top}%`,
              left: `${position.left}%`,
              fontSize: "120px",
              userSelect: "none",
              opacity: 0.05,
              filter: "grayscale(1) brightness(1)",
            }}
          >
            {emojis[emojiIndex]}
          </div>
        );
      })}
    </AbsoluteFill>
  );
};
