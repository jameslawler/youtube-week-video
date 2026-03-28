import React from "react";
import { useCurrentFrame, spring, AbsoluteFill, interpolate } from "remotion";
import { loadFont } from "@remotion/google-fonts/ArchivoBlack";
import { issue } from "zod/v4/core/util.cjs";

const { fontFamily } = loadFont("normal", {
  weights: ["400"],
  subsets: ["latin"],
});

interface Props {
  daysOfTheWeek: Date[];
  selectedDay: Date;
  highlightSelectedAtFrame: number;
}

export const DaysList: React.FC<Props> = ({
  daysOfTheWeek,
  selectedDay,
  highlightSelectedAtFrame,
}) => {
  const frame = useCurrentFrame();

  const scale = spring({
    frame: Math.max(0, frame - highlightSelectedAtFrame),
    fps: 30,
    from: 0.5,
    to: 1,
  });

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
          const canHighlight = frame >= highlightSelectedAtFrame;

          return (
            <div
              key={day.toTimeString()}
              style={{
                width: 100,
                height: 60,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: isSelected ? "green" : "",
                fontSize: isSelected ? 50 : 30,
                border: isSelected ? "4px solid #555" : "",
                borderRadius: isSelected ? "50%" : "",
                padding: isSelected ? "40px" : "",
                color: "#fff",
                fontFamily,
                textShadow: "0px 0px 20px rgba(0,0,0,0.7)",
                opacity,
                transform: canHighlight && isSelected ? `scale(${scale})` : "",
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
