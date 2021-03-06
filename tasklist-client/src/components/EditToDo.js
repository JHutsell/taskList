import React, { Component } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';


export default class EditTodo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            todo_title: '',
            todo_description: '',
            todo_priority: '',
            todo_completed: false
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/todos/' + this.props.match.params.id)
            .then(res => {
                this.setState({
                    todo_title: res.data.todo_title,
                    todo_description: res.data.todo_description,
                    todo_priority: res.data.todo_priority,
                    todo_completed: res.data.todo_completed
                })
            })
            .catch(function(error) {
                console.log(error)
            })
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
                <h3>Edit this Todo!</h3>
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
                    <Button type="submit" variant="primary">Edit Task</Button>
                </form>
            </div>
        )
    }
}