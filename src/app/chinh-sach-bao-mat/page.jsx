import Link from "next/link";

const privacySections = [
  {
    title: "Thông tin có thể được thu thập",
    description:
      "Chúng tôi có thể ghi nhận thông tin bạn chủ động cung cấp qua biểu mẫu, cùng dữ liệu sử dụng cơ bản như trang đã xem hoặc thời điểm truy cập để hỗ trợ vận hành website.",
  },
  {
    title: "Mục đích sử dụng thông tin",
    description:
      "Thông tin được dùng để phản hồi liên hệ, cải thiện trải nghiệm truy cập, theo dõi hiệu suất nội dung và duy trì sự ổn định cho các tính năng đang có trên website.",
  },
  {
    title: "Bảo vệ thông tin",
    description:
      "Chúng tôi áp dụng các biện pháp quản lý truy cập, theo dõi hệ thống và quy trình vận hành nội bộ phù hợp để giảm rủi ro lộ lọt hoặc sử dụng sai mục đích dữ liệu.",
  },
  {
    title: "Quyền của người dùng",
    description:
      "Bạn có quyền yêu cầu xem lại, cập nhật hoặc xóa thông tin đã cung cấp và có thể liên hệ với chúng tôi bất cứ lúc nào nếu cần làm rõ cách dữ liệu được xử lý.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <section aria-labelledby="privacy-title" className="hero">
      <div className="hero-copy">
        <p className="hero-kicker">Quyền riêng tư</p>
        <h1 className="hero-title" id="privacy-title">
          Chính sách bảo mật
        </h1>
        <p className="hero-summary">
          Chúng tôi tôn trọng quyền riêng tư của người dùng và cam kết chỉ thu
          thập, sử dụng thông tin ở mức cần thiết để website hoạt động rõ ràng,
          an toàn và dễ hỗ trợ hơn.
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
            Nội dung được viết ngắn gọn để người xem nắm nhanh các nguyên tắc
            xử lý dữ liệu chính ngay trên một màn hình.
          </p>
          <p className="rounded-2xl border border-slate-200 bg-white/80 px-4 py-3">
            Bố cục tiếp tục dùng hệ class sẵn có của project để đồng nhất với
            các trang giới thiệu, FAQ và dịch vụ.
          </p>
        </div>
      </div>

      <aside aria-labelledby="privacy-sections-title" className="hero-card">
        <p className="hero-card-kicker">Cam kết chính</p>
        <h2 className="hero-card-title" id="privacy-sections-title">
          4 nội dung cần biết về cách chúng tôi xử lý thông tin
        </h2>
        <p className="hero-card-copy">
          Mỗi mục bên dưới tập trung vào một phần quan trọng của chính sách để
          bạn dễ đọc, dễ đối chiếu và biết khi nào nên liên hệ thêm.
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {privacySections.map((section) => (
            <article
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
              key={section.title}
            >
              <h3 className="text-base font-semibold text-white">{section.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                {section.description}
              </p>
            </article>
          ))}
        </div>
      </aside>
    </section>
  );
}
