import {useState} from "react";
import {v4 as uuidv4} from 'uuid';

import './App.css';
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
import TodosActions from "./components/Todos/TodosActions";


function App() {
    const [todos, setTodos] = useState([]);

    const parseData = (data) => {
        try {
            return JSON.parse(data)
        } catch (e) {
            console.log(e.message)
        }
    }

    if (!todos?.length && localStorage.getItem("todos")) {
        const todosLocal = localStorage.getItem("todos");
        setTodos(parseData(todosLocal));
    }

    const addTodoHandler = (text) => {
        const newTodo = {
            text,
            isCompleted: false,
            id: uuidv4()
        }
        localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
        setTodos([...todos, newTodo]);
    }

    const deleteTodo = (id) => {
        const newTodos = todos?.filter((todo) => todo.id !== id);
        setTodos(newTodos);
        if (!newTodos.length) {
            localStorage.clear();
        } else {
            localStorage.setItem("todos", JSON.stringify(newTodos));
        }
    }

    const deleteTodos = () => {
        setTodos([]);
        localStorage.clear();
    }

    const deleteCompletedTodos = () => {
        const newTodos = todos.filter((todo) => !todo.isCompleted);
        setTodos(newTodos);
        if (!newTodos.length) {
            localStorage.clear();
        } else {
            localStorage.setItem("todos", JSON.stringify(newTodos));
        }
    }

    const completeTodo = (id) => {
        const newTodos = todos.map((todo) => todo.id === id
            ? {...todo, isCompleted: !todo.isCompleted}
            : {...todo}
        );
        setTodos(newTodos);
        localStorage.setItem("todos", JSON.stringify(newTodos));
    }

    const completedTodosCount = todos?.filter((todo) => todo.isCompleted).length;

    return (
        <div className="App">
            <h1>Todo App</h1>
            <TodoForm addTodo={addTodoHandler}/>
            {
                !!todos?.length &&
                <TodosActions completedTodosExist={!!completedTodosCount} deleteTodos={deleteTodos}
                              deleteCompletedTodos={deleteCompletedTodos}/>
            }
            <TodoList deleteTodo={deleteTodo} todos={todos} completeTodo={completeTodo}/>
            {
                !!completedTodosCount &&
                <h2>{`You have completed ${completedTodosCount} ${completedTodosCount > 1 ? "todos" : "todo"} `}</h2>
            }
        </div>
    );
}

export default App;
