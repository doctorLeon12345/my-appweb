import logo from './logo.svg';
import './App.css';
import myImg from './pics/cat.jpeg';

function App() {
  return (
    <div className="App" >
      <h1>wellcome</h1>
      <p>ho are you</p>
      <ul>
        <li>first</li>
        <li>second</li>
        <li>thierd</li>
        <li>fourse</li>
      </ul>
      <div>
        <img src={myImg} width="100px" height="100px" />
      </div>
    </div>
  );
}

export default App;
