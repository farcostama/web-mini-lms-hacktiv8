import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/react.svg";

export default function Navbar() {
  const [programDropdownOpen, setProgramDropdownOpen] = useState(false);
  const [komunitasDropdownOpen, setKomunitasDropdownOpen] = useState(false);

  const programButtonRef = useRef<HTMLButtonElement>(null);
  const programDropdownRef = useRef<HTMLDivElement>(null);
  const komunitasButtonRef = useRef<HTMLButtonElement>(null);
  const komunitasDropdownRef = useRef<HTMLDivElement>(null);

  // Ref untuk menyimpan timeout ID agar tidak hilang tiap render
  const programTimeout = useRef<number>();
  const komunitasTimeout = useRef<number>();

  return (
    <nav className="bg-indigo-900 shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative">
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="h-8 w-8" />
          <span className="font-bold text-xl cursor-pointer">
            <span style={{ color: "#e30613" }}>Logika</span>
            <span style={{ color: "white" }}>In</span>
          </span>
        </div>

        <ul className="hidden md:flex space-x-8 font-semibold text-white">
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
            <button ref={programButtonRef} className="hover:text-indigo-600 flex items-center focus:outline-none">
              Program
              <svg className="ml-1 w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M5.516 7.548L10 12.03l4.484-4.482 1.032 1.03-5.516 5.516-5.516-5.516z" />
              </svg>
            </button>

            {programDropdownOpen && (
              <div ref={programDropdownRef} className="fixed top-[56px] left-0 right-0 bg-white shadow-lg p-8 z-50 transition-all duration-300">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <Link to="/daftar" className="block font-semibold text-indigo-700 hover:underline">
                      Materi Bacaan
                    </Link>
                    <p className="text-sm text-gray-600 mt-1">Materi yang membantu meningkatkan kemampuan membaca secara efektif dan cepat.</p>
                  </div>
                  <div>
                    <Link to="/daftar" className="block font-semibold text-indigo-700 hover:underline">
                      Materi Penalaran
                    </Link>
                    <p className="text-sm text-gray-600 mt-1">Latihan untuk mengasah kemampuan berpikir logis dan analitis.</p>
                  </div>
                  <div>
                    <Link to="/daftar" className="block font-semibold text-indigo-700 hover:underline">
                      Materi Kognitif
                    </Link>
                    <p className="text-sm text-gray-600 mt-1">Materi untuk meningkatkan daya ingat, konsentrasi, dan kemampuan kognitif lainnya.</p>
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
            <button ref={komunitasButtonRef} className="hover:text-indigo-600 flex items-center focus:outline-none">
              Komunitas
              <svg className="ml-1 w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M5.516 7.548L10 12.03l4.484-4.482 1.032 1.03-5.516 5.516-5.516-5.516z" />
              </svg>
            </button>

            {komunitasDropdownOpen && (
              <div ref={komunitasDropdownRef} className="fixed top-[56px] left-0 right-0 bg-white shadow-lg text-gray-800 p-8 z-50 transition-all duration-300">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <a href="https://discord.gg/example" target="_blank" rel="noopener noreferrer" className="block font-semibold text-indigo-700 hover:underline mb-2">
                      LogikaIn Discord Community
                    </a>
                    <p className="text-sm">Bergabunglah dengan komunitas pembelajar LogikaIn yang aktif dan saling mendukung...</p>
                  </div>
                  <div>
                    <Link to="/blog" className="block font-semibold text-indigo-700 hover:underline mb-2">
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
    </nav>
  );
}
