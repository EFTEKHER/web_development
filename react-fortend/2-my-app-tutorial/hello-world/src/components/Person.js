//Functional component
import React, {Component } from "react";
// function Person()
// {
//     return(
//         <div>
//          <h1>I am a person component</h1>
//              </div>
//     );
// }

// let Person = (props) => {
//     console.log(props);
//   return (
//     <div>

//     <h1>Number:{Math.random()}</h1>
//     </div>
//   );
// };
// let Person = (props) => {

//   return (
//     <div>
//    <h2>Extra Info:{props.children}</h2>
//     <h1>Name:{props.name} and Age:{props.age}</h1>
//     </div>
//   );
// };
//class component

class Person extends Component {
  constructor(props) {
    super(props);
  }

  render() {
     console.log(this.props);
    return (
      <div>
        <h2>Extra Info:{this.props.children}</h2>{" "}
        <h1>
          Name:{this.props.name} and Age:{this.props.age}
        </h1>
      </div>
    );
  }
}
export default Person;
