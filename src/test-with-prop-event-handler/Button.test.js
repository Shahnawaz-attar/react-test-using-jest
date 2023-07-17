import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  it("renders the correct label and triggers the callback function when clicked", () => {
    const label = "Click Me";
    const onClick = jest.fn();

    const { getByText, getByTestId } = render(
      <Button label={label} onClick={onClick} />
    );

    const buttonElement = getByTestId("button");
    const labelElement = getByText(label);

    expect(buttonElement).toBeInTheDocument();
    expect(labelElement).toBeInTheDocument();

    fireEvent.click(buttonElement);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
