"use client";

import { useCounter } from "@/hooks/use-counter-1";
import { type FC } from "react";

type Props = {
  initialCount?: number;
};

const Counter1: FC<Props> = ({}) => {
  const [count, { increment, decrement }] = useCounter({ initialCount: 0 });

  const incrementByTwo = () => {
    increment();
    increment();
  };

  const decrementByTwo = () => {
    decrement();
    decrement();
  };

  return (
    <div className="px-4 py-3 border-2 flex flex-col space-y-4 mx-2 mt-2">
      <h1 className="text-lg font-bold text-slate-800">
        ❌ 誤った useCounter の実装
      </h1>
      <div className="bg-gray-100 py-2 px-3 text-slate-800 flex flex-col space-y-2">
        <span>
          この例では、「2
          増やす」ボタンをクリックしても1つしか増えません。また、「2
          減らす」ボタンをクリックしても1つしか減りません。
        </span>
        <div className="flex flex-row space-x-2">
          <span className="px-2 py-1 bg-blue-100 text-sm rounded-md text-slate-700">
            counter-1.tsx
          </span>
          <span className="px-2 py-1 bg-blue-100 text-sm rounded-md text-slate-700">
            use-counter-1.ts
          </span>
        </div>
      </div>
      <div>
        <span className="px-2 py-1 bg-blue-100 text-sm rounded-md text-slate-700">
          count = {count}
        </span>
      </div>
      <div className="flex flex-row space-x-2">
        <button
          onClick={decrementByTwo}
          className="px-2 py-1 bg-slate-800 border-slate-800 rounded-md text-sm shadow-sm hover:bg-slate-700 text-white"
        >
          2 減らす
        </button>
        <button
          onClick={decrement}
          className="px-2 py-1 bg-slate-800 border-slate-800 rounded-md text-sm shadow-sm hover:bg-slate-700 text-white"
        >
          1 減らす
        </button>
        <button
          onClick={increment}
          className="px-2 py-1 bg-slate-800 border-slate-800 rounded-md text-sm shadow-sm hover:bg-slate-700 text-white"
        >
          1 増やす
        </button>
        <button
          onClick={incrementByTwo}
          className="px-2 py-1 bg-slate-800 border-slate-800 rounded-md text-sm shadow-sm hover:bg-slate-700 text-white"
        >
          2 増やす
        </button>
      </div>
    </div>
  );
};

export default Counter1;
