import { zColor } from "@remotion/zod-types";
import { AbsoluteFill } from "remotion";
import { z } from "zod";
import { Introduction } from "./ThisWeek/Introduction";
import { Day } from "./ThisWeek/Day";
import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { slide } from "@remotion/transitions/slide";
import { Logo } from "./ThisWeek/components/Logo";
import { LightLeak } from "@remotion/light-leaks";
import { LogoOverlay } from "./ThisWeek/components/LogoOverlay";

export const myCompSchema = z.object({
  titleText: z.string(),
  titleColor: zColor(),
  logoColor1: zColor(),
  logoColor2: zColor(),
});

export const ThisWeek: React.FC<z.infer<typeof myCompSchema>> = ({}) => {
  return (
    <AbsoluteFill style={{ backgroundColor: "white" }}>
      <AbsoluteFill>
        <TransitionSeries>
          <TransitionSeries.Sequence durationInFrames={150}>
            <Introduction />
          </TransitionSeries.Sequence>
          <TransitionSeries.Overlay durationInFrames={25}>
            <LogoOverlay />
          </TransitionSeries.Overlay>
          <TransitionSeries.Sequence durationInFrames={150}>
            <Day />
          </TransitionSeries.Sequence>
        </TransitionSeries>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
