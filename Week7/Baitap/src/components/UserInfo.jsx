import { useRecoilValue, useSetRecoilState } from 'recoil'
import userAtom from './auth'


function UserInfo() {
  const user = useRecoilValue(userAtom)
  const setUser = useSetRecoilState(userAtom)

  const handleLogout = () => {
    setUser(null)
    alert('Bạn đã đăng xuất!')
  }

  if (!user) {
    return null
  }

  return (
    <div className="user-info-container">
      <div className="user-info">
        <span className="user-username">User name{user.username}</span>
        <span className="user-email">email {user.email}</span>
        <button className="logout-btn" onClick={handleLogout}>
          Đăng Xuất
        </button>
      </div>
    </div>
  )
}

export default UserInfo
