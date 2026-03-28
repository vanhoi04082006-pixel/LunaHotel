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