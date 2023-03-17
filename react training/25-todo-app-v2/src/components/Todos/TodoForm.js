import Button from "../UI/Button";
import styles from "./TodoForm.module.css"
import {useState} from "react";

function TodoForm({addTodo}) {
    const [text, setText] = useState("");
    const setTodo = (event) => {
        event.preventDefault();
        if (!event.target.todo.value) return;
        // setTodos([...todos,event.target.todo.value]);
        // addTodo(event.target.todo.value);
        // event.target.todo.value = "";
        addTodo(text);
        setText("");
    }

    return (
        <div className={styles.todoFormContainer}>
            <form id="todoForm" onSubmit={setTodo}>
                <label>
                    <input name="todo" placeholder="enter new todo" value={text}
                           onChange={(e) => setText(e.target.value)}/>
                </label>
                <Button type="submit" title="submit">submit</Button>
            </form>
        </div>
    )
}

export default TodoForm;