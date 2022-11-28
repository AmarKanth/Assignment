import { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import "./Todo.css";
import Card from "../Components/Card";

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        let data = localStorage.getItem("data");
        data = (data) ? JSON.parse(data) : [];
        setTodos(data);
	}, []);

    return(
        <Card className="todos">
            <div>
                <span className="title">Todo List</span>
                <NavLink to={"/new"} className="btn" >Add Task</NavLink>
            </div>
            <ul>
                {todos.map((todo, idx) => (
                    <li key={idx}>
                        <div className="task">{todo.task}</div>
                        <div className="date">{todo.date}</div>
                    </li>
                ))}
            </ul>
        </Card>
    )
}

export default TodoList;