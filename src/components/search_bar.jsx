/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'; // every new jsx file would have this line

class SearchBar extends Component {
  handleGifListUpdate = (event) => {
    // debugging
    // console.log(event.target.value);
    const { searchFunction } = this.props;

    searchFunction(event.target.value);
  }

  render() {
    return (
      <input
        type="text"
        className="form-control form-search" // form-control is from bootstrap
        onChange={this.handleGifListUpdate}
      />
    );
  }
}

export default SearchBar;
