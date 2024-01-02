import Todos from "./Todos"

export default function Main(props) {

  const listOfTodos = props.currentTodos.map(todo => {
    return <Todos 
      key={todo.id}
      currentTodos={todo}
    />
  })

  return (
    <div className="main">
      <h3 className="main-todo-list-title">{props.currentTodoList.toUpperCase()}</h3>
      <div className="todos-container">
        {listOfTodos}
      </div>
    </div>
  )
}