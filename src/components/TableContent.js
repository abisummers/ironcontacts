import React, { Component } from "react";

class TableContent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { name, popularity, pictureUrl } = this.props.info;
    return (
      <tbody>
        <tr>
          <th>
            {" "}
            <img src={pictureUrl} alt="celeb" />
          </th>
          <th>{name}</th>
          <th>{popularity}</th>
          <th>
            <button onClick={this.props.onClick}>Delete</button>
          </th>
        </tr>
      </tbody>
    );
  }
}

export default TableContent;
