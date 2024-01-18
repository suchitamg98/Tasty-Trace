import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      count: 0,
      // count2: 1,
    };
    console.log("child constructor");
  }
  componentDidMount() {
    console.log("child component mount did" + this.props.name);
  }
  render() {
    const { name } = this.props;
    const { count } = this.state;
    console.log("child render");
    return (
      <div className="user-card">
        <h1>Name:Akshay</h1>
        <h1>Name:{name}</h1>
        <h2>Location:Deharun</h2>
        <h3>Contact:@akshaymarch7</h3>
        <h1>Count:{count}</h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Click here to increase the count
        </button>
        {/* <h1>Count:{count2}</h1> */}
      </div>
    );
  }
}
export default UserClass;
