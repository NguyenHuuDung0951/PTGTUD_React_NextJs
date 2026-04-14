import './App.css'
import ComponentA from './components/componentA.jsx'
import ComponentB from './components/componentB.jsx'
import ThemeTogle from './components/themeTogle.jsx'
import Login from './components/Login.jsx'
import UserInfo from './components/UserInfo.jsx'
import Header from './components/Header.jsx'
import Profile from './components/Profile.jsx'
import TodoInput from './components/TodoInput.jsx'
import TodoList from './components/TodoList.jsx'
import { useRecoilValue } from 'recoil'
import themeAtom from './components/theme'

function App() {
  const theme = useRecoilValue(themeAtom)

  return (
    <>
    <Header />
    <div className={`app app-${theme}`}>
       <div style={{ padding: '20px' }}>
         {/* Bài 3: Auth giả lập */}
         <h2 style={{ textAlign: 'center' }}>Bài 3: Auth giả lập (Login/Logout)</h2>
         <Login />
         <UserInfo />
         <Profile />

         <hr style={{ margin: '40px 0', opacity: 0.3 }} />

        {/* Bài 4: Todo List Global */}
         <h2 style={{ textAlign: 'center' }}>Bài 4: Todo List Global</h2>
         <TodoInput />
         <TodoList />

         <hr style={{ margin: '40px 0', opacity: 0.3 }} />

         <ComponentA />
         <ComponentB />
         <ThemeTogle />
       </div>
    </div>
    </>
  )
}

export default App
