import type { Metadata } from "next";
import "./globals.css";
 
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
      <body
        className={"antialiased"}
      >
        {children}
      </body>
    </html>
  );
}
