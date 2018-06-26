import React, { Component } from 'react';
import logo from './logo.svg';
import style from './App.css';
import TodoList from '../container/TodoList/TodoList.jsx'

class App extends Component {
  render() {
    return (
      <div className={style['App']}>
        <header className={style['App-header']}>
          <img src={logo} className={style['App-logo']} alt="logo" />
          <h1 className={style['App-title']}>Welcome to React</h1>
        </header>
        <TodoList />
      </div>
    );
  }
}

export default App;
