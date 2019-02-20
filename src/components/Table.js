import React, { Component } from "react";
import contactArr from "../contacts.json";
import TableContent from "./TableContent.js";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialContacts: contactArr.splice(0, 5)
    };
  }

  add() {
    var addedContact = this.state.initialContacts;
    addedContact.push(
      contactArr[Math.floor(Math.random() * contactArr.length)]
    );
    // setState to rerender the page
    this.setState({ initialContacts: addedContact });
  }

  name() {
    var sortedName = this.state.initialContacts;

    sortedName.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    this.setState({ initialContacts: sortedName });
  }

  popularity() {
    var popularity = this.state.initialContacts;
    popularity.sort((a, b) => (b.popularity > a.popularity ? 1 : -1));
    this.setState({ initialContacts: popularity });
  }

  delete(index) {
    let newArray = this.state.initialContacts;
    newArray.splice(index, 1);
    this.setState({
      contacts: newArray
    });
  }

  render() {
    const { initialContacts } = this.state;
    return (
      <div>
        <button onClick={() => this.add()}>Add Celeb</button>
        <button onClick={() => this.name()}>sort by name</button>
        <button onClick={() => this.popularity()}>sort by popularity</button>

        <table>
          <thead>
            <tr>
              <th>picture </th>
              <th>name </th>
              <th>popularity </th>
            </tr>
          </thead>

          {initialContacts.map((el, index) => {
            return (
              <TableContent
                key={el.name}
                info={el}
                onClick={() => this.delete(el)}
              />
            );
          })}
        </table>
      </div>
    );
  }
}

export default Table;
