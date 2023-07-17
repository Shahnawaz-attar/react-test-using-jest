import React from "react";
import { render, waitFor } from "@testing-library/react";
import UserList from "./UserList";

describe("UserList", () => {
  it("renders the list of user names after the API call", async () => {
    const mockUsers = [
      { id: 1, name: "John Doe" },
      { id: 2, name: "Jane Smith" },
      { id: 3, name: "Bob Johnson" },
    ];

    jest.spyOn(global, "fetch").mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockUsers),
    });

    const { getByText } = render(<UserList />);

    await waitFor(() => {
      mockUsers.forEach(user => {
        const userElement = getByText(user.name);
        expect(userElement).toBeInTheDocument();
      });
    });
  });
});
