import { useRecoilValue } from 'recoil'
import todoAtom from './todo'
import TodoItem from './TodoItem'
import './todo.css'

function TodoList() {
  const todos = useRecoilValue(todoAtom)

  const completedCount = todos.filter(t => t.completed).length
  const totalCount = todos.length

  return (
    <div className="todo-list-container">
      <div className="todo-stats">
        <span className="todo-stat">
          📊 {completedCount}/{totalCount} hoàn thành
        </span>
      </div>

      {todos.length === 0 ? (
        <div className="todo-empty">
          <p>📭 Không có công việc nào. Hãy thêm một cái mới!</p>
        </div>
      ) : (
        <div className="todo-list">
          {todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </div>
      )}
    </div>
  )
}

export default TodoList
