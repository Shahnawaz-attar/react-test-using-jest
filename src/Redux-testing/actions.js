export const fetchUserData = () => {
  return async dispatch => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const result = await response.json();
      dispatch({ type: "FETCH_USER_DATA_SUCCESS", payload: result });
    } catch (error) {
      dispatch({ type: "FETCH_USER_DATA_ERROR", payload: error.message });
    }
  };
};
