import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

 const[val1,setVal1]=useState(5)
 const[val2,setVal2]=useState(4)

  const [op,setOp]=useState(0)

const addFun=()=>
{
  console.log("this is from function")
  setOp(parseInt(val1)+parseInt(val2))
  console.log("op",op)
}

 







  return (
    <div className="App">
      <div>
 <input type="number"  onChange={(e)=>setVal1 (e.target.value)}  value={val1}></input>
 <br/>
 <input type="number" onChange={(e)=>setVal2 (e.target.value)}  value={val2}></input>
 <br/>
 </div>

 <div>
<span>calculate output {op}</span>

  <button onClick={() => addFun()}> Add</button>
  </div>
 
    </div>
   
  );
}

export default App;
