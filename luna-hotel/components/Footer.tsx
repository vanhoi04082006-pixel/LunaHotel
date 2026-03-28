<<<<<<< HEAD
export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 p-6 text-center mt-auto">
      <p>&copy; 2026 Luna Hotel & Resort. All rights reserved.</p>
    </footer>
  );
}
=======
const Footer = () => {
  return (
    <footer className="p-4 bg-slate-800 text-slate-300 text-center text-sm mt-auto">
      <p>&copy; {new Date().getFullYear()} Luna Hotel. Tất cả các quyền được bảo lưu.</p>
    </footer>
  );
};

export default Footer;
>>>>>>> 228b48194a9ba76fb5aa80617ef4ea1894f53bcc
