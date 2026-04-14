import { useRecoilValue } from 'recoil'
import userAtom from './auth'


function Profile() {
  const user = useRecoilValue(userAtom)

  if (!user) {
    return (
      <div style={{
        background: '#ecf0f1',
        padding: '20px',
        borderRadius: '10px',
        textAlign: 'center',
        margin: '20px auto',
        maxWidth: '400px',
        color: '#7f8c8d'
      }}>
        <p>⚠️ Vui lòng đăng nhập để xem profile</p>
      </div>
    )
  }

  return (
    <div style={{
      background: '#ecf0f1',
      padding: '20px',
      borderRadius: '10px',
      margin: '20px auto',
      maxWidth: '400px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
    }}>
      <h3 style={{ marginTop: 0, color: '#2c3e50' }}>📋 Thông tin người dùng</h3>
      <div style={{
        background: 'white',
        padding: '15px',
        borderRadius: '5px',
        borderLeft: '4px solid #3498db'
      }}>
        <p><strong>ID:</strong> {user.id}</p>
        <p><strong>Tên:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>
    </div>
  )
}

export default Profile
