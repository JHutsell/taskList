import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ToDoList from './components/ToDoList';
import EditTodo from './components/EditToDo';
import CreateTodo from './components/CreateToDo'
import Calendar from 'react-calendar';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Manage all of your Daily Tasks</h2>
          <Calendar />
          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
      </div>
      <Route path="/" exact component={ToDoList} />
      <Route path="/edit/:id" component={EditTodo} />
      <Route path="/create" component={CreateTodo} />
    </Router>
  );
}

export default App;
