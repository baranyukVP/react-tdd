import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("render hello react", () => {
  render(<App />);
  const linkElement = screen.getByText(/hello react/i);
  expect(linkElement).toBeInTheDocument();
  const label = screen.getByText("Current");
  expect(label).toBeInTheDocument();
  const counter = screen.getByTestId("counter");
  expect(counter).toHaveTextContent("0");
});

test("should increment the count by one", () => {
  render(<App />);
  const counter = screen.getByTestId("counter");
  const incrementer = screen.getByTestId("increment");
  expect(counter).toHaveTextContent("0");
  fireEvent.click(incrementer);
  expect(counter).toHaveTextContent("1");
});

test("should increment the count by ten", () => {
  render(<App />);
  const counter = screen.getByTestId("counter");
  const incrementer = screen.getByTestId("increment");
  expect(counter).toHaveTextContent("0");
  fireEvent.click(incrementer, { shiftKey: true });
  expect(counter).toHaveTextContent("10");
});
