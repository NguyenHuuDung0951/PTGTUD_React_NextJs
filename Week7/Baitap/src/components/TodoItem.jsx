import { useState } from 'react'
import { useSetRecoilState, useRecoilValue } from 'recoil'
import todoAtom from './todo'
import './todo.css'

function TodoItem({ todo }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(todo.title)
  const todos = useRecoilValue(todoAtom)
  const setTodos = useSetRecoilState(todoAtom)

  const handleDelete = () => {
    const newTodos = todos.filter(t => t.id !== todo.id)
    setTodos(newTodos)
  }

  const handleToggleComplete = () => {
    const newTodos = todos.map(t =>
      t.id === todo.id ? { ...t, completed: !t.completed } : t
    )
    setTodos(newTodos)
  }

  const handleSaveEdit = () => {
    if (!editText.trim()) {
      alert('Todo không được trống!')
      return
    }

    const newTodos = todos.map(t =>
      t.id === todo.id ? { ...t, title: editText.trim() } : t
    )
    setTodos(newTodos)
    setIsEditing(false)
  }

  const handleCancelEdit = () => {
    setEditText(todo.title)
    setIsEditing(false)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSaveEdit()
    } else if (e.key === 'Escape') {
      handleCancelEdit()
    }
  }

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-item-content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggleComplete}
          className="todo-checkbox"
        />
        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyPress={handleKeyPress}
            className="todo-edit-input"
            autoFocus
          />
        ) : (
          <span className="todo-title">{todo.title}</span>
        )}
      </div>

      <div className="todo-actions">
        {isEditing ? (
          <>
            <button
              onClick={handleSaveEdit}
              className="todo-btn todo-save-btn"
              title="Lưu"
            >
              💾
            </button>
            <button
              onClick={handleCancelEdit}
              className="todo-btn todo-cancel-btn"
              title="Hủy"
            >
              ✕
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => setIsEditing(true)}
              className="todo-btn todo-edit-btn"
              title="Sửa"
            >
              ✏️
            </button>
            <button
              onClick={handleDelete}
              className="todo-btn todo-delete-btn"
              title="Xóa"
            >
              🗑️
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default TodoItem
