import Navbar from './components/nav/nav'
import './index.css';
const React = require('react');

function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <div class="text-white bg-gray-700 p-3 rounded-b-lg">
        <span id="username"></span>
        <br></br>
        <span id="motd"></span>
        <br></br>
        <span id="amotd"></span>
        <br></br>
        </div>
      </header>
    </div>
  );
} 

export default App;
