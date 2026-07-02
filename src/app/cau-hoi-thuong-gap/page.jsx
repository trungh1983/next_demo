import Link from "next/link";

const faqs = [
  {
    question: "Website này dùng để làm gì?",
    answer: (
      <>
        Đây là website demo để xem nhanh một app Next.js App Router gọn, rõ và
        sẵn sàng mở rộng thêm route mới khi cần.
      </>
    ),
  },
  {
    question: "Làm sao để xem trang Giới thiệu?",
    answer: (
      <>
        Bạn có thể mở đường dẫn{" "}
        <Link className="footer-link" href="/gioi-thieu">
          /gioi-thieu
        </Link>{" "}
        để xem phần giới thiệu ngắn về mục đích và cấu trúc hiện tại của
        workspace.
      </>
    ),
  },
  {
    question: "Làm sao để liên hệ?",
    answer: (
      <>
        Hãy vào trang{" "}
        <Link className="footer-link" href="/lien-he">
          Liên hệ
        </Link>{" "}
        hoặc dùng email hiển thị ở footer. Đây là dữ liệu demo nên{" "}
        <code className="font-semibold text-slate-100">hello@example.com</code>{" "}
        chỉ là địa chỉ placeholder.
      </>
    ),
  },
  {
    question: "Tôi có thể xem các trang nào?",
    answer: (
      <>
        Hiện tại bạn có thể xem trang chủ, Dashboard,{" "}
        <Link className="footer-link" href="/gioi-thieu">
          Giới thiệu
        </Link>
        ,{" "}
        <Link className="footer-link" href="/lien-he">
          Liên hệ
        </Link>{" "}
        và chính trang FAQ này. Nếu nhập sai đường dẫn, app sẽ hiển thị trang
        404 tùy biến.
      </>
    ),
  },
  {
    question: "Website có hỗ trợ điện thoại không?",
    answer: (
      <>
        Có. Các khối nội dung đang dùng layout responsive nên sẽ co về một cột
        trên màn hình nhỏ để giữ câu hỏi và câu trả lời dễ đọc hơn.
      </>
    ),
  },
  {
    question: "Khi không tìm thấy trang thì phải làm gì?",
    answer: (
      <>
        Bạn nên quay về{" "}
        <Link className="footer-link" href="/">
          trang chủ
        </Link>{" "}
        hoặc mở{" "}
        <Link className="footer-link" href="/dashboard">
          Dashboard
        </Link>
        . Trang 404 hiện tại cũng có sẵn các liên kết phục hồi để bạn điều
        hướng lại nhanh hơn.
      </>
    ),
  },
];

export default function FaqPage() {
  return (
    <section aria-labelledby="faq-title" className="hero">
      <div className="hero-copy">
        <p className="hero-kicker">FAQ</p>
        <h1 className="hero-title" id="faq-title">
          Câu hỏi thường gặp
        </h1>
        <p className="hero-summary">
          Trang này tổng hợp nhanh những câu hỏi phổ biến nhất về website demo,
          giúp bạn nắm cách điều hướng, xem các route có sẵn và xử lý các tình
          huống cơ bản.
        </p>

        <div className="hero-actions">
          <Link className="btn-primary" href="/">
            Về trang chủ
          </Link>
        </div>

        <div className="grid gap-3 text-sm leading-6 text-slate-600 sm:grid-cols-2">
          <p className="rounded-2xl border border-slate-200 bg-white/80 px-4 py-3">
            Dùng native <code className="font-semibold text-slate-900">details</code>{" "}
            và{" "}
            <code className="font-semibold text-slate-900">summary</code> để mở
            và đóng từng câu trả lời.
          </p>
          <p className="rounded-2xl border border-slate-200 bg-white/80 px-4 py-3">
            Nội dung bám theo các route demo đã có sẵn để người xem không phải
            đoán cách dùng website.
          </p>
        </div>
      </div>

      <aside aria-labelledby="faq-list-title" className="hero-card">
        <p className="hero-card-kicker">Giải đáp nhanh</p>
        <h2 className="hero-card-title" id="faq-list-title">
          6 câu hỏi có thể mở trực tiếp trên trang
        </h2>
        <p className="hero-card-copy">
          Chọn từng mục bên dưới để xem câu trả lời mà không cần rời khỏi màn
          hình FAQ.
        </p>

        <div className="mt-6 space-y-3">
          {faqs.map((item) => (
            <details
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
              key={item.question}
            >
              <summary className="cursor-pointer text-left text-base font-semibold text-white marker:text-indigo-300">
                {item.question}
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-300">{item.answer}</p>
            </details>
          ))}
        </div>
      </aside>
    </section>
  );
}
