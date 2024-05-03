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

  // ここの実装が誤っています
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return [ count, {increment, decrement} ];
};