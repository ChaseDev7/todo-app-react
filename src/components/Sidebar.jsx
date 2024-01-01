import TodoList from "./TodoList"

export default function Sidebar(props) {

  // Update the code so that it isn't creating Container div for every LI (in the TodoList jsx file).
  const todoList = props.todoListData.map(todo => {
    return <TodoList 
      key={todo.id}
      todoData={todo}
    />
  })

  return (
    <div className="sidebar">
      <h3>Todo List - Groups</h3>
      <ul className="todo-list-container">
        {todoList}
      </ul>
    </div>
  )
}