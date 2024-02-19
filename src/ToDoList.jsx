import { useState } from "react";

function ToDoList() {
    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState('')

    function handleInputChange(e) {
        setNewTask(e.target.value);

    }
    function addTask() {
        if (newTask.trim() !== "") {
            setTasks(t => ([...t, newTask]))
            setNewTask("");
        }
    }
    function removeTask(index) {
        setTasks(tasks.filter((_, i) => i !== index));
    }
    function moveUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] =
                [updatedTasks[index - 1], updatedTasks[index]]

            setTasks(updatedTasks)
        }

    }
    function moveDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] =
                [updatedTasks[index + 1], updatedTasks[index]]

            setTasks(updatedTasks)
        }
    }
    return <div className="to-do-list">
        <div>
            <h1>To Do List</h1>
            <input type="text"
                placeholder="Enter a task..."
                value={newTask}
                onChange={handleInputChange}

            />
            <button className="add-button" onClick={addTask} >Add</button>
        </div>
        <ol>
            {
                tasks.map((task, index) => <li key={index}><span>{task}</span>
                    <button className="delete-button" onClick={() => removeTask(index)}>Delete</button>
                    <button className="move-button" onClick={() => moveUp(index)}>⬆️</button>
                    <button className="move-button" onClick={() => moveDown(index)}>⬇️</button>
                </li>)
            }
        </ol>

    </div>
}
export default ToDoList;