import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { FallingEmojiBackground } from "./backgrounds/FallingEmojiBackground";
import { QuizQuestion } from "./components/QuizQuestion";
import { CountdownCircle } from "./components/CountdownCircle";
import { CenteredAnimatedText } from "./components/CenteredAnimatedText";

interface Props {
  daysOfTheWeek: Date[];
  selectedDay: Date;
}

export const Quiz: React.FC<Props> = ({ daysOfTheWeek, selectedDay }) => {
  return (
    <AbsoluteFill>
      <FallingEmojiBackground
        emojis={["😇", "😎"]}
        backgroundColor="#ff7306"
        durationSeconds={10}
      />

      <Sequence from={30}>
        <CenteredAnimatedText
          text="Addition"
          color="#FFF"
          fontSize={100}
          topPercent={10}
          moveDirection="down"
        />
        <QuizQuestion questionType="text" questionData="5 + 3 = ?" />
      </Sequence>

      <Sequence from={30} durationInFrames={330}>
        <CountdownCircle durationSeconds={10} />
      </Sequence>

      <Sequence from={380}>
        <CenteredAnimatedText
          text="8"
          color="#FFF"
          fontSize={80}
          topPercent={85}
          moveDirection="up"
        />
      </Sequence>
    </AbsoluteFill>
  );
};
