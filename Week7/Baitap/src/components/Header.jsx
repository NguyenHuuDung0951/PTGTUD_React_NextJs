import { useRecoilValue } from 'recoil'
import userAtom from './auth'


function Header() {
  const user = useRecoilValue(userAtom)

  return (
    <div style={{
      background: '#2c3e50',
      color: 'white',
      padding: '15px 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '2px solid #3498db'
    }}>
      <h1 style={{ margin: 0 }}>Auth Demo</h1>
      <div style={{ fontSize: '14px' }}>
        {user ? (
          <span>Xin chào, <strong>{user.username}</strong>! ✅</span>
        ) : (
          <span>Chưa đăng nhập</span>
        )}
      </div>
    </div>
  )
}

export default Header
