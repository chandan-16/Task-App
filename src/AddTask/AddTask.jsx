import React, { useState } from 'react';
import './AddTask.css';

export default function AddTask({tasks,setTasks}) {

    const [inputValue,setInputValue] = useState('');
    const [progress, setProgress] = useState(true);


    const handleInput = (event)=> {
        setInputValue(event.target.value);
    }

    const handleReset = ()=> {
        setInputValue('');
        setProgress(true);
    }

    const handleSubmit = (event)=> {
        event.preventDefault();

        const task = {
            id : Math.floor(Math.random() * 100),
            name : inputValue,
            completed : Boolean(progress),
        }
        setTasks([...tasks, task]);

        handleReset();
    }

  return (
    <>
    <div className='addTask_backgrnd'>
    <div className='addTask'>
    <form onSubmit={handleSubmit}>
        <input type="text" name='tasks' id='tasks' autoComplete='off' onChange={handleInput} placeholder='Task Name' value={inputValue}/>
        <select id='select' name='select' onChange={(event)=>setProgress(event.target.value)} value={progress}>
            <option value={false}>Pending</option>
            <option value={true}>Completed</option>
        </select>
        <span onClick={()=>handleReset()}>Reset</span>
        <button type='submit'>Add Task</button>
    </form>
    </div>
    </div> 
    </>
  )
}
