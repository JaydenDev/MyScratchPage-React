import React, { Component } from 'react'
import fetchData from '../../functions'

class Navbar extends React.Component{
    render() {
        return (
            <div>
              <ul class="text-white p-3 flex space-x-2 bg-gray-800" id="nav">
                <li><a href="#">MyScratchPage</a></li>
                <li><a href="https://jdev.eu.org/MyScratchPage">Vanilla</a></li>
                <input class="h-12 text-black" id="input" placeholder="user"></input>
                <button id="num" class="bg-gray-200 rounded-lg p-2 h-12 text-black" onClick={fetchData}>Number</button>
              </ul>
            </div>
        );
    }
}
export default Navbar;