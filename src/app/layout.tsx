import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/main.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className="dark-mode"> 
      <header className="header">
        <nav className="nav">
          <a href="#" className="nav__item">Home</a>
          <a href="#" className="nav__item">About</a>
          <a href="#" className="nav__item">Contact</a>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="footer">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </footer>
    </body>
  </html>
  );
}
