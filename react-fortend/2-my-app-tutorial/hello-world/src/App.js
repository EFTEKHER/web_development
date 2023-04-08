import React,{Component} from 'react';
import Person from './components/Person';

import './App.css';
//jsx
//Functional component


// function App() {
//   // return (
//   //   <div className="App">
//   //     <h1>Hello World!</h1>
//   //     <Person/>
//   //   </div>
//   // );

//   // return React.createElement('div',null,"Hello World!");
//   return React.createElement('div',{className:"App"},React.createElement('h1',null,"Hello World!"),<Person/>);

// }


// function Person()
// {
//   return(
//     <div>
//     <h1>I am a person component</h1>
//     </div>
//   );
// }

// function Person()
// {
//   //return(
//     // <div>
//     // <h1>I am a person component</h1>
//     // </div>

//  // );
//  return React.createElement('div',null,React.createElement('h1',null,"I am a person component"));
// }

//class Component

class App extends Component {
render()
{
  return (<div className="App">    <h1>Hello World!</h1>
     <Person name="Efte" age="30">I am some info of some person</Person>
     <Person name="Kher" age="20"/>
     <Person name="Tonmoy" age="26"/>
     <Person name="Kher Ali" age="20"/>
   </div>
   
);
}
};

export default App;
