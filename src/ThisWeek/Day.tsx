import React from "react";
import {
  AbsoluteFill,
  Html5Audio,
  Sequence,
  staticFile,
  useVideoConfig,
} from "remotion";
import { getAudioData } from "@remotion/media-utils";

import { FallingEmojiBackground } from "./backgrounds/FallingEmojiBackground";
import { MonthsList } from "./components/MonthsList";
import { DaysList } from "./components/DaysList";
import { CenteredAnimatedText } from "./components/CenteredAnimatedText";
import { WrittenDate } from "./components/WrittenDate";

interface Props {
  daysOfTheWeek: Date[];
  selectedDay: Date;
  backgroundColor: string;
  dayIntroAudio: string;
  dayWrittenDayAudio: string;
  dayWrittenMonthAudio: string;
  dayWrittenYearAudio: string;
}

export const Day: React.FC<Props> = async ({
  daysOfTheWeek,
  selectedDay,
  backgroundColor,
  dayIntroAudio,
  dayWrittenDayAudio,
  dayWrittenMonthAudio,
  dayWrittenYearAudio,
}) => {
  const { fps } = useVideoConfig();
  const dayIntroAudioData = await getAudioData(staticFile(dayIntroAudio));

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
        <Html5Audio src={staticFile(dayIntroAudio)} volume={3} />
      </Sequence>

      <Sequence from={90}>
        <DaysList
          daysOfTheWeek={daysOfTheWeek}
          selectedDay={selectedDay}
          highlightSelectedAtFrame={60}
        />
        <MonthsList selectedDay={selectedDay} highlightSelectedAtFrame={210} />
      </Sequence>

      <Sequence from={dayIntroAudioData.durationInSeconds * fps + 60}>
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
