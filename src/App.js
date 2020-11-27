import logo from './logo.svg';
import './App.css';
import Me from './images/me.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Charles Loehle's React App</p>
        <img src={Me} alt="" />
        <a
          className="App-link"
          href="https://cldigitaldesign.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Charles's Portfolio Site
        </a>
      </header>
    </div>
  );
}

export default App;
