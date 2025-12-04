import "./globals.css";

export const metadata = {
  title: "Beautiful Life",
  description: "A2Z Group | Learn, Earn & Grow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-gray-800">
        {children}
      </body>
    </html>
  );
}
