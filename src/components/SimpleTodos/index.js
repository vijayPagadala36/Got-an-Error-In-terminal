import {Component} from 'react'
import './index.css'
import Todo from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {todoLists: initialTodosList}

  deletingTodo = uniqueId => {
    const {todoLists} = this.state
    const result = todoLists.filter(each => each.id !== uniqueId)
    this.setState({todoLists: result})
  }

  render() {
    const {todoLists} = this.state
    return (
      <div className="background_container">
        <div className="todo_container">
          <h1>Simple Todos</h1>
          {todoLists.map(eachItem => (
            <Todo
              key={eachItem.id}
              uniqueId={eachItem.id}
              name={eachItem.title}
              deletingTodo={this.deletingTodo}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default SimpleTodos
