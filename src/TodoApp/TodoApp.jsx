import React from 'react'
import './TodoApp.css'
import { RiDeleteBinLine } from "react-icons/ri";

const TodoApp = () => {
  return (
    <div>
        
        <div className="div-container">

            <h1> TODO App List</h1>

            <form action="">
              <input type="text" />
              <button type='submit'>ADD</button>
            </form>

            <ul>
                <span>New Task            </span>
                <button><RiDeleteBinLine /></button>
            </ul>

        </div>
    </div>


  )
}

export default TodoApp