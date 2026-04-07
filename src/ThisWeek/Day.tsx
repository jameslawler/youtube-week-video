import React from "react";
import {
  AbsoluteFill,
  Html5Audio,
  Sequence,
  staticFile,
  useVideoConfig,
} from "remotion";

import { FallingEmojiBackground } from "./backgrounds/FallingEmojiBackground";
import { MonthsList } from "./components/MonthsList";
import { DaysList } from "./components/DaysList";
import { CenteredAnimatedText } from "./components/CenteredAnimatedText";
import { WrittenDate } from "./components/WrittenDate";

interface Audio {
  path: string;
  durationInSeconds: number;
}

interface Props {
  daysOfTheWeek: Date[];
  selectedDay: Date;
  backgroundColor: string;
  dayIntroAudio: Audio;
  dayWrittenDayAudio: Audio;
  dayWrittenMonthAudio: Audio;
  dayWrittenYearAudio: Audio;
}

export const Day: React.FC<Props> = ({
  daysOfTheWeek,
  selectedDay,
  backgroundColor,
  dayIntroAudio,
  dayWrittenDayAudio,
  dayWrittenMonthAudio,
  dayWrittenYearAudio,
}) => {
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill>
      <FallingEmojiBackground
        emojis={["🥹", "🌲", "🚗", "😎"]}
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
        <Html5Audio src={staticFile(dayIntroAudio.path)} volume={3} />
      </Sequence>

      <Sequence from={90}>
        <DaysList
          daysOfTheWeek={daysOfTheWeek}
          selectedDay={selectedDay}
          highlightSelectedAtFrame={60}
        />
        <MonthsList selectedDay={selectedDay} highlightSelectedAtFrame={210} />
      </Sequence>

      <Sequence from={dayIntroAudio.durationInSeconds * fps + 60}>
        <WrittenDate
          selectedDay={selectedDay}
          dayWrittenDayAudio={dayWrittenDayAudio}
          dayWrittenMonthAudio={dayWrittenMonthAudio}
          dayWrittenYearAudio={dayWrittenYearAudio}
        />
      </Sequence>
    </AbsoluteFill>
  );
};
