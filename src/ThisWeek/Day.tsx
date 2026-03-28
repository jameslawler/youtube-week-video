import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { AnimatedText } from "./components/AnimatedText";
import { FallingEmojiBackground } from "./backgrounds/FallingEmojiBackground";

export const Day: React.FC<{}> = () => {
  return (
    <AbsoluteFill>
      <FallingEmojiBackground
        emojis={["😇", "😎"]}
        backgroundColor="#fe3104"
        durationSeconds={10}
      />

      <Sequence from={60}>
        <AnimatedText
          text="Day"
          color="#FFF"
          startLeftPercent={20}
          moveDirection="left"
        />
      </Sequence>

      <Sequence from={60}>
        <AnimatedText
          text="One"
          color="#FFF"
          startLeftPercent={60}
          moveDirection="right"
        />
      </Sequence>
    </AbsoluteFill>
  );
};
