/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'; // every new jsx file would have this line

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

// component declared as a class
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [], // for gif-list
      selectedGfId: "xT9IgDEI1iZyb2wqo8" // the current selected gif
    };
  }

  render () {
    const { gifs, selectedGfId } = this.state;

    /* these lines are no longer used, right scene is empty
    const gifsX = [
      { id: "xT9IgDEI1iZyb2wqo8" },
      { id: "1LweXxLwVT0J2" },
      { id: "lJsrH0ngCPIAg" },
      { id: "3oriO0OEd9QIDdllqo" },
      { id: "dA978xl9xBOfe" }
    ];
    */

    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id={selectedGfId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={gifs} />
        </div>
      </div>
    );
  }
}

// // if declared as a function instead of a class
// import React from 'react'; // every new jsx file would have this line

// const App = () => {
//   return (
//     <div>
//       <div className="left-scene" />
//       <div className="right-scene" />
//     </div>
//   );
// };

export default App;
