import React from "react";
import Gif from "./gif";

const GifList = ({ gifs, selectGif }) => {
  // We pass the selectGif function as a prop to the gif, which is where we have our listener
  return (
    <div className="gif-list">
      {gifs.map(({ id }) => <Gif id={id} key={id} selectGif={selectGif} />)}
    </div>
  );
};

export default GifList;
