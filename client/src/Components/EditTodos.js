import { useState } from 'react'

const EditTodo = ({ todo }) => {
  const [desc, setDesc] = useState(todo.description)

  // Edit Description Function

  const updateDesc = async (e) => {
    e.preventDefault()
    try {
      const body = desc
      console.log(body)
      const response = await fetch(
        `http://localhost:5000/todos/${todo.todo_id}`,
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: body,
        }
      )
      console.log(response)
      // window.location = '/'
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <>
      <button
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${todo.todo_id}`}
      >
        Edit
      </button>

      <div className="modal" id={`id${todo.todo_id}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Modal Heading</h4>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                onChange={(e) => {
                  setDesc(e.target.value)
                }}
              />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                className="btn btn-success"
                data-dismiss="modal"
                onClick={(e) => {
                  updateDesc(e)
                }}
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditTodo
