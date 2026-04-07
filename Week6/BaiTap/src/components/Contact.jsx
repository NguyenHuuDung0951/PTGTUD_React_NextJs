export default function Contact() {
    return (
        <section className="card">
            <p className="section-kicker">Contact</p>
            <h2>Thong tin lien he</h2>
            <div className="contact-grid">
                <p>Email: support@phonestore.local</p>
                <p>Hotline: 1900 1234</p>
                <p>Dia chi: 123 Duong Nguyen Hue, Q1, TP.HCM</p>
            </div>
            <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
                <label>
                    Ho ten
                    <input type="text" placeholder="Nhap ho ten" />
                </label>
                <label>
                    Noi dung
                    <textarea rows="4" placeholder="Nhap noi dung lien he" />
                </label>
                <button type="submit" className="btn btn-primary">
                    Gui
                </button>
            </form>
        </section>
    )
}