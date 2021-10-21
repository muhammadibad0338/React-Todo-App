import React, { useState } from 'react'
import './Todo.css'

const Todo = () => {
    const [isTodoUpdating, setIsTodoUpdating] = useState(false)
    const [todos, setTodos] = useState([])
    const [todoInput, setTodoInput] = useState('')
    const [todoUpdatingIndex, setTodoUpdatingIndex] = useState()

    const addTodo = () => {
        if (todoInput.trim() != '') {
            setTodos(prvs => [...prvs, todoInput])
            setTodoInput('')
        }
        else {
            alert('Todo is Empty')
        }
    }


    const deleteTodo = (index) => {
        let filterTodos = todos.filter((val, i) => i != index)
        setTodos(filterTodos)
    }

    const updateTodo = (index) => {
        setTodoUpdatingIndex(index)
        setTodoInput(todos[index])
        setIsTodoUpdating(true)
    }

    const todoUpdated = () => {
        if (todoInput.trim() != '') {
            let updatedTodos = todos.map((val, i) => i == todoUpdatingIndex ? todoInput : val)
            setTodos(updatedTodos)
        }
        setTodoInput('')
        setIsTodoUpdating(false)
    }

    return (
        <div className="alignItemCenter" >
            <div style={{ marginBottom: '50px' }}>
                <input placeholder="Enter Todo" className='todoInput marginTop' value={todoInput} onChange={e => setTodoInput(e.target.value)} />
                {
                    isTodoUpdating ? <button className='updateBtn' onClick={todoUpdated}  >UPDATE</button> : <button className='addBtn' onClick={addTodo} >ADD</button>
                }
            </div>
            {todos.length == 0 ? <h2 style={{ color: 'gray' }} >No Todo Found</h2> :
                todos.map((val, i) => {
                    return (
                        <div className='todoItem' key={i} >
                            <p className='todoItemText'>{val}</p>
                            <div style={{ display: 'flex' }} >
                                <button className='deleteTodoBtn' onClick={() => deleteTodo(i)} >Delete</button>
                                <button className='updateTodoBtn' onClick={() => updateTodo(i)} >update</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Todo
