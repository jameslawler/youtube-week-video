import { staticFile } from "remotion";
import { getAudioData } from "@remotion/media-utils";

export const getAudio = async (path: string) => {
  if (path === "") {
    return {
      path,
      durationInSeconds: 0,
    };
  }
  const audioData = await getAudioData(staticFile(path));

  return {
    path,
    durationInSeconds: audioData.durationInSeconds,
  };
};
