import React, { useEffect, useState } from 'react'
import InputArea from './InputArea'
import ToDoItem from './ToDoItem';
import './App.css'

const App = () => {
  const [items,setItem] = useState([]);

   useEffect(()=>{
        const items = localStorage.getItem("items");
        if(items){
          const arrtype = JSON.parse(items)
          setItem(arrtype)
        }
        
   },[]);

  const additem = (item)=>{
     setItem((curritem)=>{
        const newlist = [...curritem,item];
        const stringtype = JSON.stringify(newlist);
        localStorage.setItem('items',stringtype);
        return newlist;
     })
  }
    const deleteItem =(id)=>{
        setItem((curitem)=>{
          const updatelist = curitem.filter((item,index)=> index !== id)
          const stringify =JSON.stringify(updatelist);
          localStorage.setItem("items",stringify)
          return updatelist;
        })
    }


  return (
       <div className='app'>
         <h1 className='app__title'>To-to-List</h1>
         <InputArea additem={additem }/>

             <div className='itemcontainer'>
             { items.length === 0 ? <h1>No items added</h1>:
             items.map((item,index)=>{
               return(
                  <ToDoItem 
                    key = {index}
                    itemText={item}
                    deleteItem={()=>deleteItem(index)}
                  />
               )
             })
            }
             </div>
        
       </div>
  )
}

export default App