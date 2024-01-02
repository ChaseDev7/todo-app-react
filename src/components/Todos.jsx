export default function Todos(props) {
  return (
    <div className="todo">
      <div className="todo-title">{props.currentTodos.todoTitle}</div>
    </div>
  )
}