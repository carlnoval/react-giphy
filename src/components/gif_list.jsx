/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'; // every new jsx file would have this line

// this allows use of the html return by gif.jsx module
import Gif from './gif';

class GifList extends Component {
  renderList = () => {
    // gifs is either an object/array from `App` module
    // object contains object - array contains object
    const { gifs } = this.props;

    // console.log(gifs); // log and/or put a breakpoint here for debugging

    // renderList retuns a list of html returned by the component from gif.jsx
    return gifs.map((gif) => {
      // console.log(gifs); // log and/or put a breakpoint here for debugging
      // `gif` here would always be an object
      // `Gif` component returns an img tag with a url using gif.id in the src attribute
      // `key` is to get rid of the react warning
      const { setGif } = this.props;

      return <Gif id={gif.id} key={gif.id} setGif={setGif} />;
    });
  }

  render() {
    // javascript injection as attribute value should be inside brackets{}
    return (
      // gif-list div will contain all the html returned by Gif component
      <div className="gif-list">
        {this.renderList()}
      </div>
    );
  }
}

// so that app.jsx module can use the component in this module
export default GifList;
