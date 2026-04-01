import { AbsoluteFill, useVideoConfig } from "remotion";
import { z } from "zod";
import { Introduction } from "./ThisWeek/Introduction";
import { Day } from "./ThisWeek/Day";
import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { clockWipe } from "@remotion/transitions/clock-wipe";
import { iris } from "@remotion/transitions/iris";
import { Quiz } from "./ThisWeek/Quiz";

export const myCompSchema = z.object({
  titleWord1: z.string(),
  titleWord2: z.string(),
  startDate: z.date(),
  daysData: z.array(
    z.object({
      questions: z.array(
        z.object({
          header: z.string(),
          type: z.string(),
          data: z.string(),
          answer: z.string(),
        }),
      ),
    }),
  ),
});

const backgroundColors = [
  "#0077f4",
  "#fec009",
  "#00e2d1",
  "#ff7306",
  "#fe3104",
  "#63009b",
  "#001046",
];

export const ThisWeek: React.FC<z.infer<typeof myCompSchema>> = ({
  titleWord1,
  titleWord2,
  startDate,
  daysData,
}) => {
  const { width, height } = useVideoConfig();

  const daysOfTheWeek = Array.from({ length: 7 }, (_, index) => {
    const date = new Date(startDate);
    date.setDate(date.getDate() + index);
    return date;
  });

  return (
    <AbsoluteFill style={{ backgroundColor: "white" }}>
      <AbsoluteFill>
        <TransitionSeries>
          <TransitionSeries.Sequence durationInFrames={150}>
            <Introduction titleWord1={titleWord1} titleWord2={titleWord2} />
          </TransitionSeries.Sequence>
          <TransitionSeries.Transition
            presentation={clockWipe({ width, height })}
            timing={linearTiming({ durationInFrames: 30 })}
          />
          {daysOfTheWeek.map((day, index) => (
            <>
              <TransitionSeries.Sequence durationInFrames={600}>
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
              <TransitionSeries.Sequence
                durationInFrames={450 * daysData[index].questions.length}
              >
                <Quiz
                  questions={daysData[index].questions}
                  backgroundColor={backgroundColors[index]}
                />
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
