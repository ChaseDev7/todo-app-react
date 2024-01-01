export default function TodoList(props) {
  return (
    <div className="list-item-container">
      <li key={props.todoData.id}>{props.todoData.title}</li>
      <div className="list-item-length">{props.todoData.todos.length}</div>
    </div>
  )
}