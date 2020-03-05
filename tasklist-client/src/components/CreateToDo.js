import React, { Component } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';


export default class CreateTodo extends Component {

    state = {
        todo_description: '',
        todo_title: '',
        todo_priority: '',
        todo_completed: false
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    handleRadioSelection = (e) => {
        this.setState({
            todo_priority: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        console.log('Form Submitted');
        console.log(`Todo Title: ${this.state.todo_title}`);
        console.log(`Todo Description: ${this.state.todo_description}`);
        console.log(`Todo Priority: ${this.state.todo_priority}`);

        const newTodo = {
            todo_title: this.state.todo_title,
            todo_description: this.state.todo_description,
            todo_priority: this.state.todo_priority,
            todo_completed: this.state.todo_completed
        };

        axios.post('http://localhost:4000/todos/add', newTodo)
            .then(res => console.log(res.data));

        this.setState({
            todo_title: '',
            todo_description: '',
            todo_priority: '',
            todo_completed: false
        })

    }

    render() {
        return (
            <div>
                <h2>Welcome to Create Todo Component!!</h2>
                <form onSubmit={ this.handleSubmit }>
                    <h4>Title</h4>
                    <input onChange={ this.handleInputChange } value={ this.state.todo_title} type="text" name="todo_title"/>
                    <h4>Description</h4>
                    <input onChange={ this.handleInputChange } value={ this.state.todo_description } type="text" name="todo_description" />
                    <h4>Priority</h4>
                    <label for="Low"> Low 
                        <input type="radio" onChange={ this.handleRadioSelection } value="Low" checked={ this.state.todo_priority === "Low"}/>
                    </label>
                    <label for="Medium"> Medium
                        <input type="radio" onChange={ this.handleRadioSelection } value="Medium" checked={ this.state.todo_priority === "Medium"}/>
                    </label>
                    <label for="High"> High
                        <input type="radio" onChange={ this.handleRadioSelection } value="High" checked={ this.state.todo_priority === "High"}/>
                    </label><br />
                    <Button type="submit" variant="primary">Create New Task</Button>
                </form>
            </div>
        )
    }
}