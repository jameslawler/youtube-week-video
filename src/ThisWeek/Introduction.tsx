import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { Logo } from "./components/Logo";
import { AnimatedText } from "./components/AnimatedText";
import { RotatingStarburst } from "./backgrounds/RotatingStarburst";

export const Introduction: React.FC<{
  titleWord1: string;
  titleWord2: string;
}> = ({ titleWord1, titleWord2 }) => {
  return (
    <AbsoluteFill>
      <RotatingStarburst />

      <Sequence from={35}>
        <Logo />
      </Sequence>

      <Sequence from={50}>
        <AnimatedText
          text={titleWord1}
          color="#FFF"
          startLeftPercent={20}
          moveDirection="left"
        />
      </Sequence>

      <Sequence from={50}>
        <AnimatedText
          text={titleWord2}
          color="#FFF"
          startLeftPercent={70}
          moveDirection="right"
        />
      </Sequence>
    </AbsoluteFill>
  );
};
