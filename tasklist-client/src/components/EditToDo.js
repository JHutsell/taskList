import React, { Component } from 'react';
import axios from 'axios';

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

    render() {
        return (
            <div>
                <p>Welcome to Edit Todo Component!!</p>
            </div>
        )
    }
}