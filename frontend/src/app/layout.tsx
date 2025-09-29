import "./globals.css";

const Header = () => {
  return <header>Header</header>;
};

const Footer = () => {
  return <footer>Footer</footer>;
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
