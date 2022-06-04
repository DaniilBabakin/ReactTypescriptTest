import React from "react"
import { Todo } from "../types"

type TodoListProps = {
  todos: Todo[]
  onToggle(id: number): void
  onRemove(id: number): void
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  onRemove,
  onToggle,
}) => {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <li className={`todo ${todo.completed && "completed"}`} key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
              />
              <span>{todo.title}</span>
              <i
                className="material-icons red-text"
                onClick={() => onRemove(todo.id)}
              >
                delete
              </i>
            </label>
          </li>
        )
      })}
    </ul>
  )
}
