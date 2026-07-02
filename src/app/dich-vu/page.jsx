import Link from "next/link";

const services = [
  {
    title: "Thiết kế website",
    description:
      "Xây dựng giao diện rõ ràng, phù hợp thương hiệu và tối ưu trải nghiệm trên cả desktop lẫn mobile.",
  },
  {
    title: "Phát triển ứng dụng",
    description:
      "Triển khai các tính năng web app linh hoạt, dễ mở rộng và bám sát nhu cầu vận hành thực tế.",
  },
  {
    title: "Tư vấn giải pháp số",
    description:
      "Đồng hành cùng đội ngũ để chọn kiến trúc, quy trình và công cụ phù hợp cho từng giai đoạn phát triển.",
  },
  {
    title: "Bảo trì và hỗ trợ kỹ thuật",
    description:
      "Theo dõi, cập nhật và xử lý vấn đề phát sinh để hệ thống vận hành ổn định sau khi bàn giao.",
  },
];

export default function ServicesPage() {
  return (
    <section aria-labelledby="services-title" className="hero">
      <div className="hero-copy">
        <p className="hero-kicker">Dịch vụ</p>
        <h1 className="hero-title" id="services-title">
          Dịch vụ của chúng tôi
        </h1>
        <p className="hero-summary">
          Chúng tôi cung cấp các dịch vụ số từ khâu lên ý tưởng, triển khai sản
          phẩm đến hỗ trợ vận hành để website và ứng dụng của bạn luôn rõ ràng,
          nhất quán và sẵn sàng mở rộng.
        </p>

        <div className="hero-actions">
          <Link className="btn-primary" href="/lien-he">
            Liên hệ với chúng tôi
          </Link>
          <Link className="hero-secondary" href="/">
            Về trang chủ
          </Link>
        </div>

        <div className="grid gap-3 text-sm leading-6 text-slate-600 sm:grid-cols-2">
          <p className="rounded-2xl border border-slate-200 bg-white/80 px-4 py-3">
            Bốn nhóm dịch vụ được trình bày thành card riêng để người xem quét
            nội dung nhanh và dễ so sánh.
          </p>
          <p className="rounded-2xl border border-slate-200 bg-white/80 px-4 py-3">
            Bố cục giữ cùng ngôn ngữ thiết kế với các trang hiện có để toàn bộ
            website demo trông nhất quán hơn.
          </p>
        </div>
      </div>

      <aside aria-labelledby="services-list-title" className="hero-card">
        <p className="hero-card-kicker">Danh mục dịch vụ</p>
        <h2 className="hero-card-title" id="services-list-title">
          4 lựa chọn cho nhu cầu triển khai và vận hành
        </h2>
        <p className="hero-card-copy">
          Mỗi dịch vụ tập trung vào một giai đoạn quan trọng để bạn có thể bắt
          đầu từ nhu cầu nhỏ rồi mở rộng dần theo lộ trình phù hợp.
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {services.map((service) => (
            <article
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
              key={service.title}
            >
              <h3 className="text-base font-semibold text-white">{service.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </aside>
    </section>
  );
}
