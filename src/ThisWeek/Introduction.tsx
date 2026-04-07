import React from "react";
import { AbsoluteFill, Html5Audio, Sequence, staticFile } from "remotion";
import { Logo } from "./components/Logo";
import { AnimatedText } from "./components/AnimatedText";
import { RotatingStarburst } from "./backgrounds/RotatingStarburst";

export const Introduction: React.FC<{
  titleWord1: string;
  titleWord2: string;
  durationInFrames: number;
}> = ({ titleWord1, titleWord2, durationInFrames }) => {
  return (
    <AbsoluteFill>
      <RotatingStarburst durationInFames={durationInFrames} />

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

      <Sequence from={150}>
        <Html5Audio
          src={staticFile("audio/voices/welcome-back.mp3")}
          volume={3}
        />
      </Sequence>
    </AbsoluteFill>
  );
};
