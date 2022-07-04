// This is the sample for the first half of Sev's React Basics

/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react'; // every new jsx file would have this line
import ReactDOM from 'react-dom';
import '../../assets/stylesheets/application.scss'; // path is relative to file's location

class Hello extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
      counter: 0
    };
  }

  handleClick = () => {
    const { clicked, counter } = this.state;

    // change state
    this.setState({
      clicked: !clicked,
      counter: counter + 1
    });
  }

  // mandatory method, react needs to render
  // build and return html for the component
  render() {
    // destructured props and state to keep dry by not using:
    // `this.props.var_name` or `this.state.clicked` all the time
    const { name } = this.props;
    const { clicked, counter } = this.state;

    return (
      <div className={clicked ? 'clicked' : null} onClick={this.handleClick}>
        Hello {name} {counter}
      </div>
    );
  }
}

// // without state
// const Hello = (props) => {
//   // destructuring props to keep dry by
//   // not using props.variable_name all the time
//   const { name } = props;
//   return (
//     <h1>
//       Hello,
//       {name}
//     </h1>
//   );
// };

// const root = document.getElementById('root');
const root = document.getElementById('element_id');
if (root) {
  ReactDOM.render(<Hello name="Sekai" />, root);
}
