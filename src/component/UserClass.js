import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="flex flex-col gap-1 border-2 border-gray-400 rounded-2xl p-2">
        <h3>{this.props.name}</h3>
        <p>Role: {this.props.role}</p>
        <p>Location: {this.props.location}</p>
      </div>
    );
  }
}

export default UserClass;
