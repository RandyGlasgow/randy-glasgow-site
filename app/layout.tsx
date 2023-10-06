import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Randy Glasgow",
  description:
    "Frontend Software Engineer with a passion for building experiences that delight. Here you can find my resume and some of my side projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark custom-bg`}>
        {children}
      </body>
    </html>
  );
}
