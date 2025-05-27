import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const TodoLista = () => {

	const [tasks, setTasks] = useState([])


	let handleEnter = (e) =>{
		if (e.key === 'Enter') {
		e.preventDefault(); 

		let task = e.target.value.trim(); 
		if (task !== "") {
			setTasks([...tasks, task]); 
			e.target.value = ""; 
		}
	}
	
	}


const deleteTasks = (i) => {
		const updt_Tasks = tasks.filter((_, index) => index !== i);
		setTasks(updt_Tasks);
	};

	return (
		<div className="container mt-5 text-center">
			<h1 className="mb-4">todos</h1>
			<input
				type="text" className="form-control" placeholder="Escribe una tarea y presiona Enter" onKeyDown={handleEnter}
			/>

			<div className="mt-4">
				{tasks.map((task, index) => (
					<div
						key={index}
						className="todo-item d-flex justify-content-between align-items-center mb-2 border p-2 rounded"
					>
						<span>{task}</span>
						<button className="delete-btn btn btn-sm btn-danger" onClick={() => deleteTasks(index)}>
							X
						</button>
					</div>
				))}
				<small className="text-muted"> {tasks.length === 0 ? "No tienes tareas pendientes" : `${tasks.length} tarea${tasks.length > 1 ? "s" : ""} pendiente${tasks.length > 1 ? "s" : ""}`}
				</small>
			</div>
		</div>
	);
};

export default TodoLista;