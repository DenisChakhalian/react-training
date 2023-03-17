import Todo from "./Todo";
import styles from "./TodoList.module.css"

function TodoList({todos, deleteTodo}) {
    return (
        <div className={styles.todoListContainer}>
            {
                todos?.length ? todos.map((text, idx) => {
                    return <Todo text={text} deleteTodo={deleteTodo} key={idx} index={idx}/>
                }) : <h1>List is empty</h1>
            }
        </div>
    )
}

export default TodoList;