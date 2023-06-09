import {useState} from "react";

import './App.css';
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";

function App() {
    const [todos, setTodos] = useState([]);

    const addTodoHandler = (text) => {
        setTodos([...todos, text])
    }

    const deleteTodo = (index) => {
        setTodos(todos.filter((_val, key) => key !== index));
    }

    return (
        <div className="App">
            <h1>Todo App</h1>
            <TodoForm addTodo={addTodoHandler}/>
            <TodoList deleteTodo={deleteTodo} todos={todos}/>
        </div>
    );
}

export default App;
