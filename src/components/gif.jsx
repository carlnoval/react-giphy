/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'; // every new jsx file would have this line

class Gif extends Component {
  setSpotlightGif = (event) => {
    const { setGif } = this.props;

    console.log(event.currentTarget.id);
    setGif(event.currentTarget.id);
  }

  render() {
    // id passed from `App` component
    const { id } = this.props;
    // url came from giphy's website after inspecting some gif
    const giphyViewGifURL = `https://media2.giphy.com/media/${id}/giphy.gif`;

    // to be returned html
    return (
      <img
        src={giphyViewGifURL}
        alt=""
        className="gif"
        id={id}
        onClick={this.setSpotlightGif}
      />
    );
  }
}

// so that app.jsx and gif_list modules can use the Gif component in this module
export default Gif;
