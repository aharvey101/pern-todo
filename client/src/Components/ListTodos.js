import { useState, useEffect } from 'react'
import EditTodo from './EditTodos'

const ListTodos = () => {
  const [todos, setTodos] = useState([])

  //Delete Todo
  const deleteTodo = async (id) => {
    try {
      const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      })
      setTodos(todos.filter((todo) => todo.todo_id !== id))
    } catch (error) {
      console.log(error.message)
    }
  }

  // Get todos
  const getTodos = async () => {
    try {
      const response = await fetch('http://localhost:5000/todos')
      const jsonData = await response.json()
      setTodos(jsonData)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    getTodos()
  }, [])

  return (
    <>
      <h1>list of todos</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => {
            return (
              <tr key={todo.todo_id}>
                <td>{todo.description}</td>
                <td>
                  <EditTodo todo={todo} />
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={(e) => {
                      deleteTodo(todo.todo_id)
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default ListTodos
