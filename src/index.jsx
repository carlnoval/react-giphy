/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react'; // every new jsx file would have this line
import ReactDOM from 'react-dom';
import '../assets/stylesheets/application.scss';



const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<Hello name="Sekai" />, root);
}
