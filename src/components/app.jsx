import React, { Component } from "react";
import giphy from "giphy-api";
import SearchBar from "./search_bar";
import Gif from "./gif";
import GifList from "./gif_list";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      selectedGifId: null,
    };
  }

  search = (query) => {
    // Implement API call
    giphy("WyhYt9eRW394JQSjeZRcyiO4gMp2VOv8").search(
      {
        q: query,
        limit: 10,
        rating: "g",
      },
      (error, result) => {
        this.setState({
          gifs: result.data,
        });
      }
    );
  };

  selectGif = (id) => {
    this.setState({
      selectedGifId: id,
    });
  };

  // handleSelectedGif = () => {
  //     this.setState({
  //         selectedGifId:
  //     })
  // }

  render() {
    const { selectedGifId, gifs } = this.state;
    return (
      <div>
        <div className="left-scene">
          {/* here we are passing the search FUNCTION not data  */}
          <SearchBar search={this.search} />
          <div className="selected-gif">
            <Gif id={selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          {/* We pass down the selectGif function */}
          <GifList gifs={gifs} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;
