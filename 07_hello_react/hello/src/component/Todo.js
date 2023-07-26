import React from 'react'
import TodoList from './TodoList'

export default class Todo extends React.Component {
    constructor(v) {
        super(v)
        this.state = {
            todoList: [],
            todoText: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleChange(e) {
        this.setState({todoText: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.todoText.length === 0) {
            return
        }
        const newTodo = {
            id: Date.now(),
            todoText: this.state.todoText
        }
        
        this.setState({todoList: this.state.todoList.concat(newTodo)})
        this.setState({todoText: ""})
    }


    render() {
        return <div>
            <h1>투두리스트엥요!</h1>
            <form onSubmit={this.handleSubmit}>
                <input
                    id='newTodo'
                    onChange={this.handleChange}
                    value={this.state.todoText}>
                </input>
                <button>
                    Add #{this.state.todoList.length + 1}
                </button>
                <TodoList todoList={this.state.todoList}/>
            </form>
        </div>
    }
}