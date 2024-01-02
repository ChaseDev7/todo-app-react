export default function TodoList(props) {
  return (
    <div className="list-item-container">
      <li>{props.todoData.title}</li>
      <div className="list-item-length">{props.todoData.todos.length}</div>
    </div>
  )
}