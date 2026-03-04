


import React, { useEffect, useState } from 'react';
import axios from 'axios';

function WorkerDash() {
    const [tasks, setTasks] = useState([]);
    const worker = JSON.parse(localStorage.getItem('worker'));

    useEffect(() => {
        const fetchMyTasks = async () => {
            const res = await axios.get(`http://localhost:5000/api/worker-tasks/${worker.id}`);
            setTasks(res.data);
        };
        fetchMyTasks();
    }, [worker.id]);

    const markCompleted = async (taskId) => {
        await axios.put(`http://localhost:5000/api/complete-task/${taskId}`);
        alert("Task marked as completed!");
        window.location.reload(); // Refresh to update the list
    };

    return (
        <div className="worker-dashboard">
            <h1>Worker Panel: Welcome {worker.name}</h1>
            <div className="task-list">
                {tasks.length === 0 ? <p>No tasks assigned yet. Good job!</p> : 
                    tasks.map(task => (
                        <div key={task.id} className="task-card">
                            <img src={`http://localhost:5000/${task.image_path}`} alt="waste" width="200" />
                            <p><strong>Location/Desc:</strong> {task.description}</p>
                            <p><strong>Status:</strong> {task.status}</p>
                            {task.status !== 'Completed' && (
                                <button onClick={() => markCompleted(task.id)}>Mark as Cleaned</button>
                            )}
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default WorkerDash;