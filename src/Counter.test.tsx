import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";

test("should render a label and counter", () => {
  const incrementHandler = jest.fn();
  const decrementHandler = jest.fn();
  render(
    <Counter
      count={0}
      onCounterIncrease={incrementHandler}
      onCounterDecrease={decrementHandler}
    />
  );
  const label = screen.getByText("Count");
  expect(label).toBeInTheDocument();
  const counter = screen.getByTestId("counter");
  expect(counter).toBeInTheDocument();
});

test("should start at zero", () => {
  const incrementHandler = jest.fn();
  const decrementHandler = jest.fn();
  render(
    <Counter
      count={0}
      onCounterIncrease={incrementHandler}
      onCounterDecrease={decrementHandler}
    />
  );
  const counter = screen.getByTestId("counter");
  expect(counter).toHaveTextContent("0");
});

test("should start at another value", () => {
  const incrementHandler = jest.fn();
  const decrementHandler = jest.fn();
  render(
    <Counter
      count={10}
      onCounterIncrease={incrementHandler}
      onCounterDecrease={decrementHandler}
    />
  );
  const counter = screen.getByTestId("counter");
  expect(counter).toHaveTextContent("10");
});

test("should call the incrementer", () => {
  const incrementHandler = jest.fn();
  const decrementHandler = jest.fn();
  render(
    <Counter
      count={0}
      onCounterIncrease={incrementHandler}
      onCounterDecrease={decrementHandler}
    />
  );
  const increment = screen.getByTestId("increment");
  fireEvent.click(increment);
  expect(incrementHandler).toBeCalledWith(false);
});

test("should call the decrementer", () => {
  const incrementHandler = jest.fn();
  const decrementHandler = jest.fn();
  render(
    <Counter
      count={0}
      onCounterIncrease={incrementHandler}
      onCounterDecrease={decrementHandler}
    />
  );
  const decrement = screen.getByTestId("decrement");
  fireEvent.click(decrement);
  expect(decrementHandler).toBeCalledTimes(1);
});
