import React from "react";
import { useCurrentFrame, spring, interpolate } from "remotion";
import { loadFont } from "@remotion/google-fonts/ArchivoBlack";

type Props = {
  text: string;
  color: string;
  moveDirection: "left" | "right" | "up" | "down";
  fontSize?: number;
  moveDistancePercent?: number;
  topPercent?: number;
  durationFrames?: number;
};

const { fontFamily } = loadFont("normal", {
  weights: ["400"],
  subsets: ["latin"],
});

export const CenteredAnimatedText: React.FC<Props> = ({
  text,
  color,
  moveDirection,
  fontSize = 150,
  moveDistancePercent = 5,
  topPercent = 40,
  durationFrames = 15,
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
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color,
        fontSize,
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
