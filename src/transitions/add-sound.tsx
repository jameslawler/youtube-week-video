import {
  TransitionPresentation,
  TransitionPresentationComponentProps,
} from "@remotion/transitions";
import { Html5Audio } from "remotion";

export function addSound<T extends Record<string, unknown>>(
  transition: TransitionPresentation<T>,
  src: string,
  volume: number,
): TransitionPresentation<T> {
  const { component: Component, ...other } = transition;

  const C = Component as React.FC<TransitionPresentationComponentProps<T>>;

  const NewComponent: React.FC<TransitionPresentationComponentProps<T>> = (
    p,
  ) => {
    return (
      <>
        {p.presentationDirection === "entering" ? (
          <Html5Audio src={src} volume={volume} />
        ) : null}
        <C {...p} />
      </>
    );
  };

  return {
    component: NewComponent,
    ...other,
  };
}
