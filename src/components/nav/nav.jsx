import React, { Component } from "react";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <ul class="text-white p-3 flex space-x-2 bg-gray-900" id="nav">
          <li>
            <a href="#">MyScratchPage</a>
          </li>
          <li>
            <a href="https://jdev.eu.org/MyScratchPage">Vanilla</a>
          </li>
        </ul>
      </div>
    );
  }
}
export default Navbar;
