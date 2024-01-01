import { useState } from "react"
import Todos from "./Todos"

export default function Main(props) {

  const [currentTodoList, setCurrentTodoList] = useState(props.todoListData[0].title)

  return (
    <div className="main">
      <h3>{currentTodoList}</h3>
      <Todos currentTodoList={currentTodoList} />
    </div>
  )
}