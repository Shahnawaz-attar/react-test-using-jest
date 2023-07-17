// counterReducer.test.js

import counterReducer from "./counterReducer";

describe("counter reducer", () => {
  it("should return the initial state", () => {
    expect(counterReducer(undefined, {})).toEqual({ count: 0 });
  });

  it("should handle INCREMENT", () => {
    const prevState = { count: 2 };
    const action = { type: "INCREMENT" };
    const nextState = counterReducer(prevState, action);
    expect(nextState).toEqual({ count: 3 });
  });

  it("should handle DECREMENT", () => {
    const prevState = { count: 2 };
    const action = { type: "DECREMENT" };
    const nextState = counterReducer(prevState, action);
    expect(nextState).toEqual({ count: 1 });
  });
});
