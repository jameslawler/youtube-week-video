import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { AnimatedText } from "./components/AnimatedText";
import { FallingEmojiBackground } from "./backgrounds/FallingEmojiBackground";
import { MonthsList } from "./components/MonthsList";
import { DaysList } from "./components/DaysList";
import { CenteredAnimatedText } from "./components/CenteredAnimatedText";

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
        <DaysList daysOfTheWeek={daysOfTheWeek} selectedDay={selectedDay} />
        <MonthsList selectedDay={selectedDay} />
      </Sequence>

      <Sequence from={70}>
        <AnimatedText
          text={selectedDay.getDate().toString().padStart(2, "0")}
          color="#FFF"
          fontSize={100}
          topPercent={60}
          startLeftPercent={32}
          moveDirection="up"
        />
      </Sequence>

      <Sequence from={100}>
        <AnimatedText
          text={(selectedDay.getMonth() + 1).toString().padStart(2, "0")}
          color="#FFF"
          fontSize={100}
          topPercent={60}
          startLeftPercent={44}
          moveDirection="up"
        />
      </Sequence>

      <Sequence from={130}>
        <AnimatedText
          text={selectedDay.getFullYear().toString()}
          color="#FFF"
          fontSize={100}
          topPercent={60}
          startLeftPercent={56}
          moveDirection="up"
        />
      </Sequence>
    </AbsoluteFill>
  );
};
