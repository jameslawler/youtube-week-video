import { zColor } from "@remotion/zod-types";
import { AbsoluteFill, useVideoConfig } from "remotion";
import { z } from "zod";
import { Introduction } from "./ThisWeek/Introduction";
import { Day } from "./ThisWeek/Day";
import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { clockWipe } from "@remotion/transitions/clock-wipe";
import { iris } from "@remotion/transitions/iris";
import { Quiz } from "./ThisWeek/Quiz";

export const myCompSchema = z.object({
  titleText: z.string(),
  titleColor: zColor(),
  logoColor1: zColor(),
  logoColor2: zColor(),
});

const backgroundColors = [
  "#ff7306",
  "#eb2282",
  "#ff7306",
  "#ff7306",
  "#ff7306",
  "#ff7306",
  "#ff7306",
];

export const ThisWeek: React.FC<z.infer<typeof myCompSchema>> = ({}) => {
  const { width, height } = useVideoConfig();

  const daysOfTheWeek = Array.from({ length: 7 }, (_, index) => {
    const date = new Date();
    date.setDate(date.getDate() + index);
    return date;
  });

  return (
    <AbsoluteFill style={{ backgroundColor: "white" }}>
      <AbsoluteFill>
        <TransitionSeries>
          <TransitionSeries.Sequence durationInFrames={150}>
            <Introduction />
          </TransitionSeries.Sequence>
          <TransitionSeries.Transition
            presentation={clockWipe({ width, height })}
            timing={linearTiming({ durationInFrames: 30 })}
          />
          {daysOfTheWeek.map((day, index) => (
            <>
              <TransitionSeries.Sequence durationInFrames={300}>
                <Day
                  daysOfTheWeek={daysOfTheWeek}
                  selectedDay={day}
                  backgroundColor={backgroundColors[index]}
                />
              </TransitionSeries.Sequence>
              <TransitionSeries.Transition
                presentation={iris({ width, height })}
                timing={linearTiming({ durationInFrames: 15 })}
              />
              <TransitionSeries.Sequence durationInFrames={450}>
                <Quiz daysOfTheWeek={daysOfTheWeek} selectedDay={day} />
              </TransitionSeries.Sequence>
              <TransitionSeries.Transition
                presentation={clockWipe({ width, height })}
                timing={linearTiming({ durationInFrames: 30 })}
              />
            </>
          ))}
        </TransitionSeries>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
