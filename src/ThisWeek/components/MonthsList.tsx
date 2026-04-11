import React from "react";
import { useCurrentFrame, spring, AbsoluteFill, interpolate } from "remotion";
import { loadFont } from "@remotion/google-fonts/ArchivoBlack";

const { fontFamily } = loadFont("normal", {
  weights: ["400"],
  subsets: ["latin"],
});

const months = [
  { short: "Jan", long: "January" },
  { short: "Feb", long: "February" },
  { short: "Mar", long: "March" },
  { short: "Apr", long: "April" },
  { short: "May", long: "May" },
  { short: "Jun", long: "June" },
  { short: "Jul", long: "July" },
  { short: "Aug", long: "August" },
  { short: "Sep", long: "September" },
  { short: "Oct", long: "October" },
  { short: "Nov", long: "November" },
  { short: "Dec", long: "December" },
];

interface Props {
  selectedDay: Date;
}

export const MonthsList: React.FC<Props> = ({ selectedDay }) => {
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
          right: 30 - left,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "40px",
        }}
      >
        {months.map((m, i) => {
          const isSelected = i === selectedDay.getMonth();

          return (
            <div
              key={m.short}
              style={{
                height: 40,
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
              {isSelected ? m.long : m.long}
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
