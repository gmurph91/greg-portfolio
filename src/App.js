import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/home';
import { Route } from 'react-router-dom';
export default class App extends Component {

renderHomePage = () => {
  return (
    <HomePage />
  )
}

  render() {
    return (
      <div className="App">
        <Route exact path='/' render={this.renderHomePage} />
      </div>
    );
  }
}
