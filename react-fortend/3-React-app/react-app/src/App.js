
import './App.css';

function App() {
  let name="React-App";
  let className="App-header";
  console.log(name);
  return (
    <div className="App">
    <div className={className}>
    <h3>{name}</h3>
   <Demo></Demo>
    </div>
    </div>
  );
}
function Demo() {
  console.log('Demo');
  return (
    <div className="App">
    <div className="App-header">
    <h3>Demo</h3>
    </div>
    </div>
  );
}
export default App;
