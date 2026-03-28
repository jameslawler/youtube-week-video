import { Starburst } from "@remotion/starburst";
import React from "react";
import { useCurrentFrame } from "remotion";

export const RotatingStarburst: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <Starburst
      rays={16}
      colors={["#1b9af9", "#2ca3f8"]}
      rotation={frame}
      durationInFrames={150}
    />
  );
};
