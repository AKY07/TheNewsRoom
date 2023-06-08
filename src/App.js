
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  render() {
    return (
      <div>
            <Navbar/>
            <News pageSize={6} country="us" category="sports"/>
      </div>
    )
  }
}

//166ec698f7f94e30a8da2ead068c31b8

