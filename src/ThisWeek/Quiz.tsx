import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { FallingEmojiBackground } from "./backgrounds/FallingEmojiBackground";
import { QuizQuestion } from "./components/QuizQuestion";
import { CountdownCircle } from "./components/CountdownCircle";
import { CenteredAnimatedText } from "./components/CenteredAnimatedText";

type Question = {
  header: string;
  type: string;
  data: string;
  answer: string;
};

interface Props {
  questions: Question[];
  backgroundColor: string;
}

export const Quiz: React.FC<Props> = ({ questions, backgroundColor }) => {
  return (
    <AbsoluteFill>
      <FallingEmojiBackground
        emojis={["😇", "😎"]}
        backgroundColor={backgroundColor}
        durationSeconds={10}
      />

      {questions.map((question, index) => (
        <Sequence from={400 * index} durationInFrames={400}>
          <Sequence from={30 * (index + 1)}>
            <CenteredAnimatedText
              text={question.header}
              color="#FFF"
              fontSize={100}
              topPercent={10}
              moveDirection="down"
            />
            <QuizQuestion
              questionType={question.type}
              questionData={question.data}
            />
          </Sequence>

          <Sequence from={30 * (index + 1)} durationInFrames={330}>
            <CountdownCircle durationSeconds={10} />
          </Sequence>

          <Sequence from={380 * (index + 1)}>
            <CenteredAnimatedText
              text={question.answer}
              color="#FFF"
              fontSize={80}
              topPercent={85}
              moveDirection="up"
            />
          </Sequence>
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};
