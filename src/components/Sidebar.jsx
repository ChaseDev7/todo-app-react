import TodoList from "./TodoList"

export default function Sidebar(props) {

  const todoList = props.todoListData.map(todo => {
    return <TodoList 
      key={todo.id}
      todoData={todo}
    />
  })

  return (
    <div className="sidebar">
      <h3 className="todo-list-title">Todo List</h3>
      <ul className="todo-list-container">
        {todoList}
      </ul>
    </div>
  )
}