import React, { Component } from "react";

class Gif extends Component {
  //  Here we have our function that calls the selectGif function in app
  handleSelectedGif = () => {
    if (this.props.selectGif) {
      this.props.selectGif(this.props.id);
    }
  };

//   This saves us from rerendering unnecessary components as they have not changed. Hence, we only update if the new props are different to the current ones. 
// Returns true then we re-render. Returns false, we don't. 
// This is comparing the Virtual to Actual DOM. 
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.id !== this.props.id;
  }

  render() {
    const { id } = this.props;
    // THis is a pattern you need to bear in mind when using null as an initial value otherwise you will get a 404!
    if (!id) {
      return null;
    }
    const src = `https://media0.giphy.com/media/${id}/200.gif`;
    return (
      // eslint-disable-next-line
      <img
        src={src}
        alt=""
        className="gif"
        // We call the function here to call our selectgif function in the app with the id
        onClick={this.handleSelectedGif}
      />
    );
  }
}

export default Gif;
