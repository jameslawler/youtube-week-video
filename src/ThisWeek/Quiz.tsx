import React from "react";
import { AbsoluteFill, Html5Audio, Sequence, staticFile } from "remotion";
import { FallingEmojiBackground } from "./backgrounds/FallingEmojiBackground";
import { QuizQuestion } from "./components/QuizQuestion";
import { CountdownCircle } from "./components/CountdownCircle";
import { CenteredAnimatedText } from "./components/CenteredAnimatedText";

type Question = {
  header: string;
  headerAudio: string;
  type: string;
  data: string;
  answer: string;
  answerAudio: string;
};

interface Props {
  questions: Question[];
  backgroundColor: string;
}

export const Quiz: React.FC<Props> = ({ questions, backgroundColor }) => {
  return (
    <AbsoluteFill>
      <FallingEmojiBackground
        emojis={["🥹", "🌲", "🚗", "😎"]}
        backgroundColor={backgroundColor}
        durationSeconds={10}
      />

      {questions.map((question, index) => (
        <Sequence from={530 * index} durationInFrames={530}>
          <Sequence from={30}>
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
            <Html5Audio src={staticFile(question.headerAudio)} volume={3} />
          </Sequence>

          <Sequence from={30} durationInFrames={330}>
            <CountdownCircle durationSeconds={10} />
          </Sequence>

          <Sequence from={380} durationInFrames={150}>
            <CenteredAnimatedText
              text={question.answer}
              color="#FFF"
              fontSize={100}
              topPercent={85}
              moveDirection="up"
            />
            <Html5Audio src={staticFile(question.answerAudio)} volume={3} />
          </Sequence>
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};
