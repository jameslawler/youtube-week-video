import { AbsoluteFill, useVideoConfig, Html5Audio, staticFile } from "remotion";
import { z } from "zod";
import { Introduction } from "./ThisWeek/Introduction";
import { Day } from "./ThisWeek/Day";
import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { iris } from "@remotion/transitions/iris";
import { Quiz } from "./ThisWeek/Quiz";
import { addSound } from "./transitions/add-sound";
import { Ending } from "./ThisWeek/Ending";

const thisWeekDaySchema = z.object({
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
});

export const thisWeekSchema = z.object({
  titleWord1: z.string(),
  titleWord2: z.string(),
  startDate: z.date(),
  daysData: z.array(thisWeekDaySchema),
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

const getDayDurationInFrames = (
  day: z.infer<typeof thisWeekDaySchema>,
  fps: number,
) => {
  return (
    150 +
    (day.dayIntroAudio.durationInSeconds +
      day.dayWrittenDayAudio.durationInSeconds +
      day.dayWrittenMonthAudio.durationInSeconds +
      day.dayWrittenYearAudio.durationInSeconds) *
      fps
  );
};

export const ThisWeek: React.FC<z.infer<typeof thisWeekSchema>> = ({
  titleWord1,
  titleWord2,
  startDate,
  daysData,
}) => {
  const { width, height, fps } = useVideoConfig();

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
            <TransitionSeries.Sequence durationInFrames={350}>
              <Introduction
                titleWord1={titleWord1}
                titleWord2={titleWord2}
                durationInFrames={350}
              />
            </TransitionSeries.Sequence>
            <TransitionSeries.Transition
              presentation={fade()}
              timing={linearTiming({ durationInFrames: 15 })}
            />
            {daysOfTheWeek.map((day, index) => (
              <>
                <TransitionSeries.Sequence
                  durationInFrames={getDayDurationInFrames(
                    daysData[index],
                    fps,
                  )}
                >
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
            <TransitionSeries.Sequence durationInFrames={300}>
              <Ending message="See You Next Week" durationInFrames={300} />
            </TransitionSeries.Sequence>
          </TransitionSeries>
        </AbsoluteFill>
      </AbsoluteFill>
    </>
  );
};
