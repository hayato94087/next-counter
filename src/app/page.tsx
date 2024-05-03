import Counter1 from "@/components/counter-1";
import Counter2 from "@/components/counter-2";
import { type FC } from "react";

const Home: FC = () => {
  return (
    <div className="grid grid-row-2">
      <Counter1 />
      <Counter2 />
    </div>
  );
};

export default Home;
