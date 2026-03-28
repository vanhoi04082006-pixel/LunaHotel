import type { Metadata } from "next";
import "./globals.css";
// Nhúng Header và Footer vào đây
import Header from "@/components/Header"; 
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Luna Hotel",
  description: "Hệ thống quản lý khách sạn Luna Hotel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      {/* Thêm flex flex-col min-h-screen để Footer luôn nằm ở đáy trang */}
      <body className="flex flex-col min-h-screen bg-slate-50 text-slate-900">
        <Header />
        
        {/* Phần children này chính là nội dung thay đổi của từng trang (Trang chủ, Tra cứu, Thành viên...) */}
        <main className="flex-grow">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}