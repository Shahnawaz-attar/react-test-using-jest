import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

describe("Counter", () => {
  it("correctly updates the count value when the buttons are clicked", () => {
    const { getByText, getByRole } = render(<Counter />);

    const countElement = getByText("Count: 0");
    const incrementButton = getByText("Increment");
    const decrementButton = getByText("Decrement");

    expect(countElement).toBeInTheDocument();

    fireEvent.click(incrementButton);
    expect(countElement).toHaveTextContent("Count: 1");

    fireEvent.click(decrementButton);
    expect(countElement).toHaveTextContent("Count: 0");
  });
});
