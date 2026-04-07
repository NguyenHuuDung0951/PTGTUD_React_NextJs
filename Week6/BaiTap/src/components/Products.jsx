import { Link } from 'react-router-dom'
import { formatCurrency, products } from '../data/products'

export default function Products() {
    return (
        <section className="card">
            <p className="section-kicker">Products</p>
            <h2>Danh sach san pham</h2>
            <div className="product-list">
                {products.map((product) => (
                    <article className="product-item" key={product.id}>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p className="price">{formatCurrency(product.price)}</p>
                        <Link className="btn btn-ghost" to={`/products/${product.id}`}>
                            Xem chi tiet
                        </Link>
                    </article>
                ))}
            </div>
        </section>
    )
}