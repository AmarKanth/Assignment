import { useState } from "react";
import { useNavigate, NavLink } from 'react-router-dom';
import moment from 'moment';

import "./Todo.css";
import Card from "../Components/Card";

const AddTodo = () => {
    const navigate = useNavigate();
    const [task, setTask] = useState("");

    const handle = (event) => {
        event.preventDefault();
        setTask(event.target.value)
    }

    const addTodo = (event) => {
        event.preventDefault();
        let data = localStorage.getItem("data");
        data = (data) ? JSON.parse(data) : [];
        data.push({"task": task, "date": moment().format('LLLL')});
        if (task.length !== 0) localStorage.setItem("data", JSON.stringify(data));
        navigate("/");
    }

    return(
        <Card className="input">
            <form onSubmit={addTodo}>
                <label htmlFor="task">Task Details</label>
                <input id="task" type="text" onChange={handle} />
                <button type="submit">Add Todo</button>
                <NavLink to={"/"} className="btn">Back</NavLink>
            </form>
        </Card>
    )
}

export default AddTodo;