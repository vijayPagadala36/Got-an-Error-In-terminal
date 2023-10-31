import './index.css'

const Todo = props => {
  const {uniqueId, name, deletingTodo} = props

  const deleteTodo = () => {
    deletingTodo(uniqueId)
  }
  return (
    <div className="todo_item">
      <p>{name}</p>
      <button className="button" type="button" onClick={deleteTodo}>
        Delete
      </button>
    </div>
  )
}

export default Todo
