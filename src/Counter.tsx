import React, { FC, MouseEvent } from "react";

export type TCounterProps = {
  label?: string;
  count: number;
  onCounterIncrease: (isShift: boolean) => void;
};

export const Counter: FC<TCounterProps> = ({
  label = "Count",
  count,
  onCounterIncrease,
}) => {
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    onCounterIncrease(event.shiftKey);
  }

  return (
    <div>
      <span>{label}</span>
      <span id="counter" data-testid="counter" onClick={handleClick}>
        {count}
      </span>
    </div>
  );
};

export default Counter;
