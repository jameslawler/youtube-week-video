import "./index.css";
import { Composition } from "remotion";
import { ThisWeek } from "./ThisWeek";
import { data } from "./data/20260330";

export const RemotionRoot: React.FC = () => {
  const { titleWord1, titleWord2, startDate, daysData } = data;

  return (
    <>
      <Composition
        id="ThisWeek"
        component={ThisWeek}
        durationInFrames={10000}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          titleWord1,
          titleWord2,
          startDate: new Date(startDate),
          daysData,
        }}
      />
    </>
  );
};
