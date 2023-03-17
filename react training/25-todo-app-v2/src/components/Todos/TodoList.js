import Todo from "./Todo";
import styles from "./TodoList.module.css"

function TodoList({todos, deleteTodo, completeTodo}) {
    return (
        <div className={styles.todoListContainer}>
            {
                todos?.length ? todos.map((todo) => {
                    return <Todo todo={todo} deleteTodo={deleteTodo} key={todo.id} completeTodo={completeTodo}/>
                }) : <h1>List is empty</h1>
            }
        </div>
    )
}

export default TodoList;