import React from 'react'

export default class TodoList extends React.Component {
    render() {
        return <ul>
            {this.props.todoList.map(todo => (
                <li key={todo.id}>{todo.todoText}</li>
            ))}
        </ul>
    }
}