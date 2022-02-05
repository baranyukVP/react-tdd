import { Heading } from "./Heading";
import Counter from "./Counter";
import { FC, useState } from "react";

const initialState = { count: 0 };

const App: FC = () => {
  const [count, setCount] = useState<number>(initialState.count);

  const increment = (isShift: boolean) => {
    const inc: number = isShift ? 10 : 1;
    setCount((count) => count + inc);
  };

  return (
    <div>
      <Heading />
      <Counter label="Current" count={count} onCounterIncrease={increment} />
    </div>
  );
};

export default App;
