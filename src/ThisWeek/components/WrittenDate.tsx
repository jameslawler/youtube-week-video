import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { loadFont } from "@remotion/google-fonts/ArchivoBlack";
import { AnimatedText } from "./AnimatedText";

const { fontFamily } = loadFont("normal", {
  weights: ["400"],
  subsets: ["latin"],
});

interface Props {
  selectedDay: Date;
}

export const WrittenDate: React.FC<Props> = ({ selectedDay }) => {
  return (
    <AbsoluteFill>
      <Sequence from={0}>
        <AnimatedText
          text={selectedDay.getDate().toString().padStart(2, "0")}
          color="#FFF"
          fontSize={100}
          topPercent={60}
          startLeftPercent={32}
          moveDirection="up"
        />
        <div
          style={{
            position: "absolute",
            top: "55%",
            left: "41%",
            color: "#DDD",
            fontSize: "100px",
            fontFamily,
            textShadow: "0px 0px 20px rgba(0,0,0,0.7)",
            whiteSpace: "nowrap",
          }}
        >
          {"/"}
        </div>
        <div
          style={{
            position: "absolute",
            top: "55%",
            left: "53%",
            color: "#DDD",
            fontSize: "100px",
            fontFamily,
            textShadow: "0px 0px 20px rgba(0,0,0,0.7)",
            whiteSpace: "nowrap",
          }}
        >
          {"/"}
        </div>
      </Sequence>

      <Sequence from={150}>
        <AnimatedText
          text={(selectedDay.getMonth() + 1).toString().padStart(2, "0")}
          color="#FFF"
          fontSize={100}
          topPercent={60}
          startLeftPercent={44}
          moveDirection="up"
        />
      </Sequence>

      <Sequence from={300}>
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
