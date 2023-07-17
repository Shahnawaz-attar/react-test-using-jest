import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Greeting from "./Greeting";

describe("Greeting", () => {
  it("correctly renders the appropriate greeting message and updates the login state", async () => {
    render(<Greeting />);

    const loginMessage = screen.getByText("Please log in.");
    const loginButton = screen.getByText("Login");

    expect(loginMessage).toBeInTheDocument();

    fireEvent.click(loginButton);

    expect(await screen.findByText("Welcome, User!")).toBeInTheDocument();
    expect(loginMessage).not.toBeInTheDocument();

    fireEvent.click(loginButton);

    expect(await screen.findByText("Please log in.")).toBeInTheDocument();
  });
});
