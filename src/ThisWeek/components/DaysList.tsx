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
          height: "100%",
          position: "absolute",
          left: 5 - left + "%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "40px",
        }}
      >
        {daysOfTheWeek.map((day) => {
          const isSelected = day === selectedDay;

          return (
            <div
              key={day.toTimeString()}
              style={{
                width: 100,
                height: 60,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: isSelected ? 50 : 40,
                border: isSelected ? "6px solid white" : "",
                borderRadius: isSelected ? "30px" : "",
                padding: isSelected ? "40px" : "",
                color: "#fff",
                fontFamily,
                textShadow: "2px 2px 2px rgba(0,0,0,0.7)",
                opacity,
                WebkitTextStroke: "2px black",
              }}
            >
              {day.getDate().toString().padStart(2, "0")}
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
