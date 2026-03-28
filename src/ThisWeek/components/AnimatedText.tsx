import React from "react";
import { useCurrentFrame, spring, interpolate } from "remotion";
import { loadFont } from "@remotion/google-fonts/ArchivoBlack";

type AnimatedTextProps = {
  text: string;
  color: string;
  startLeftPercent: number; // starting horizontal position in %
  moveDirection: "left" | "right"; // direction to move
  moveDistancePercent?: number; // optional: how far to move
  topPercent?: number; // optional vertical position
  durationFrames?: number; // optional duration of animation
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
  moveDistancePercent = 5, // default move 5%
  topPercent = 40, // default top
  durationFrames = 15, // default duration
}) => {
  const frame = useCurrentFrame();

  // Determine the end value based on direction
  const moveAmount =
    moveDirection === "left" ? -moveDistancePercent : moveDistancePercent;

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
        top: `${topPercent}%`,
        left: `${startLeftPercent + move}%`,
        color,
        fontSize: 150,
        fontFamily,
        textShadow: "0px 0px 20px rgba(0,0,0,0.7)",
        whiteSpace: "nowrap",
        opacity,
      }}
    >
      {text}
    </div>
  );
};
