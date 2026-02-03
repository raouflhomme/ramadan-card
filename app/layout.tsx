import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// استخدام خط Inter القياسي (موجود في كل النسخ)
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "بطاقة تهنئة رمضان",
  description: "أنشئ بطاقتك الخاصة وشاركها",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
