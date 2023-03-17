import {RiCalendarTodoFill} from "react-icons/ri";

import styles from "./Todo.module.css"

function Todo({deleteTodo, index, text}) {

    return (
        <div className={styles.todo} onDoubleClick={() => deleteTodo(index)}>
            <RiCalendarTodoFill className={styles.todoIcon}/>
            <div className={styles.todoText}>{text}</div>
        </div>
    )
}

export default Todo;