import type { Metadata } from "next";
import "./globals.css";
import Header from "./ui/header/Header";

export const metadata: Metadata = {
  title: "Bryce Berczik",
  description: "My portfolio for web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-custom-image bg-cover backdrop-blur-lg antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
