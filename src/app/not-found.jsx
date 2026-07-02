import Link from "next/link";

const recoveryLinks = [
  {
    href: "/",
    label: "Trang chu",
    description: "Quay lai diem bat dau chinh cua website demo.",
  },
  {
    href: "/gioi-thieu",
    label: "Gioi thieu",
    description: "Xem tom tat ngan gon ve muc dich va cau truc cua project.",
  },
  {
    href: "/lien-he",
    label: "Lien he",
    description: "Mo route lien he de kiem tra them mot trang tinh trong app.",
  },
];

export default function NotFound() {
  return (
    <section aria-labelledby="not-found-title" className="hero">
      <div className="hero-copy">
        <p className="hero-kicker">404</p>
        <h1 className="hero-title" id="not-found-title">
          Trang ban tim khong ton tai.
        </h1>
        <p className="hero-summary">
          Duong dan nay co the da sai, da duoc doi, hoac chua ton tai trong website
          demo hien tai. Ban co the quay lai trang chu hoac di den mot route da co
          san ben duoi.
        </p>

        <div className="hero-actions">
          <Link className="btn-primary" href="/">
            Ve trang chu
          </Link>
          <Link className="hero-secondary" href="/dashboard">
            Mo dashboard
          </Link>
        </div>
      </div>

      <aside aria-labelledby="not-found-links-title" className="hero-card">
        <p className="hero-card-kicker">Goi y dieu huong</p>
        <h2 className="hero-card-title" id="not-found-links-title">
          Ba diem bat dau an toan trong app
        </h2>
        <p className="hero-card-copy">
          Neu ban dang thu cac route demo, hay bat dau lai tu mot trong nhung lien
          ket sau de tiep tuc dieu huong.
        </p>

        <ul className="hero-list">
          {recoveryLinks.map((link) => (
            <li key={link.href}>
              <span className="hero-list-marker" aria-hidden="true" />
              <span>
                <Link className="footer-link" href={link.href}>
                  {link.label}
                </Link>{" "}
                - {link.description}
              </span>
            </li>
          ))}
        </ul>
      </aside>
    </section>
  );
}
