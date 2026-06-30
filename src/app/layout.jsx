import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import FooterYear from "./footer-year";

export default function RootLayout({ children }) {
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
            <div className="footer-section">
              <h2 className="footer-heading">Liên hệ</h2>
              <Link className="footer-link" href="/lien-he">
                Liên hệ
              </Link>
              <address className="footer-copy not-italic">
                <a className="footer-link" href="mailto:hello@example.com">
                  hello@example.com
                </a>
              </address>
            </div>
            <p className="footer-copy footer-section">
              Copyright <FooterYear /> Next Demo. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
