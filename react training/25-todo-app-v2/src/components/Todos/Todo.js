import {RiCalendarTodoFill, RiDeleteBin2Line} from "react-icons/ri";
import {FaCheck} from "react-icons/fa";

import styles from "./Todo.module.css"

function Todo({deleteTodo, todo, completeTodo}) {

    return (
        <div className={`${styles.todo} ${todo.isCompleted ? styles.completedTodo : ""}`}>
            <RiCalendarTodoFill className={styles.todoIcon}/>
            <div className={styles.todoText}>{todo.text}</div>
            <RiDeleteBin2Line className={styles.deleteIcon} onClick={() => deleteTodo(todo.id)}/>
            <FaCheck className={styles.checkIcon} onClick={() => completeTodo(todo.id)}/>
        </div>
    )
}

export default Todo;