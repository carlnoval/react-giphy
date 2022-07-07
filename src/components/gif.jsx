/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'; // every new jsx file would have this line

class Gif extends Component {
  render() {
    const { id } = this.props;
    // url came from giphy's website after inspecting some gif
    const giphyViewGifURL = `https://media2.giphy.com/media/${id}/200.gif`;
    // const lwGif = "https://media2.giphy.com/media/xT9IgDEI1iZyb2wqo8/200.gif";
    return (
      <img src={giphyViewGifURL} alt="" className="gif" />
    );
  }
}

export default Gif;
