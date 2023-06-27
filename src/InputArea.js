import { useState } from 'react'

const InputArea = ({additem}) => {

  const[input,setInput] = useState("");

  function handleChange(e){
   setInput(e.target.value)
   
  }

  function handleAdd(){
    if(input === ''){
      alert("please enter something")
      return
    }
    additem(input);
    setInput("")
  }

  return (
    <div className='inputField'>
     <input 
     value={input}
     type="text"
     placeholder='What do want to do' 
     onChange={handleChange}
     />
     <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default InputArea;