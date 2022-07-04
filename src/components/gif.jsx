/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'; // every new jsx file would have this line

class Gif extends Component {
  render() {
    // url came from giphy's website after inspecting some gif
    const src = "https://media2.giphy.com/media/0qGegxoMTCalyRaN0h/200w.gif";
    // const lwGif = "https://media2.giphy.com/media/xT9IgDEI1iZyb2wqo8/200.gif";
    return (
      <img src={src} alt="" className="gif" />
    );
  }
}

export default Gif;
