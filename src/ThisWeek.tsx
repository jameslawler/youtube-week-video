import { AbsoluteFill, useVideoConfig, Html5Audio, staticFile } from "remotion";
import { z } from "zod";
import { Introduction } from "./ThisWeek/Introduction";
import { Day } from "./ThisWeek/Day";
import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { iris } from "@remotion/transitions/iris";
import { Quiz } from "./ThisWeek/Quiz";
import { addSound } from "./transitions/add-sound";

export const myCompSchema = z.object({
  titleWord1: z.string(),
  titleWord2: z.string(),
  startDate: z.date(),
  daysData: z.array(
    z.object({
      dayIntroAudio: z.object({
        path: z.string(),
        durationInSeconds: z.number(),
      }),
      dayWrittenDayAudio: z.object({
        path: z.string(),
        durationInSeconds: z.number(),
      }),
      dayWrittenMonthAudio: z.object({
        path: z.string(),
        durationInSeconds: z.number(),
      }),
      dayWrittenYearAudio: z.object({
        path: z.string(),
        durationInSeconds: z.number(),
      }),
      questionsIntroAudio: z.object({
        path: z.string(),
        durationInSeconds: z.number(),
      }),
      questions: z.array(
        z.object({
          header: z.string(),
          headerAudio: z.object({
            path: z.string(),
            durationInSeconds: z.number(),
          }),
          type: z.string(),
          data: z.string(),
          answer: z.string(),
          answerAudio: z.object({
            path: z.string(),
            durationInSeconds: z.number(),
          }),
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
    <>
      <Html5Audio src={staticFile("audio/background.mp3")} volume={0.05} loop />
      <AbsoluteFill style={{ backgroundColor: "white" }}>
        <AbsoluteFill>
          <TransitionSeries>
            <TransitionSeries.Sequence durationInFrames={500}>
              <Introduction
                titleWord1={titleWord1}
                titleWord2={titleWord2}
                durationInFrames={500}
              />
            </TransitionSeries.Sequence>
            <TransitionSeries.Transition
              presentation={fade()}
              timing={linearTiming({ durationInFrames: 15 })}
            />
            {daysOfTheWeek.map((day, index) => (
              <>
                <TransitionSeries.Sequence durationInFrames={600}>
                  <Day
                    daysOfTheWeek={daysOfTheWeek}
                    selectedDay={day}
                    backgroundColor={backgroundColors[index]}
                    dayIntroAudio={daysData[index].dayIntroAudio}
                    dayWrittenDayAudio={daysData[index].dayWrittenDayAudio}
                    dayWrittenMonthAudio={daysData[index].dayWrittenMonthAudio}
                    dayWrittenYearAudio={daysData[index].dayWrittenYearAudio}
                  />
                </TransitionSeries.Sequence>
                <TransitionSeries.Transition
                  presentation={iris({ width, height })}
                  timing={linearTiming({ durationInFrames: 15 })}
                />
                <TransitionSeries.Sequence
                  durationInFrames={590 * daysData[index].questions.length}
                >
                  <Quiz
                    questions={daysData[index].questions}
                    backgroundColor={backgroundColors[index]}
                  />
                </TransitionSeries.Sequence>
                <TransitionSeries.Transition
                  presentation={addSound(
                    fade(),
                    staticFile("audio/effects/swoosh.mp3"),
                    0.1,
                  )}
                  timing={linearTiming({ durationInFrames: 30 })}
                />
              </>
            ))}
          </TransitionSeries>
        </AbsoluteFill>
      </AbsoluteFill>
    </>
  );
};
