import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Alfred Gauthier",
  description: "Some of my favorite pictures",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
