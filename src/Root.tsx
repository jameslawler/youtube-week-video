import "./index.css";
import { CalculateMetadataFunction, Composition } from "remotion";
import { ThisWeek, thisWeekSchema } from "./ThisWeek";
import { getData } from "./data/20260406";
import z from "zod";

const calculateMetadata: CalculateMetadataFunction<
  z.infer<typeof thisWeekSchema>
> = async () => {
  const { titleWord1, titleWord2, startDate, daysData } = await getData();

  return {
    props: {
      titleWord1,
      titleWord2,
      startDate: new Date(startDate),
      daysData,
    },
  };
};

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="ThisWeek"
        component={ThisWeek}
        durationInFrames={9624}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          titleWord1: "test",
          titleWord2: "test2",
          startDate: new Date("2026-01-01"),
          daysData: [],
        }}
        calculateMetadata={calculateMetadata}
      />
    </>
  );
};
