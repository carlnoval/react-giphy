import React from 'react';
import ReactDOM from 'react-dom';
import '../assets/stylesheets/application.scss';

const Hello = (props) => {
  // destructuring props to keep dry by
  // not using props.variable_name all the time
  const { name } = props;
  return (
    <h1>
      Hello,
      {name}
    </h1>
  );
};

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<Hello name="World" />, root);
}
