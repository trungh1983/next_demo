import Link from "next/link";

export default function Home() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="hero-kicker">Next Demo</p>
        <h1 className="hero-title">Một trang chủ có trọng tâm cho bản demo này.</h1>
        <p className="hero-summary">
          Bắt đầu nhanh với dashboard, chuyển sang trang liên hệ khi cần, và dùng
          workspace này như một base Next.js App Router gọn, rõ, dễ mở rộng.
        </p>

        <div className="hero-actions">
          <Link className="btn-primary" href="/dashboard">
            Mở Dashboard
          </Link>
          <Link className="hero-secondary" href="/lien-he">
            Liên hệ
          </Link>
        </div>
      </div>

      <aside aria-labelledby="hero-overview-title" className="hero-card">
        <p className="hero-card-kicker">Tổng quan nhanh</p>
        <h2 className="hero-card-title" id="hero-overview-title">
          Những gì đã sẵn sàng trong app
        </h2>
        <p className="hero-card-copy">
          Cấu trúc hiện tại đủ nhẹ để review nhanh, nhưng đã có sẵn navigation,
          route riêng và hệ style chung để tiếp tục mở rộng.
        </p>

        <dl className="hero-stats">
          <div className="hero-stat">
            <dt>Routes demo</dt>
            <dd>3</dd>
          </div>
          <div className="hero-stat">
            <dt>Stack</dt>
            <dd>Next.js 16</dd>
          </div>
          <div className="hero-stat">
            <dt>Styling</dt>
            <dd>Tailwind CSS 4</dd>
          </div>
        </dl>

        <ul className="hero-list">
          <li>
            <span className="hero-list-marker" aria-hidden="true" />
            Navigation dẫn thẳng đến Dashboard và Liên hệ.
          </li>
          <li>
            <span className="hero-list-marker" aria-hidden="true" />
            Hero co về một cột trên mobile để giữ nội dung dễ đọc.
          </li>
          <li>
            <span className="hero-list-marker" aria-hidden="true" />
            Các khối mới dùng lại palette slate và indigo sẵn có của project.
          </li>
        </ul>
      </aside>
    </section>
  );
}
