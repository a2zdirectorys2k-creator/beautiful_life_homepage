import "./globals.css";

export const metadata = {
  title: "Beautiful Life",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
