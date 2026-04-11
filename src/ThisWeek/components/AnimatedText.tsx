import React from "react";
import { useCurrentFrame, spring, interpolate } from "remotion";
import { loadFont } from "@remotion/google-fonts/ArchivoBlack";

type AnimatedTextProps = {
  text: string;
  color: string;
  startLeftPercent: number; // starting horizontal position in %
  moveDirection: "left" | "right" | "up" | "down"; // direction to move
  fontSize?: number;
  moveDistancePercent?: number; // optional: how far to move
  topPercent?: number; // optional vertical position
  durationFrames?: number; // optional duration of animation
  transform?: string;
};

const { fontFamily } = loadFont("normal", {
  weights: ["400"],
  subsets: ["latin"],
});

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  color,
  startLeftPercent,
  moveDirection,
  fontSize = 150,
  moveDistancePercent = 5, // default move 5%
  topPercent = 40, // default top
  durationFrames = 15, // default duration
  transform = "",
}) => {
  const frame = useCurrentFrame();

  // Determine the end value based on direction
  const moveAmount =
    moveDirection === "left" || "up"
      ? -moveDistancePercent
      : moveDistancePercent;

  // Horizontal movement with bounce
  const move = spring({
    frame,
    fps: 30,
    from: 0,
    to: moveAmount,
  });

  // Fade-in
  const opacity = interpolate(frame, [0, durationFrames], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        top:
          moveDirection === "up" || moveDirection === "down"
            ? `${topPercent + move}%`
            : `${topPercent}%`,
        left:
          moveDirection === "left" || moveDirection === "right"
            ? `${startLeftPercent + move}%`
            : `${startLeftPercent}%`,
        color,
        fontSize,
        fontFamily,
        textShadow: "8px 8px 8px rgba(0,0,0,0.7)",
        whiteSpace: "nowrap",
        opacity,
        WebkitTextStroke: "4px black",
        transform,
      }}
    >
      {text}
    </div>
  );
};
