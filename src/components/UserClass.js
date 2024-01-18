import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    //console.log(props);

    this.state = {
      userInfo: {
        name: "dummy",
        location: "default",
        avatar_url: "https://dummy.com",
      },
    };
    // count: 0,
    // count2: 1,
    console.log("child constructor");
  }
  async componentDidMount() {
    //console.log("child component mount did" + this.props.name);
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    console.log(json);
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  render() {
    // const { name } = this.props;
    // const { count } = this.state;
    console.log("child render");

    const { name, location, avatar_url } = this.state.userInfo;
    //debugger;
    return (
      <div className="user-card">
        <h1>Name:{name}</h1>
        <h2>Location:{location}</h2>
        <img src={avatar_url}></img>
        <h3>Contact:@akshaymarch7</h3>
        {/* <h1>Count:{count}</h1> */}
        {/* <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Click here to increase the count
        </button> */}
        {/* <h1>Count:{count2}</h1> */}
      </div>
    );
  }
}
export default UserClass;
