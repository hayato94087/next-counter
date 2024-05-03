import { useState } from "react";

type Props = {
  initialCount?: number;
};

// Redefine ReturnType to match the tuple return style
type ReturnType = [number, {
  increment: () => void;
  decrement: () => void;
}];

export const useCounter = ({ initialCount = 0 }: Props): ReturnType => {
  const [count, setCount] = useState(initialCount);

  // ここの実装が修正されました
  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);

  return [ count, {increment, decrement} ];
};