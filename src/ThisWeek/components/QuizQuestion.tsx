import React from "react";
import {
  useCurrentFrame,
  interpolate,
  spring,
  staticFile,
  Img,
} from "remotion";
import { loadFont } from "@remotion/google-fonts/ArchivoBlack";

const { fontFamily } = loadFont("normal", {
  weights: ["400"],
  subsets: ["latin"],
});

interface Props {
  questionType: "text" | "image";
  questionData: string;
}

export const QuizQuestion: React.FC<Props> = ({
  questionType,
  questionData,
}) => {
  const frame = useCurrentFrame();

  const rotation = interpolate(Math.sin(frame / 10), [-1, 1], [-2, 2]);

  const scale = spring({
    frame,
    from: 0.5,
    to: 1,
    fps: 30,
    config: {
      damping: 10,
      mass: 1,
      stiffness: 100,
    },
  });

  return (
    <div
      style={{
        position: "absolute",
        left: "30%",
        top: "25%",
        fontFamily,
        fontSize: 100,
        width: "800px",
        height: "500px",
        backgroundColor: "white",
        border: "20px solid #DDD",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transform: `rotate(${rotation}deg) scale(${scale})`,
      }}
    >
      {questionType === "image" && (
        <Img
          src={staticFile(questionData)}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      )}

      {questionType === "text" && <div>{questionData}</div>}
    </div>
  );
};
