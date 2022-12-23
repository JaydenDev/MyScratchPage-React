import Navbar from "./components/nav/nav";
import "./index.css";
import fetchData from "./functions.js";
const React = require("react");

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <input
          onChange={(event) => {
            try {this.setState({ query: event.target.value })}
            catch (error) {
              return;
            }
          }}
          onKeyPress={(event) => {
            try {
            {if (event.key === "Enter")
              fetchData();
            }
          } catch (error) {
            return;
          }}}
          className="p-3 w-full bg-gray-600 text-white"
          id="input"
          placeholder="Username"
        ></input>
        <br></br>
        <div
          className="space-x-2 flex bg-gray-600 m-4 rounded-sm p-3"
          id="userArea"
        >
          <img className="rounded-sm" id="pfp"></img>
          <span
            className="bg-gray-200 rounded-sm text-black text-4xl"
            id="username"
          ></span>
          <span
            className="text-4xl bg-gray-200 w-[80.5vw] rounded-sm text-black"
            id="motd"
          ></span>
        </div>
        <div className="w-fit m-auto flex space-x-2 bg-gray-600 text-white p-3 rounded-sm">
          <div className="text-4xl ">Posts:</div>
          <div className="text-4xl text-blue-500" id="totalPosts">
            {" "}
          </div>
          <div className="text-4xl">Top Forum:</div>
          <div className="text-4xl text-emerald-500" id="topForum"></div>
        </div>
        <div className="bg-gray-600 p-3 rounded-sm m-4" id="signature"></div>
      </header>
      
    </div>
  );
}

export default App;
