import logo from "../src/assets/logo.png";
import title from "../src/assets/boost-me.png";
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <img src={title} className="Title"></img>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        <p1>
        <h1>LOADING....</h1>
        </p1>
      </header>
    </div>
  );
}


export default App;
