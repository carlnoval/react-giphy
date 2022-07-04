// import React, { Component } from 'react'; // every new jsx file would have this line

// // component declared as a class
// class App extends Component {
//   render () {
//     return (
//       <div>
//         <div className="left-scene" />
//         <div className="right-scene" />
//       </div>
//     );
//   }
// }


import React from 'react'; // every new jsx file would have this line

// component declared as a function cause there are no events yet
const App = () => {
  return (
    <div>
      <div className="left-scene" />
      <div className="right-scene" />
    </div>
  );
};

export default App;
