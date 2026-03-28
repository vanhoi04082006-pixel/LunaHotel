import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// 1. Import Header và Footer vào đây
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luna Hotel",
  description: "Hệ thống quản lý khách sạn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      {/* Thêm class flex flex-col min-h-screen để Footer luôn nằm ở đáy màn hình */}
      <body className={`${inter.className} flex flex-col min-h-screen bg-slate-50`}>
        
        {/* 2. Đặt Header ở trên cùng */}
        <Header />

        {/* 3. Phần thân trang web (các trang con sẽ tự động chui vào đây) */}
        <main className="flex-grow">
          {children}
        </main>

        {/* 4. Đặt Footer ở dưới cùng */}
        <Footer />

      </body>
    </html>
  );
}