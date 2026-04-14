import { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import userAtom from './auth'


function Login() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const setUser = useSetRecoilState(userAtom)

  const handleLogin = () => {
    if (!username.trim() || !email.trim()) {
      alert('Vui lòng nhập đủ thông tin!')
      return
    }

    // Giả lập đăng nhập - tạo user object
    const newUser = {
      id: Date.now(),
      username,
      email
    }

    setUser(newUser)
    setUsername('')
    setEmail('')
    alert(`Chào mừng ${username}!`)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleLogin()
    }
  }

  return (
    <div className="login-container">
      <h2>Đăng Nhập</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
        <input
          type="text"
          placeholder="Tên đăng nhập"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button type="submit">Đăng Nhập</button>
      </form>
    </div>
  )
}

export default Login
