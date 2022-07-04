import React, { Component } from 'react'; // every new jsx file would have this line
import ReactDOM from 'react-dom';
import '../../assets/stylesheets/application.scss';

class App extends Component {
  render () {
    return <div>
      <div className="left-scene"></div>
      <div className="right-scene"></div>
    </div>
  }
}

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<App />, root);
}
