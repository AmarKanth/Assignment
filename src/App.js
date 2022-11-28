import TodoList from "./Todo/TodoList"
import AddTodo from "./Todo/AddTodo";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={'/'} element={<TodoList/>} />
				<Route path={'/new'} element={<AddTodo/>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
