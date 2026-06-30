import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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
              <p className="footer-heading">Next Demo</p>
              <p className="footer-copy">A simple website built with Next.js.</p>
            </div>
            <address className="footer-section footer-copy not-italic">
              <p className="footer-heading">Contact</p>
              <a className="footer-link" href="mailto:hello@nextdemo.dev">
                hello@nextdemo.dev
              </a>
              <Link className="footer-link" href="/lien-he">
                Contact page
              </Link>
            </address>
            <p className="footer-copy footer-section">
              Copyright 2026 Next Demo. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
