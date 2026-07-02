import Link from "next/link";

const highlights = [
  "Nội dung demo trung tính, không gắn với một doanh nghiệp cụ thể.",
  "Bố cục giữ cùng màu sắc và nhịp trình bày với các trang hiện có.",
  "Điều hướng đơn giản với liên kết quay về trang chủ ngay trong màn hình.",
];

export default function AboutPage() {
  return (
    <section aria-labelledby="about-title" className="hero">
      <div className="hero-copy">
        <p className="hero-kicker">Giới thiệu</p>
        <h1 className="hero-title" id="about-title">
          Một trang giới thiệu ngắn gọn cho bản demo này.
        </h1>
        <p className="hero-summary">
          Trang này trình bày ngắn gọn mục đích của workspace hiện tại: giữ cấu
          trúc rõ ràng, giao diện nhất quán và đủ linh hoạt để mở rộng thêm các
          route mới khi cần.
        </p>

        <div className="hero-actions">
          <Link className="hero-secondary" href="/">
            Quay về trang chủ
          </Link>
        </div>
      </div>

      <aside aria-labelledby="about-highlights-title" className="hero-card">
        <p className="hero-card-kicker">Điểm nổi bật</p>
        <h2 className="hero-card-title" id="about-highlights-title">
          Ba ý chính trên trang giới thiệu
        </h2>
        <p className="hero-card-copy">
          Nội dung được giữ ngắn, dễ đọc và bám đúng phong cách chung của
          project demo.
        </p>

        <ul className="hero-list">
          {highlights.map((highlight) => (
            <li key={highlight}>
              <span className="hero-list-marker" aria-hidden="true" />
              {highlight}
            </li>
          ))}
        </ul>
      </aside>
    </section>
  );
}
