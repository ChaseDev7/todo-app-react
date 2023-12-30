export default function Sidebar() {

  const todos = ["play games", "code", "watch movies", "listen to podcasts", "chill"]

  const todoList = todos.map(todo => todo)

  return (
    <div className="sidebar">
      <h4>Todo List</h4>
      <p>{todoList}</p>
    </div>
  )
}