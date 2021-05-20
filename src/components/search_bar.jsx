import React, { Component } from "react";

class SearchBar extends Component {
  handleUpdate = (event) => {
    const { search } = this.props;
    //   Change the state of term. Without updating the state, the component will not update
    // With all inputs you should do this
    // Now we can access the term in another function
    // This is called controlled components
    search(event.target.value);
  };
//   We don't need to add a shouldcomponentupdate here as there are no new props in the render method so it will always return false.

  render() {
    console.log("SEARCH BAR RENDER");
    return (
      <input
        type="text"
        className="form-control form-search"
        onChange={this.handleUpdate}
      />
    );
  }
}

export default SearchBar;
