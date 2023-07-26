import { useState } from "react";
import {findMaxId} from '../../util/ModelUtil'
import Todo from '../Todo/Todo'

export default function TodoList({todos}) {

    const [todoList, setTodoList] = useState(todos)
    const [identity, setIdentity] = useState(findMaxId(todos) + 1)
    const [todoText, setTodoText] = useState("")
    const [deadlineText, setDeadline] = useState("")

    function addTodo(e) {
        e.preventDefault();
        if (todoText !== "" && deadlineText !== "") {
            setIdentity(identity + 1)
            const todo = {
                id: identity,
                text: todoText,
                deadline: deadlineText
            }
            setTodoList([todo, ...todoList])
            setTodoText("")
            setDeadline("")
        } else {
            alert("값을 제대로 입력해주세요")
        }
    }

    function updateTodoText(e) { setTodoText(e.target.value)}
    function updateDeadline(e) { setDeadline(e.target.value) }

    return (
        <div className="clsTodoList">
            <h3 className="clsTitle">TodoList</h3>
            <form onSubmit={addTodo}>
                <div className="clsInputContainer">
                    <div className="clsInputLabel"><label>할 일 : </label></div>
                    <input
                        className="clsInput clsContent"
                        value={todoText}
                        onChange={updateTodoText}
                    />
                    <br/>
                    <div className="clsInputLabel"><label>마감 일 : </label></div>
                    <input
                        className="clsInput clsContent"
                        value={deadlineText}
                        onChange={updateDeadline}
                    />
                    </div>
                <div className="clsbuttonContainer">
                    <button className="clsButton clsContent" >등록 하기</button>
                </div>
            </form>
            <ul className="clsTodoListView">
                {todoList.map(todo => (<Todo todo={todo}/>))}
            </ul>
        </div>
    )
}