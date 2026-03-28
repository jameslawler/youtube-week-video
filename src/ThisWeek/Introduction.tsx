import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { Logo } from "./components/Logo";
import { AnimatedText } from "./components/AnimatedText";
import { RotatingStarburst } from "./backgrounds/RotatingStarburst";

export const Introduction: React.FC<{}> = () => {
  return (
    <AbsoluteFill>
      <RotatingStarburst />

      <Sequence from={35}>
        <Logo />
      </Sequence>

      <Sequence from={50}>
        <AnimatedText
          text="This"
          color="#FFF"
          startLeftPercent={20}
          moveDirection="left"
        />
      </Sequence>

      <Sequence from={50}>
        <AnimatedText
          text="Week"
          color="#FFF"
          startLeftPercent={60}
          moveDirection="right"
        />
      </Sequence>
    </AbsoluteFill>
  );
};
