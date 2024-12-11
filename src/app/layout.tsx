import type { Metadata } from "next";
import "./globals.css";
import Header from "./ui/header/Header";
import { Poppins } from "next/font/google";

export const metadata: Metadata = {
  title: "Bryce Berczik",
  description: "My portfolio for web development.",
};

const poppins = Poppins({
  weight: ["400", "500"]
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-custom-image bg-cover backdrop-blur-lg antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
