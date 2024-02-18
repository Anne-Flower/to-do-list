import { useState } from "react";

const App = () => {

  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const addTasks = () => {
    if(task !== ''){
      setTasks([...tasks,task])
      setTask('')
    }
  }
  console.log(tasks);


  return (
    <div id="main-container" className="flex flex-col items-center">
        <h1 className="text-4xl	font-bold	tracking-tight pt-4 m-16">TO DO LIST</h1>
      <div className="p-6 font-medium	text-base	justify-items-center">
        <input className="bg-sky-200  text-black	rounded-md p-4 m-4"
        onChange={(e)=>{setTask(e.target.value);}}
        value={task} 
        type="text"
        placeholder='Create a new "to do"'></input>
        <button className="bg-emerald-200 text-emerald-600 py-4 px-4 rounded-md hover:bg-emerald-500 hover:text-white"
        onClick={addTasks}>Add Tasks</button>
      </div>
      <div></div>


    </div>
  )
}

export default App;
