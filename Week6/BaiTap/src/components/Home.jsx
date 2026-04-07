import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <section className="card hero-card">
            <p className="section-kicker">Trang chu</p>
            <h2>Chao mung den voi bai tap React Router</h2>
            <p>
                Ung dung gom cac trang Home, About, Contact, Products, Product Detail va
                Checkout. Ban co the nhan vao danh sach san pham de xem chi tiet.
            </p>
            <div className="hero-actions">
                <Link className="btn btn-primary" to="/products">
                    Xem san pham
                </Link>
                <Link className="btn btn-ghost" to="/about">
                    Tim hieu them
                </Link>
            </div>
        </section>
    )
}
