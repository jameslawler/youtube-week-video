import React from "react";
import { AbsoluteFill, Html5Audio, Sequence, staticFile } from "remotion";
import { RotatingStarburst } from "./backgrounds/RotatingStarburst";
import { CenteredAnimatedText } from "./components/CenteredAnimatedText";

export const Ending: React.FC<{
  message: string;
  durationInFrames: number;
}> = ({ message, durationInFrames }) => {
  return (
    <AbsoluteFill>
      <RotatingStarburst durationInFames={durationInFrames} />

      <Sequence from={20}>
        <CenteredAnimatedText
          text={message}
          color="#FFF"
          moveDirection="left"
        />
        <Html5Audio
          src={staticFile("audio/voices/see-you-next-week.mp3")}
          volume={3}
        />
      </Sequence>
    </AbsoluteFill>
  );
};
