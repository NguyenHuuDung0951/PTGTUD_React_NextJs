import { Link, useLocation } from 'react-router-dom'
import { formatCurrency } from '../data/products'

function Checkout() {
  const location = useLocation()
  const orderData = location.state

  return (
    <section className="card success-card">
      <p className="section-kicker">Checkout</p>
      <h2>Thanh toan thanh cong</h2>
      {orderData ? (
        <>
          <p>Ban da dat: {orderData.productName}</p>
          <p>Tong tien: {formatCurrency(orderData.amount)}</p>
        </>
      ) : (
        <p>Khong co don hang duoc chon. Hay quay lai trang san pham de mua hang.</p>
      )}
      <Link className="btn btn-primary" to="/products">
        Tiep tuc mua sam
      </Link>
    </section>
  )
}

export default Checkout