import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/home';
import Resume from './pages/resume';
import Blog from './pages/blog';
import { Route } from 'react-router-dom';
require('bootstrap')
export default class App extends Component {

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

renderBlog = () => {
  return (
    <Blog />
  )
}

  render() {
    return (
      <div className="App">
        <Route exact path='/' render={this.renderHomePage} />
        <Route exact path='/resume' render={this.renderResume} />
        <Route exact path='/blog' render={this.renderBlog} />
      </div>
    );
  }
}
