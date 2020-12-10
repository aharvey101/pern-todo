import { useState } from 'react'

const InputTodo = () => {
  const [description, setDescription] = useState('')

  const onSubmitForm = async (e) => {
    e.preventDefault()
    try {
      const body = { description }
      const response = await fetch('http://localhost:5000/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      window.location = '/'
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <>
      <h1 className="text-center mt-5">Pern Todo List</h1>
      <form className="mt-5">
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value)
          }}
        />
        <button className="btn btn-success" onClick={(e) => onSubmitForm(e)}>
          add
        </button>
      </form>
    </>
  )
}

export default InputTodo