import React from "react";
import Posts from "./component/Posts";
import Users from "./component/Users/Users";
import Navigation from "./component/Navigation";
import UserList from "./async-behave/UserList";
import Button from "./test-with-prop-event-handler/Button";
import Greeting from "./conditional-rendering/Greeting";

const App = () => {
  return (
    <div>
      <Posts />
      <br />
      <Users />
      <br />
      <Navigation />
      <br />
      <UserList />

      {/* test for props and event handle */}
      <br />
      <br />
      <Button label={"Click Me"} onClick={() => console.log("clicked")} />
      <br />
      {/* conditional rendering */}
      <Greeting />
    </div>
  );
};

export default App;
