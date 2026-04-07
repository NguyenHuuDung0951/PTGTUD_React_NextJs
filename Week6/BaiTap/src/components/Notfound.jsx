import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <section className="card">
            <p className="section-kicker">404</p>
            <h2>Trang khong ton tai</h2>
            <p>Duong dan ban truy cap hien khong hop le.</p>
            <Link className="btn btn-ghost" to="/">
                Ve trang chu
            </Link>
        </section>
    )
}