import { Heading } from "./Heading";
import Counter from "./Counter";
import { Component } from "react";

const initialState = { count: 0 };
export type TCounterState = Readonly<typeof initialState>;

class App extends Component<object, TCounterState> {
  readonly state: TCounterState = initialState;

  increment = (isShift: boolean) => {
    const inc: number = isShift ? 10 : 1;
    this.setState({ count: this.state.count + inc });
  };

  render() {
    return (
      <div>
        <Heading />
        <Counter
          label="Current"
          count={this.state.count}
          onCounterIncrease={this.increment}
        />
      </div>
    );
  }
}

export default App;
