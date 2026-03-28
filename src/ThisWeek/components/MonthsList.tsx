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
          position: "absolute",
          top: "5%",
          left: 88 + left + "%",
          display: "flex",
          flexDirection: "column",
          gap: "40px",
        }}
      >
        {months.map((m, i) => {
          const isSelected = i === selectedDay.getMonth();

          return (
            <div
              key={m.short}
              style={{
                width: 175,
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
              {isSelected ? m.long : m.short}
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
