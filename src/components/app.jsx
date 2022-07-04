/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'; // every new jsx file would have this line

import SearchBar from './search_bar';
import Gif from './gif';

// component declared as a class
class App extends Component {
  render () {
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id="xT9IgDEI1iZyb2wqo8" />
          </div>
        </div>
        <div className="right-scene" />
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
