import './Todo.css'

export default function Todo({todo}) {
    return (
        <li className='clsTodo' key={todo.id}>
            <div>할 일:{todo.text}</div>
            <div>{todo.deadline}일 까지 완료해주셈요</div>
        </li>
    )
}