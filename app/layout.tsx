import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web-LKG",
  description: "Layanan Kolaborasi global",
  icons: {
    icon: "/antimages/Logo LKG Only 1.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
