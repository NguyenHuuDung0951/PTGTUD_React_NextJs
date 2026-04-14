import { atom } from 'recoil'

// Global state để quản lý danh sách todos
const todoAtom = atom({
  key: 'todoAtom',
  default: [
    { id: 1, title: 'Học React', completed: false },
    { id: 2, title: 'Làm bài tập', completed: false },
  ]
})

export default todoAtom
