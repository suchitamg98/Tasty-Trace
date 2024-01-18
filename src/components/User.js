import { useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);
  // const [count2] = useState(1);
  return (
    <div className="user-card">
      <h1>Name:Akshay</h1>
      <h1>Name:{props.name}</h1>
      <h3>Location:Deharun</h3>
      <h4>Contact:@akshaymarch7</h4>
      <h1>count:{count}</h1>
      {/* <h1>count:{count2}</h1> */}
      <button
        onClick={() => {
          const cn = count + 1;
          setCount(cn);
        }}
      >
        Click here to increase the count
      </button>
    </div>
  );
};
export default User;
