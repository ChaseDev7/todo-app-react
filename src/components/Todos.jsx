export default function Todos(props) {

  function logTitle() {
    console.log(props.currentTodos.todoTitle)
  }

  return (
    <div className="todo" onClick={logTitle}>
      <div className="todo-title">{props.currentTodos.todoTitle}</div>
      <div>more</div>
    </div>
  )
}