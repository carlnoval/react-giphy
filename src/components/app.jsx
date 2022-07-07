/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'; // every new jsx file would have this line
import giphy from 'giphy-api'; // library installed with yarn `install giphy-api`

// component imports - `import ComponentName`
// where ComponentName could be any pascal case naming convention
// `./gif` exported `Gif` component but its called MyGiphy in the this app component
import SearchBar from './search_bar';
import MyGiphy from './gif';
import GifList from './gif_list';

// component declared as a class
class App extends Component {
  // constructor is needed for states
  constructor(props) {
    super(props); // mandatory so class can start using `this` within the constructor

    const defaultGifID = "xT9IgDEI1iZyb2wqo8"; // default featured/selected gif (lewagon)
    // default gifs on the list
    const defaultGifList = [
      { id: "xT9IgDEI1iZyb2wqo8" },
      { id: "1LweXxLwVT0J2" },
      { id: "lJsrH0ngCPIAg" },
      { id: "3oriO0OEd9QIDdllqo" },
      { id: "dA978xl9xBOfe" },
      { id: "dY8SsGOwlSyhW" },
      { id: "7LrE3VMOuU6Dm" },
      { id: "LcSmdna8IwSPr6ITbc" },
      { id: "10Aj7xX2csLqwg" },
      { id: "26tP3M3i03hoIYL6M" }
    ];

    // App component's state, able to use `this` due to super(props)
    this.state = {
      selectedGfId: defaultGifID,
      gifs: defaultGifList // for gif-list
    };

    // overrides defaultGifList
    // this.search("homer thinking"); // optional, perserving 43 calls per hour
  }

  // arrow function to retrieve gifs count of up to the set limit
  search = (query) => {
    const giphyBetaAPIKey = "XA24iUGgSSMO7vC3jSkCEd2D0TDncqo5";
    giphy(giphyBetaAPIKey).search({
      q: query,
      // next object properties are optional
      rating: 'g',
      limit: 10
    }, (err, res) => {
      console.log(res); // put a breakpoint here for troubleshooting to see response data
      this.setState({
        gifs: res.data // typeof(res.data) => 'object'
      });
    });
  }

  // mandatory render function
  render () {
    const { gifs, selectedGfId } = this.state; // this component's state, see constructor

    // to be returned html, jsx is inside the brackets {}
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <MyGiphy id={selectedGfId} />
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
// // every new jsx file would have this line, no need to specify
// import React from 'react';

// const App = () => {
//   return (
//     <div>
//       <div className="left-scene" />
//       <div className="right-scene" />
//     </div>
//   );
// };

// reqiured so that index.jsx can render the app component
export default App;
