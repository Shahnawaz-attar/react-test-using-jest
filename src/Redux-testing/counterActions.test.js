// counterActions.test.js

import { increment, decrement } from "./counterActions";

describe("counter actions", () => {
  it("should create an INCREMENT action", () => {
    const expectedAction = {
      type: "INCREMENT",
    };
    const action = increment();
    expect(action).toEqual(expectedAction);
  });

  it("should create a DECREMENT action", () => {
    const expectedAction = {
      type: "DECREMENT",
    };
    const action = decrement();
    expect(action).toEqual(expectedAction);
  });
});
