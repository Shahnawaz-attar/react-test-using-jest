import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { fetchUserData } from "./actions";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("fetchUserData", () => {
  it("creates FETCH_USER_DATA_SUCCESS action after successful API call", async () => {
    const expectedActions = [
      { type: "FETCH_USER_DATA_SUCCESS", payload: { id: 1, name: "John Doe" } },
    ];

    const store = mockStore({});

    // Mock the fetch function to return a resolved Promise with the correct response object
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue({ id: 1, name: "John Doe" }),
    });

    await store.dispatch(fetchUserData());
    const actions = store.getActions();
    expect(actions).toEqual(expectedActions);
  });

  it("creates FETCH_USER_DATA_ERROR action after failed API call", async () => {
    const expectedActions = [
      { type: "FETCH_USER_DATA_ERROR", payload: "Request failed" },
    ];

    const store = mockStore({});

    // Mock the fetch function to return a rejected Promise with an error object
    global.fetch = jest.fn().mockRejectedValueOnce(new Error("Request failed"));

    await store.dispatch(fetchUserData());
    const actions = store.getActions();
    expect(actions).toEqual(expectedActions);
  });
});
