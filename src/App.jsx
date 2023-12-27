import React, { useState } from 'react'

const App = () => {
    const [inputVal, setinputVal] = useState('')
    const [todoList, setTodoList] = useState([])
    const [updButton, setUpdButton] = useState(false)
    const [updID, setUpdId] = useState(null)

const handleInputChange = (e) =>{
    setinputVal(e.target.value)
}

const addTodo = (e) =>{
    e.preventDefault()
    const list = [...todoList]
    list.push(inputVal)
    setTodoList(list)
    setinputVal('')
}

const deleteTodo = (id) =>{
    const list = [...todoList]
    list.splice(id, 1)
    setTodoList(list)
}
            
const editTodo = (id) =>{
    const list = [...todoList]
    const arr = list.filter((item,i)=>i===id)
    setinputVal(arr)
    setUpdId(id)
    setUpdButton(true)
}

const updTodo = () =>{
    const list = [...todoList]
    list.splice(updID,1 , inputVal)
    setTodoList(list);
    setinputVal('')
    setUpdButton(false)
}

const deleteAll = () =>{
    setTodoList([])
}

console.log(inputVal, "update wla");
  return (
    <div>
        <div className='flex justify-center mt-5 gap-3' >
      <input type="text" value={inputVal} placeholder='enter your item' onChange={handleInputChange} className='w-[230px] border p-2 border-black rounded-md'/>
      <button className={`${updButton ? 'bg-blue-700' : 'bg-black'} w-[139px] font-semibold text-white px-6 py-2 rounded-md`} onClick={updButton ? updTodo : addTodo}>
        {
            updButton ? "Update Item" : "Add Item"
        }
      </button>
      {
        todoList.length > 0 ? (
            <button className={`bg-red-600 w-[139px] font-semibold text-white px-6 py-2 rounded-md`} onClick={deleteAll}>
       DeleteAll
      </button> 
        ): null
      }
        </div>
        <div className='mt-5 max-w-[380px]  mx-auto'>
            <ul className='flex flex-col  '>
            {
               todoList.map((item, id)=>(
                <div key={id} className='flex justify-between mt-5 border rounded-full py-2 px-6'>
                    <li className={`font-bold text-[20px]  max-w-[210px] break-words ${updID === id ? 'text-orange-400' : 'text-black'}`} >{item}</li>
                    <div className='flex justify-end gap-3 w-[135px]'>
                    <button onClick={()=>deleteTodo(id)} className='bg-red-700 rounded-full font-semibold text-white px-3 py-1'>delete</button>
                    <button onClick={()=>editTodo(id)} className='bg-blue-700 rounded-full font-semibold px-3 py-1 text-white'>edit</button>
                    </div>
                </div>
               )) 
            }
            </ul>
        </div>
    </div>
  )
}

export default App

