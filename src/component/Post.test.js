import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import PostItem from "./PostItem";
import Posts from "./Posts";

test("render the correct title", () => {
  render(<PostItem title="Hello World" />);
  const titleElement = screen.getByText(/Hello World/i);
  expect(titleElement).toBeInTheDocument();
});

test("increments the counter when the button is clicked", () => {
  const { getByText } = render(<Posts />);
  const countElement = getByText(/Count 0/i);
  const button = screen.getByRole("button");
  fireEvent.click(button);
  expect(countElement).toHaveTextContent("Count 1");
});

// unit test for displays the list of users correctly

test("display the list of the users correctly", () => {
  const mockUsers = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ];

  render(<Posts />);
});
