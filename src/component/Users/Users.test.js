import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Users from "./Users";

test("displays the list of users correctly", async () => {
  // Create a mock response with the desired user data
  const fakeUserResponse = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ];

  // Spy on the global fetch function and mock its implementation
  const fetchSpy = jest.spyOn(global, "fetch").mockImplementationOnce(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeUserResponse),
    })
  );

  render(<Users />);

  // Wait for the component to render and the API call to complete
  await screen.findByText((content, element) => {
    // Use the custom matcher function to find the text "Alice" in any element
    const hasText = text => element.textContent === text;
    return hasText("Alice");
  });

  // Check if the user names are displayed correctly
  expect(
    screen.getByText((content, element) => {
      const hasText = text => element.textContent === text;
      return hasText("Alice");
    })
  ).toBeInTheDocument();

  expect(
    screen.getByText((content, element) => {
      const hasText = text => element.textContent === text;
      return hasText("Bob");
    })
  ).toBeInTheDocument();

  // Restore the original implementation after the test
  fetchSpy.mockRestore();
});
