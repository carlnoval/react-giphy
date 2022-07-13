/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'; // every new jsx file would have this line

class Gif extends Component {
  shouldComponentUpdate(nextProps) {
    const { id } = this.props;

    // for debugging
    // console.log(`nextID: ${nextProps.id}
    // currentId: ${id}
    // [nextProps.id !== id] is ${nextProps.id !== id}`);

    // only update the gif if the id changes
    return nextProps.id !== id;
  }

  // function has access to the id of the clicked gif since id was passed as param
  setSpotlightGif = () => {
    const { id, setGif } = this.props;

    // for debugging
    // console.log(id);

    setGif(id);
  }

  // below verson uses event parameter, but it is not really needed
  // setSpotlightGif = (event) => {
  //   const { setGif } = this.props;

  //   console.log(event.currentTarget.id);
  //   setGif(event.currentTarget.id);
  // }

  render() {
    // id passed from `App` component
    const { id } = this.props;

    // for debugging + investigation on seeing when this component gets re-rendered by react
    // if `shouldComponentUpdate()` function gets removed then select gif will be re-rendered
    // for every onChange event on the searchbar input
    // console.log(`GIF Render - id: ${id}`);

    // guard clause to protect for unwanted ids
    if (id === null || typeof (id) !== 'string') return null;

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
