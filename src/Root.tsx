import "./index.css";
import { Composition } from "remotion";
import { ThisWeek } from "./ThisWeek";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="ThisWeek"
        component={ThisWeek}
        durationInFrames={500}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          titleText: "Welcome to Remotion",
          titleColor: "#000000",
          logoColor1: "#91EAE4",
          logoColor2: "#86A8E7",
        }}
      />
    </>
  );
};
