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

    render() {
        return (
            <div>
                <h2>Welcome to Create Todo Component!!</h2>
                <form>
                    <h4>Title</h4>
                    <input/>
                    <h4>Description</h4>
                    <input />
                    <h4>Priority</h4>
                    <input type="radio" style={{display: "inline"}}/>
                    <label for="Low"> Low</label>
                    <input type="radio" style={{display: "inline"}}/>
                    <label for="Medium"> Medium</label>
                    <input type="radio" style={{display: "inline"}}/>
                    <label for="High"> High</label>
                </form>
            </div>
        )
    }
}