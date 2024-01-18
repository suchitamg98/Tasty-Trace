import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }
  componentDidMount() {
    console.log("parent component mount did");
  }
  render() {
    console.log("parent render");
    return (
      <div>
        <h1>About</h1>
        <UserClass name={"Akshay"} />
        {/* <UserClass name={"second"} /> */}
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is Food ordering app</h2>
//       <User name={"Akshay saini functional componet"} />
//       <UserClass name={"Akshay saini Class componet"} />
//     </div>
//   );
// };
export default About;
