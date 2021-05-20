import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
  }

  componentWillMount() {
    console.log("SEARCH BAR WILL MOUNT");
  }

  componentDidMount() {
    console.log("SEARCH BAR DID MOUNT");
  }

  handleUpdate = (event) => {
    const { search } = this.props;
    //   Change the state of term. Without updating the state, the component will not update
    // With all inputs you should do this
    // Now we can access the term in another function
    // This is called controlled components
    this.setState({
      term: event.target.value,
    });
    search(event.target.value);
  };

  render() {
    console.log("SEARCH BAR RENDER");
    const { term } = this.state;
    return (
      <input
        value={term}
        type="text"
        className="form-control form-search"
        onChange={this.handleUpdate}
      />
    );
  }
}

export default SearchBar;
