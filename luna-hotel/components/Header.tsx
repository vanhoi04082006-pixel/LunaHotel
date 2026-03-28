<<<<<<< HEAD
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
=======
import Link from "next/link"; // [cite: 41]

const Header = () => { // [cite: 42]
  return ( // [cite: 43]
    <header className="p-4 bg-blue-500 text-white flex gap-4"> // [cite: 44, 45]
      <Link href="/">Home</Link> // [cite: 48]
      <Link href="/about">About</Link> // [cite: 49]
      <Link href="/contact">Contact</Link> // [cite: 50]
    </header> // [cite: 51]
  ); // [cite: 46]
}; // [cite: 47]

export default Header; // [cite: 52]
>>>>>>> 228b48194a9ba76fb5aa80617ef4ea1894f53bcc
