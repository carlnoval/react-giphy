/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'; // every new jsx file would have this line

import Gif from './gif';

class GifList extends Component {
  renderList = () => {
    const { gifs } = this.props;
    return gifs.map((gif) => {
      return <Gif id={gif.id} key={gif.id} />; // key is to get rid of the react warning
    });
  }

  render() {
    // javascript injection as attribute value should be inside brackets{}
    return (
      <div className="gif-list">
        {this.renderList()}
      </div>
    );
  }
}

export default GifList;
