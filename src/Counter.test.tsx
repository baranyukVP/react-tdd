import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";

test("should render a label and counter", () => {
  const handler = jest.fn();
  render(<Counter count={0} onCounterIncrease={handler} />);
  const label = screen.getByText("Count");
  expect(label).toBeInTheDocument();
  const counter = screen.getByTestId("counter");
  expect(counter).toBeInTheDocument();
});

test("should start at zero", () => {
  const handler = jest.fn();
  render(<Counter count={0} onCounterIncrease={handler} />);
  const counter = screen.getByTestId("counter");
  expect(counter).toHaveTextContent("0");
});

test("should start at another value", () => {
  const handler = jest.fn();
  render(<Counter count={10} onCounterIncrease={handler} />);
  const counter = screen.getByTestId("counter");
  expect(counter).toHaveTextContent("10");
});

test("should call the incrementer", () => {
  const handler = jest.fn();
  render(<Counter count={0} onCounterIncrease={handler} />);
  const counter = screen.getByTestId("counter");
  fireEvent.click(counter);
  expect(handler).toBeCalledWith(false);
});