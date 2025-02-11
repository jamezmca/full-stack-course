import "./globals.css";
import './fanta.css'
import Head from "./Head";
import Link from "next/link";
import GoTo from "@/components/GoTo";
import { AuthProvider } from "@/context/AuthContext";

export const metadata = {
  title: "Expenny · The Subscription Tracker",
  description: "Track all your subscription analytics!",
};

export default function RootLayout({ children }) {
  const header = (
    <header>
      <div>
        <Link href={'/'}>
          <h1 className="text-gradient">Expenny</h1>
        </Link>
        <p>The Subscription Tracker</p>
      </div>
      <GoTo />
    </header>
  )

  const footer = (
    <footer>
      <div className="hard-line" />
      <div className="footer-content">
        <div>
          <div>
            <h4>Expenny</h4>
            <p>|</p>
            <button disabled>Install app</button>
          </div>
          <p className="copyright">© Copyright 2024-2025, James McArthur.<br />All rights reserved.</p>
        </div>
        <div>
          <p>Facing issues? <a>Get help</a></p>
          <p>Suggestions for improvement? <a>Share feedback</a></p>
          <div>
            <Link href={'/privacy'}>Privacy Policy</Link>
            <Link href={'/tos'}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )

  return (
    <html lang="en">
      <Head />
      <AuthProvider>
        <body >
          {header}
          <div className="full-line" />
          <main>
            {children}
          </main>
          {footer}
        </body>
      </AuthProvider>
    </html>
  );
}
