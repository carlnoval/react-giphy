/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'; // every new jsx file would have this line

class SearchBar extends Component {
  render() {
    return (
      // form-control is from bootstrap
      <input type="text" className="form-control form-search" />
    );
  }
}

export default SearchBar;
