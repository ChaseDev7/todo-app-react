export default function Todos(props) {
  return (
    <div className="todos-container">
      <div>{props.currentTodoList}</div>
    </div>
  )
}