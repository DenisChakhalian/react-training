import {RiDeleteBin2Line, RiRefreshLine} from "react-icons/ri";
import Button from "../UI/Button";
import styles from "./TodosActions.module.css"

function TodosActions({deleteTodos,deleteCompletedTodos, completedTodosExist}) {
    return (
        <div className={styles.todosActionsContainer}>
            <Button title="Reset Todos" onClick={deleteTodos}><RiRefreshLine/></Button>
            <Button disabled={!completedTodosExist} title="Clear Completed Todos" onClick={deleteCompletedTodos}><RiDeleteBin2Line/></Button>
            {

            }
        </div>
    )
}

export default TodosActions;