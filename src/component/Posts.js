import React, { useState } from "react";
import PostItem from "./PostItem";

const Posts = () => {
  const [count, setCount] = useState(0);

  const increament = () => {
    setCount(count + 1);
  };

  return (
    <div>
      Count {count}
      <button onClick={increament}>Increment</button>
      <PostItem title="Hello World" />
    </div>
  );
};

export default Posts;
