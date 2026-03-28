import React from "react";
import { AbsoluteFill, useCurrentFrame, Img, staticFile } from "remotion";

export const LogoOverlay: React.FC = () => {
  const frame = useCurrentFrame();
  const totalFrames = 60; // total duration of overlay

  // Scale logo from 1 → ~full screen
  const scale = 1 + (Math.min(frame, totalFrames) / totalFrames) * 10;

  // Fade logo at the end
  const fadeStart = totalFrames - 15;
  const logoOpacity =
    frame < fadeStart ? 1 : 1 - (frame - fadeStart) / (totalFrames - fadeStart);

  // Fade background from transparent → black over entire duration
  const bgOpacity = Math.min(frame / totalFrames, 1);

  return (
    <AbsoluteFill>
      {/* Background fades to black */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "black",
          opacity: bgOpacity,
        }}
      />

      {/* Logo grows and fades */}
      <Img
        src={staticFile("logo.png")}
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: `translate(-50%, -50%) scale(${scale})`,
          opacity: logoOpacity,
        }}
      />
    </AbsoluteFill>
  );
};
