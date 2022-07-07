/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'; // every new jsx file would have this line

class SearchBar extends Component {
  // SearchBar specific method
  handleGifListUpdate = (event) => {
    // searhFunction was passed as a prop from parent component `App`
    // the function is incharged of updating the sate of the app
    // by calling the giphy api
    const { searchFunction } = this.props; // put a breakpoint here to debug

    // searchFunction uses the new value generated from this event
    searchFunction(event.target.value);
  }

  render() {
    return (
      <input
        type="text"
        className="form-control form-search" // form-control is from bootstrap
        onChange={this.handleGifListUpdate} // call handleGifListUpdate function on input change
      />
    );
  }
}

export default SearchBar;
