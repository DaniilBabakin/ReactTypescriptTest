import React, { useState } from "react"
import { Navbar } from "./components/Navbar"
import { TodoForm } from "./components/TodoForm"
import { TodoList } from "./components/TodoList"
import { Todo } from "./types"

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  //Добавление новой ToDo
  const addHandler = (title: string) => {
    const newTodo = {
      title: title,
      id: Date.now(),
      completed: false,
    }
    setTodos((prev) => [newTodo, ...prev])
  }
  
  const toggleHandler = (id:number) => {
    setTodos(prev=> prev.map(todo=> { 
      if( todo.id === id){
        return {...todo,completed: !todo.completed}
      }
      return todo
     }))
  }
  
  const removeHandler = (id:number) => {
    setTodos(prev=> prev.filter(todo => todo.id !== id))
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <TodoForm onAdd={addHandler} />
        <TodoList todos={todos} onToggle={toggleHandler} onRemove={removeHandler}/>
      </div>
    </>
  )
}

export default App
