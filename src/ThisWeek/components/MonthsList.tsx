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
  highlightSelectedAtFrame: number;
}

export const MonthsList: React.FC<Props> = ({
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
          right: 30 - left,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "40px",
        }}
      >
        {months.map((m, i) => {
          const isSelected = i === 8; //selectedDay.getMonth();
          const canHighlight = frame >= highlightSelectedAtFrame;

          return (
            <div
              key={m.short}
              style={{
                height: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: isSelected ? "green" : "",
                fontSize: isSelected ? 50 : 30,
                border: isSelected ? "4px solid #555" : "",
                borderRadius: isSelected ? "50px" : "",
                padding: isSelected ? "40px" : "",
                color: "#fff",
                fontFamily,
                textShadow: "0px 0px 20px rgba(0,0,0,0.7)",
                opacity,
                transform: canHighlight && isSelected ? `scale(${scale})` : "",
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
