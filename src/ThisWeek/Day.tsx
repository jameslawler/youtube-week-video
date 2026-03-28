import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { AnimatedText } from "./components/AnimatedText";
import { FallingEmojiBackground } from "./backgrounds/FallingEmojiBackground";
import { MonthsList } from "./components/MonthsList";
import { DaysList } from "./components/DaysList";
import { CenteredAnimatedText } from "./components/CenteredAnimatedText";
import { WrittenDate } from "./components/WrittenDate";

interface Props {
  daysOfTheWeek: Date[];
  selectedDay: Date;
  backgroundColor: string;
}

export const Day: React.FC<Props> = ({
  daysOfTheWeek,
  selectedDay,
  backgroundColor,
}) => {
  return (
    <AbsoluteFill>
      <FallingEmojiBackground
        emojis={["😇", "😎"]}
        backgroundColor={backgroundColor}
        durationSeconds={10}
      />

      <Sequence from={30}>
        <CenteredAnimatedText
          text={selectedDay.toLocaleDateString("en-US", { weekday: "long" })}
          color="#FFF"
          topPercent={30}
          moveDirection="left"
        />
      </Sequence>

      <Sequence from={90}>
        <DaysList
          daysOfTheWeek={daysOfTheWeek}
          selectedDay={selectedDay}
          highlightSelectedAtFrame={60}
        />
        <MonthsList selectedDay={selectedDay} highlightSelectedAtFrame={210} />
      </Sequence>

      <Sequence from={150}>
        <WrittenDate selectedDay={selectedDay} />
      </Sequence>
    </AbsoluteFill>
  );
};
