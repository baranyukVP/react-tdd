import React, { FC, MouseEvent } from "react";

export type TCounterProps = {
  label?: string;
  count: number;
  onCounterIncrease: (isShift: boolean) => void;
  onCounterDecrease: (isShift: boolean) => void;
};

export const Counter: FC<TCounterProps> = ({
  label = "Count",
  count,
  onCounterIncrease,
  onCounterDecrease,
}) => {
  const handleIncrementClick = (event: MouseEvent<HTMLElement>) => {
    onCounterIncrease(event.shiftKey);
  }

  const handleDecrementClick = (event: MouseEvent<HTMLElement>) => {
    onCounterDecrease(event.shiftKey);
  }

  return (
    <div>
      <span>{label}</span>
      <button onClick={handleIncrementClick} data-testid="increment">
        +
      </button>
      <span id="counter" data-testid="counter">
        {count}
      </span>
      <button onClick={handleDecrementClick} data-testid="decrement">
        -
      </button>
    </div>
  );
};

export default Counter;
