import React, { useState, useCallback } from "react";

function TodoItem({ id, text, done, onToggle, onDelete }) {
    console.log("render item", id);
    return (
        <li style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <input
                type="checkbox"
                checked={done}
                onChange={() => onToggle(id)}
            />
            <span style={{ textDecoration: done ? "line-through" : "none", flex: 1 }}>{text}</span>
            <button onClick={() => onDelete(id)}>Delete</button>
        </li>
    );
}

const MemoTodoItem = React.memo(TodoItem);

function TodoList({ todos, onToggle, onDelete }) {
    return (
        <ul style={{ padding: 0, listStyle: "none" }}>
            {todos.map((t) => (
                <MemoTodoItem
                    key={t.id}
                    id={t.id}
                    text={t.text}
                    done={t.done}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    );
}

function TodoInput({ value, onChange, onAdd }) {
    return (
        <div style={{ display: "flex", gap: 8 }}>
            <input
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="New todo"
                style={{ flex: 1, padding: 6 }}
            />
            <button onClick={onAdd}>Add</button>
        </div>
    );
}

export default function Bai4() {
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([
        { id: 1, text: "Learn React", done: false },
        { id: 2, text: "Build Todo", done: true },
    ]);

    const onToggle = useCallback( (id) => {
        setTodos(prev =>
                    prev.map(t => 
                        t.id === id ? { ...t, done : !t.done} : t
                    )
        );
    }, []);
    
    const onDelete = useCallback( () => {
        setTodos( (prev) => prev.filter((t) => t.id !== id));
    }, []);

    const onAdd = useCallback( () => {
        if(!input.trim()) return;
        setTodos((prev) => [
            ...prev,
            {id: Date.now(), text: input.trim(), done: false}
        ]);
        setInput("");
    },[input])

    return (
        <div style={{ maxWidth: 600, margin: "16px auto", fontFamily: "Arial, Helvetica, sans-serif" }}>
            <h3>Todo List (performance-friendly)</h3>
            <TodoInput value={input} onChange={setInput} onAdd={onAdd} />
            <div style={{ marginTop: 12 }}>
                <TodoList todos={todos} onToggle={onToggle} onDelete={onDelete} />
            </div>
        </div>
    );
}