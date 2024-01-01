export default function TodoList(props) {
  return (
    <div className="todo-list-container">
      <li key={props.todoData.id}>{props.todoData.title}</li>
      <div>{props.todoData.todos.length}</div>
    </div>
  )
}