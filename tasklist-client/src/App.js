import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';


import ToDoList from './components/ToDoList';
import EditTodo from './components/EditToDo';
import CreateTodo from './components/CreateToDo'
import Calendar from 'react-calendar';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="https://codingthesmartway.com" target="_blank">
              <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
            </a>
            <Link to="/" className="navbar-brand">MERN-Stack Todo App</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Todos</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Todo</Link>
                </li>
              </ul>
            </div>
          </nav>
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
        <Button variant="primary">Hello</Button>
        <Button variant="success">Primary</Button>
      <Route path="/" exact component={ToDoList} />
      <Route path="/edit/:id" component={EditTodo} />
      <Route path="/create" component={CreateTodo} />
      </div>
    </Router>
  );
}

export default App;
