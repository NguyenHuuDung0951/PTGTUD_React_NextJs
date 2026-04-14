import { useState } from 'react'
import { useSetRecoilState, useRecoilValue } from 'recoil'
import todoAtom from './todo'
import './todo.css'

function TodoInput() {
  const [input, setInput] = useState('')
  const todos = useRecoilValue(todoAtom)
  const setTodos = useSetRecoilState(todoAtom)

  const handleAddTodo = () => {
    if (!input.trim()) {
      alert('Vui lòng nhập todo!')
      return
    }

    const newTodo = {
      id: Date.now(),
      title: input.trim(),
      completed: false
    }

    setTodos([...todos, newTodo])
    setInput('')
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTodo()
    }
  }

  return (
    <div className="todo-input-container">
      <input
        type="text"
        placeholder="Nhập công việc mới..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
        className="todo-input"
      />
      <button onClick={handleAddTodo} className="todo-add-btn">
        ➕ Thêm
      </button>
    </div>
  )
}

export default TodoInput
