import Navbar from './components/nav/nav'
import './index.css';
import fetchData from './functions.js'
const React = require('react');

function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <div  id="bar" class="m-0 space-y-2 text-white bg-gray-700 p-3">
        <input class="p-3 h-12 m-0 w-full bg-gray-600 rounded-lg text-white" id="input" placeholder="user"></input>
        <br></br>
          <div class="space-x-2 flex" id="userArea">
        <img id="pfp"></img>
        <span class="bg-gray-200 rounded-sm text-black text-6xl" id="username"></span>
        <span class="text-2xl bg-gray-200 rounded-sm text-black" id="motd"></span>
        </div>
        <br></br>
        <span id="signature"></span>
        </div>
      </header>
    </div>
  );
} 

export default App;
