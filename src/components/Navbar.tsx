import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/react.svg";

export default function Navbar() {
  const [programDropdownOpen, setProgramDropdownOpen] = useState(false);
  const [komunitasDropdownOpen, setKomunitasDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const programTimeout = useRef<number | undefined>(undefined);
  const komunitasTimeout = useRef<number | undefined>(undefined);

  return (
    <nav className="sticky top-0 z-50 bg-indigo-900 shadow">
      <div className="relative flex items-center justify-between px-6 py-4 mx-auto max-w-7xl">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="Logo" className="w-8 h-8" />
            <span className="text-xl font-bold cursor-pointer">
              <span style={{ color: "#e30613" }}>Logika</span>
              <span style={{ color: "white" }}>In</span>
            </span>
          </Link>
        </div>

        {/* Hamburger Mobile */}
        <button className="text-white md:hidden focus:outline-none" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>

        {/* Menu Desktop */}
        <ul className="hidden space-x-8 font-semibold text-white md:flex">
          <li>
            <Link to="/#beranda" className="hover:text-indigo-600">
              Beranda
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-indigo-600">
              Tentang Kami
            </Link>
          </li>

          {/* Dropdown Program */}
          <li
            className="relative"
            onMouseEnter={() => {
              if (programTimeout.current) clearTimeout(programTimeout.current);
              setProgramDropdownOpen(true);
            }}
            onMouseLeave={() => {
              programTimeout.current = window.setTimeout(() => setProgramDropdownOpen(false), 80);
            }}
          >
            <button className="flex items-center hover:text-indigo-600 focus:outline-none">
              Program
              <svg className="w-4 h-4 ml-1 fill-current" viewBox="0 0 20 20">
                <path d="M5.516 7.548L10 12.03l4.484-4.482 1.032 1.03-5.516 5.516-5.516-5.516z" />
              </svg>
            </button>

            {programDropdownOpen && (
              <div className="fixed top-[56px] left-0 right-0 bg-white shadow-lg p-8 z-50 transition-all duration-300">
                <div className="grid grid-cols-1 gap-8 px-6 mx-auto max-w-7xl md:grid-cols-3">
                  <div>
                    <Link to="/daftar" className="block font-semibold text-indigo-700 hover:underline">
                      Materi Bacaan
                    </Link>
                    <p className="mt-1 text-sm text-gray-600">Materi yang membantu meningkatkan kemampuan membaca secara efektif dan cepat.</p>
                  </div>
                  <div>
                    <Link to="/daftar" className="block font-semibold text-indigo-700 hover:underline">
                      Materi Penalaran
                    </Link>
                    <p className="mt-1 text-sm text-gray-600">Latihan untuk mengasah kemampuan berpikir logis dan analitis.</p>
                  </div>
                  <div>
                    <Link to="/daftar" className="block font-semibold text-indigo-700 hover:underline">
                      Materi Kognitif
                    </Link>
                    <p className="mt-1 text-sm text-gray-600">Materi untuk meningkatkan daya ingat, konsentrasi, dan kemampuan kognitif lainnya.</p>
                  </div>
                </div>
              </div>
            )}
          </li>

          {/* Dropdown Komunitas */}
          <li
            className="relative"
            onMouseEnter={() => {
              if (komunitasTimeout.current) clearTimeout(komunitasTimeout.current);
              setKomunitasDropdownOpen(true);
            }}
            onMouseLeave={() => {
              komunitasTimeout.current = window.setTimeout(() => setKomunitasDropdownOpen(false), 80);
            }}
          >
            <button className="flex items-center hover:text-indigo-600 focus:outline-none">
              Komunitas
              <svg className="w-4 h-4 ml-1 fill-current" viewBox="0 0 20 20">
                <path d="M5.516 7.548L10 12.03l4.484-4.482 1.032 1.03-5.516 5.516-5.516-5.516z" />
              </svg>
            </button>

            {komunitasDropdownOpen && (
              <div className="fixed top-[56px] left-0 right-0 bg-white shadow-lg text-gray-800 p-8 z-50 transition-all duration-300">
                <div className="grid grid-cols-1 gap-8 px-6 mx-auto max-w-7xl md:grid-cols-2">
                  <div>
                    <a href="https://discord.gg/example" target="_blank" rel="noopener noreferrer" className="block mb-2 font-semibold text-indigo-700 hover:underline">
                      LogikaIn Discord Community
                    </a>
                    <p className="text-sm">Bergabunglah dengan komunitas pembelajar LogikaIn yang aktif dan saling mendukung...</p>
                  </div>
                  <div>
                    <Link to="/blog" className="block mb-2 font-semibold text-indigo-700 hover:underline">
                      Blog
                    </Link>
                    <p className="text-sm">Temukan artikel dan tips terbaru untuk membantu kamu belajar lebih efektif...</p>
                  </div>
                </div>
              </div>
            )}
          </li>

          <li>
            <Link to="/contact" className="hover:text-indigo-600">
              Kontak
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="px-6 py-4 text-white bg-indigo-900 md:hidden">
          <Link to="/#beranda" className="block py-3 border-b border-indigo-700 rounded hover:bg-indigo-800">
            Beranda
          </Link>
          <Link to="/about" className="block py-3 border-b border-indigo-700 rounded hover:bg-indigo-800">
            Tentang Kami
          </Link>

          {/* Dropdown Program Mobile */}
          <div className="border-b border-indigo-700">
            <button onClick={() => setProgramDropdownOpen(!programDropdownOpen)} className="flex items-center justify-between w-full px-3 py-3 rounded hover:bg-indigo-800 focus:outline-none">
              Program
              <svg className={`w-5 h-5 transform transition-transform duration-200 ${programDropdownOpen ? "rotate-180" : "rotate-0"}`} fill="currentColor" viewBox="0 0 20 20">
                <path d="M5.23 7.21a.75.75 0 011.06-.02L10 10.67l3.71-3.48a.75.75 0 111.04 1.08l-4.25 4a.75.75 0 01-1.04 0l-4.25-4a.75.75 0 01-.02-1.06z" />
              </svg>
            </button>
            {programDropdownOpen && (
              <div className="flex flex-col pl-6 bg-indigo-800">
                <Link to="/daftar" className="py-2 rounded hover:bg-indigo-700">
                  Materi Bacaan
                </Link>
                <Link to="/daftar" className="py-2 rounded hover:bg-indigo-700">
                  Materi Penalaran
                </Link>
                <Link to="/daftar" className="py-2 rounded hover:bg-indigo-700">
                  Materi Kognitif
                </Link>
              </div>
            )}
          </div>

          {/* Dropdown Komunitas Mobile */}
          <div className="border-b border-indigo-700">
            <button onClick={() => setKomunitasDropdownOpen(!komunitasDropdownOpen)} className="flex items-center justify-between w-full px-3 py-3 rounded hover:bg-indigo-800 focus:outline-none">
              Komunitas
              <svg className={`w-5 h-5 transform transition-transform duration-200 ${komunitasDropdownOpen ? "rotate-180" : "rotate-0"}`} fill="currentColor" viewBox="0 0 20 20">
                <path d="M5.23 7.21a.75.75 0 011.06-.02L10 10.67l3.71-3.48a.75.75 0 111.04 1.08l-4.25 4a.75.75 0 01-1.04 0l-4.25-4a.75.75 0 01-.02-1.06z" />
              </svg>
            </button>
            {komunitasDropdownOpen && (
              <div className="flex flex-col pl-6 bg-indigo-800">
                <a href="https://discord.gg/example" target="_blank" rel="noopener noreferrer" className="py-2 rounded hover:bg-indigo-700">
                  Discord
                </a>
                <Link to="/blog" className="py-2 rounded hover:bg-indigo-700">
                  Blog
                </Link>
              </div>
            )}
          </div>

          <Link to="/contact" className="block py-3 rounded hover:bg-indigo-800">
            Kontak
          </Link>
        </div>
      )}
    </nav>
  );
}
