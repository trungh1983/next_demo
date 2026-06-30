import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }) {
  const currentYear = new Date().getFullYear();

  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <div>
              <Link className="nav-link" href="/">
                Home
              </Link>
              <Link className="nav-link" href="/dashboard">
                Dashboard
              </Link>
            </div>
            <div>
              <Link className="nav-link" href="/lien-he">
                Liên hệ
              </Link>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <div className="footer-content">
            <div className="footer-section">
              <h2 className="footer-heading">Next Demo</h2>
              <p className="footer-copy">A simple website built with Next.js.</p>
            </div>
            <address className="footer-section footer-copy not-italic">
              <h2 className="footer-heading">Liên hệ</h2>
              <a className="footer-link" href="mailto:hello@example.com">
                hello@example.com
              </a>
              <Link className="footer-link" href="/lien-he">
                Liên hệ
              </Link>
            </address>
            <p className="footer-copy footer-section">
              Copyright {currentYear} Next Demo. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
