import React from "react";
import {
  AbsoluteFill,
  Html5Audio,
  Sequence,
  staticFile,
  useVideoConfig,
} from "remotion";
import { loadFont } from "@remotion/google-fonts/ArchivoBlack";
import { AnimatedText } from "./AnimatedText";

const { fontFamily } = loadFont("normal", {
  weights: ["400"],
  subsets: ["latin"],
});

interface Audio {
  path: string;
  durationInSeconds: number;
}

interface Props {
  selectedDay: Date;
  dayWrittenDayAudio: Audio;
  dayWrittenMonthAudio: Audio;
  dayWrittenYearAudio: Audio;
}

export const WrittenDate: React.FC<Props> = ({
  selectedDay,
  dayWrittenDayAudio,
  dayWrittenMonthAudio,
  dayWrittenYearAudio,
}) => {
  const { fps } = useVideoConfig();

  const monthFrom = dayWrittenDayAudio.durationInSeconds * fps + 30;
  const yearFrom =
    monthFrom + dayWrittenMonthAudio.durationInSeconds * fps + 30;

  return (
    <AbsoluteFill>
      <Sequence from={0}>
        <AnimatedText
          text={selectedDay.getDate().toString().padStart(2, "0")}
          color="#FFF"
          fontSize={100}
          topPercent={80}
          moveDistancePercent={25}
          startLeftPercent={32}
          moveDirection="up"
        />
        <div
          style={{
            position: "absolute",
            top: "55%",
            left: "41%",
            color: "#FFF",
            fontSize: "100px",
            fontFamily,
            textShadow: "8px 8px 8px rgba(0,0,0,0.7)",
            whiteSpace: "nowrap",
            WebkitTextStroke: "2px black",
          }}
        >
          {"/"}
        </div>
        <div
          style={{
            position: "absolute",
            top: "55%",
            left: "53%",
            color: "#FFF",
            fontSize: "100px",
            fontFamily,
            textShadow: "8px 8px 8px rgba(0,0,0,0.7)",
            whiteSpace: "nowrap",
            WebkitTextStroke: "2px black",
          }}
        >
          {"/"}
        </div>
        <Html5Audio src={staticFile(dayWrittenDayAudio.path)} volume={3} />
      </Sequence>

      <Sequence from={monthFrom}>
        <AnimatedText
          text={(selectedDay.getMonth() + 1).toString().padStart(2, "0")}
          color="#FFF"
          fontSize={100}
          topPercent={80}
          moveDistancePercent={25}
          startLeftPercent={44}
          moveDirection="up"
        />
        <Html5Audio src={staticFile(dayWrittenMonthAudio.path)} volume={3} />
      </Sequence>

      <Sequence from={yearFrom}>
        <AnimatedText
          text={selectedDay.getFullYear().toString()}
          color="#FFF"
          fontSize={100}
          topPercent={80}
          moveDistancePercent={25}
          startLeftPercent={56}
          moveDirection="up"
        />
        <Html5Audio src={staticFile(dayWrittenYearAudio.path)} volume={3} />
      </Sequence>
    </AbsoluteFill>
  );
};
