import React from "react";

import { getRandomThought } from "@/imperialThoughts";
import { wait } from "@/wait";

const letterPerMs = 126;
const thoughtTransitionMs = 2000;

export function Thought(): JSX.Element {
  const [thought, setThought] = React.useState<string>("");
  const [opacity, setOpacity] = React.useState<number>(0);
  const [isReady, setIsReady] = React.useState<boolean>(true);

  const changeThought = async (opacityTransitionMs: number) => {
    setOpacity(0);
    await wait(opacityTransitionMs);
    setThought(getRandomThought());
    setOpacity(1);
    await wait(opacityTransitionMs);
  };

  React.useEffect(() => {
    const loop = async () => {
      setIsReady(false);
      await wait(thought.length * letterPerMs);
      await changeThought(thoughtTransitionMs);
      setIsReady(true);
    };

    if (isReady) loop();
  }, [isReady]);

  return (
    <div className="flex-box">
      <h1>Thoughts for the day:</h1>
      <h2 style={{ opacity: opacity }}>{thought}</h2>
    </div>
  );
}
