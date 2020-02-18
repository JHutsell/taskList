import React, { Component } from 'react';
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

    render() {
        return (
            <div>
                <h2>Welcome to Create Todo Component!!</h2>
                <form>
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