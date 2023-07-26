import TodoList from '../TodoList/TodoList'

export default function Form() {
    const todoList = [{
        id:1,
        text:"hello one",
        deadline:"1월 3일"
    },
    {
        id:2,
        text:"hello one",
        deadline:"1월 3일"
    }]

    return (
        <div className='clsForm'>
            <TodoList todos={todoList}/>
        </div>
    )
}

