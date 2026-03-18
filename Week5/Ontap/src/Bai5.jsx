import React, { useState, useEffect, useCallback } from 'react'

const LOCAL_TODOS = '/src/todo.json'

const Bai5 = () => {
  const [todos, setTodos] = useState([])
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false
    const fetchTodos = async () => {
      setLoading(true)
      setError(null)
      try {
        const res = await fetch(LOCAL_TODOS)
        if (!res.ok) throw new Error(`Failed to load local todos: ${res.status}`)
        const data = await res.json()
        if (!cancelled) setTodos(data)
      } catch (err) {
        if (!cancelled) setError(err.message)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetchTodos()
    return () => { cancelled = true }
  }, [])

  const handleSubmit = useCallback((e) => {
    e.preventDefault()
    const title = text.trim()
    if (!title) return

    setError(null)
    const nextId = todos.length ? Math.max(...todos.map(t => t.id)) + 1 : 1
    const newTodo = { id: nextId, title, completed: false }
    setTodos(prev => [...prev, newTodo])
    setText('')
  }, [text, todos])

  const handleDelete = useCallback((id) => {
    if (!window.confirm('Delete this todo?')) return
    setTodos(prev => prev.filter(t => t.id !== id))
  }, [])

  return (
    <>
      <h2>Add to do list</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="add to do list"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      <ul>
        {todos.map(todo => (
          <li key={todo.id} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <span>{todo.title}</span>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Bai5
