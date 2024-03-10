import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="userDetail">
        <h3>{this.props.name}</h3>
        <p>Role: {this.props.role}</p>
        <p>Location: {this.props.location}</p>
      </div>
    );
  }
}

export default UserClass;
