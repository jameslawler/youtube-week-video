import React from "react";
import { useCurrentFrame, spring, AbsoluteFill, interpolate } from "remotion";
import { loadFont } from "@remotion/google-fonts/ArchivoBlack";

const { fontFamily } = loadFont("normal", {
  weights: ["400"],
  subsets: ["latin"],
});

interface Props {
  daysOfTheWeek: Date[];
  selectedDay: Date;
}

export const DaysList: React.FC<Props> = ({ daysOfTheWeek, selectedDay }) => {
  const frame = useCurrentFrame();

  const left = spring({
    frame,
    fps: 30,
    from: 10,
    to: 0,
  });

  const opacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill>
      <div
        style={{
          position: "absolute",
          top: "5%",
          left: 5 - left + "%",
          display: "flex",
          flexDirection: "column",
          gap: "40px",
        }}
      >
        {daysOfTheWeek.map((day) => {
          const isSelected = day === selectedDay;

          return (
            <div
              key={day.toTimeString()}
              style={{
                width: 30,
                height: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "right",
                fontSize: isSelected ? 50 : 30,
                color: "#fff",
                fontFamily,
                textShadow: "0px 0px 20px rgba(0,0,0,0.7)",
                opacity,
              }}
            >
              {day.getDate()}
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
