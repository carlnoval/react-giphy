/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'; // every new jsx file would have this line

class Gif extends Component {
  render() {
    const { id } = this.props;
    // url came from giphy's website after inspecting some gif
    const giphyViewGifURL = `https://media2.giphy.com/media/${id}/200.gif`;

    // to be returned html
    return (
      <img src={giphyViewGifURL} alt="" className="gif" />
    );
  }
}

// so that app.jsx module can use the component in this module
export default Gif;
