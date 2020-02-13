import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/home';
import { Route } from 'react-router-dom';
import Resume from './pages/resume';
export default class App extends Component {
  state = {
  };

renderHomePage = () => {
  return (
    <HomePage />
  )
}

renderResume = () => {
  return (
    <Resume />
  )
}

  render() {
    return (
      <div className="App">
        <Route exact path='/' render={this.renderHomePage} />
        <Route exact path='/resume' render={this.renderResume} />
      </div>
    );
  }
}
