import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Luna Hotel</h1>
        <div className="flex gap-6 font-medium">
          <Link href="/" className="hover:text-blue-200 transition-colors">Trang chủ</Link>
          <Link href="/booking" className="hover:text-blue-200 transition-colors">Tra cứu phòng</Link>
          <Link href="/loyalty" className="hover:text-blue-200 transition-colors">Thành viên</Link>
        </div>
      </nav>
    </header>
  );
}