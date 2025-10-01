import "./globals.css";
import Link from "next/link";
import { List, NotebookText, User, UserPlus } from "lucide-react";

// 공통 스타일 상수
const COMMON_STYLES = {
  linkBase: "flex h-full items-center gap-2 hover:underline",
  logoLink: "flex h-full text-xl font-bold items-center",
};

// 네비게이션 데이터
const NAV_ITEMS = [
  { href: "/list", icon: List, label: "내 글" },
  { href: "/post", icon: NotebookText, label: "글 작성" },
];

const USER_ITEMS = [
  { href: "/login", icon: User, label: "로그인" },
  { href: "/join", icon: UserPlus, label: "회원가입" },
];

const Header = () => {
  return (
    <header className="top-bar bg-white border-b border-gray-200">
      <div className="inner h-20 mx-4 flex justify-between">
        <div className="logo-box">
          <Link href="/" className={COMMON_STYLES.logoLink}>
            BLOGFY
          </Link>
        </div>
        <div className="nav-box">
          <ul className="flex h-full items-center gap-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={COMMON_STYLES.linkBase}>
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="user-box">
          <ul className="flex h-full items-center gap-4">
            {USER_ITEMS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={COMMON_STYLES.linkBase}>
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="top-bar bg-white border-t border-gray-200">
      <div className="inner h-20 mx-4 flex flex-col items-center justify-center">
        <div className="logo-box">
          <Link href="/" className={COMMON_STYLES.logoLink}>
            BLOGFY
          </Link>
        </div>
        <div className="copyright mt-2">
          <p>© 2025 BLOGFY. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="main-content-wrap flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
