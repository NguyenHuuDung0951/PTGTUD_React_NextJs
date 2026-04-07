import { Link, useNavigate, useParams } from 'react-router-dom'
import { formatCurrency, products } from '../data/products'

export default function ProductDetail() {
    const { id } = useParams()
    const navigate = useNavigate()
    const product = products.find((item) => item.id === Number(id))

    const handleBuy = () => {
        if (!product) {
            return
        }

        navigate('/checkout', {
            state: {
                productName: product.name,
                amount: product.price,
            },
        })
    }

    if (!product) {
        return (
            <section className="card">
                <h2>Khong tim thay san pham</h2>
                <p>San pham co id {id} khong ton tai trong danh sach.</p>
                <Link className="btn btn-ghost" to="/products">
                    Quay lai danh sach
                </Link>
            </section>
        )
    }

    return (
        <section className="card detail-card">
            <p className="section-kicker">Product Detail</p>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p className="price">Gia: {formatCurrency(product.price)}</p>
            <p>So luong ton: {product.stock}</p>
            <div className="detail-actions">
                <button onClick={handleBuy} className="btn btn-primary" type="button">
                    Mua hang
                </button>
                <Link className="btn btn-ghost" to="/products">
                    Quay lai
                </Link>
            </div>
        </section>
    )
}