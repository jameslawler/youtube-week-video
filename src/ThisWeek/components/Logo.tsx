import React from "react";
import {
  Img,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export const Logo: React.FC<{}> = () => {
  const videoConfig = useVideoConfig();
  const frame = useCurrentFrame();
  const imageRotation = (frame * 2) % 360;

  const scale = spring({
    fps: videoConfig.fps,
    frame,
  });

  return (
    <Img
      src={staticFile("logo.png")}
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        width: 400,
        height: 400,
        transform: `translate(-50%, -50%) rotate(${imageRotation}deg) scale(${scale})`,
        filter: "drop-shadow(0px 10px 20px rgba(0,0,0,0.5))",
      }}
    />
  );
};
