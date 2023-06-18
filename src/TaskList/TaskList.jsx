import React, { useState } from 'react';
import './TaskList.css';

export default function TaskList({tasks,setTasks}) {

    const [show,setShow] = useState(false);

    const handleDelete = (id)=> {
        setTasks(tasks.filter((task)=>task.id !== id));
    }

    const handleToggle = ()=> {
        setShow(!show);
    }
 
  return (
    <>
    <div className='taskList_Container'>

    <div className='mainTask_List'>
        <div className='listHeading'>
            <h2>Task List</h2>
            <button onClick={()=>handleToggle()}>Toggle list</button>
        </div>
    <ul>
        {show && tasks.map((task)=>(
            <li key={task.id} className={task.completed ? 'completed' : 'pending'}>
                <div>{task.id} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {task.name}</div>
                <div><button onClick={()=>handleDelete(task.id)}>Delete</button></div>
            </li>))}
      </ul>
    </div>

    </div>
      
    </>
  )
}
