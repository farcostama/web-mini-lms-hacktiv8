// src/pages/Landing.tsx
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/react.svg";

export default function Landing() {
  const sliderRef = useRef<HTMLDivElement>(null);

  // Carousel Testimoni otomatis
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const cards = Array.from(slider.children) as HTMLElement[];
    if (cards.length === 0) return;

    const cardStyle = getComputedStyle(cards[0]);
    const cardMarginRight = parseInt(cardStyle.marginRight) || 24;
    const cardWidth = cards[0].offsetWidth + cardMarginRight;
    const totalCards = cards.length;

    // Duplikat kartu untuk efek infinite scroll
    cards.forEach((card) => slider.appendChild(card.cloneNode(true)));

    let scrollPos = 0;
    const speed = 0.5;

    function animate() {
      scrollPos += speed;
      if (scrollPos >= cardWidth * totalCards) scrollPos = 0;
      slider?.style.setProperty("transform", `translateX(-${scrollPos}px)`);
      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero */}
      <section id="beranda" className="flex flex-col items-center justify-center flex-grow px-6 py-24 text-center bg-white">
        <h1 className="max-w-4xl mb-6 text-5xl font-extrabold leading-tight text-indigo-700 md:text-6xl">Tingkatkan Kemampuan Bacaan, Kognitif, dan Nalar Anda dengan LogikaIn</h1>
        <p className="max-w-3xl mb-10 text-lg text-indigo-600">Platform edukasi interaktif dengan materi yang lengkap serta Quiz yang menguji kemampuanmu untuk pengembangan diri yang menyenangkan dan efektif.</p>

        <div className="flex space-x-4">
          {/* TOMBOL DAFTAR (PRIMARY) */}
          <Link to="/daftar" className="px-10 py-4 font-semibold text-white transition duration-300 bg-indigo-600 rounded-lg shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            Daftar Sekarang
          </Link>

          {/* TOMBOL MASUK (SECONDARY) */}
          <Link to="/login" className="px-10 py-4 font-semibold text-indigo-600 transition duration-300 bg-transparent border-2 border-indigo-600 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            Masuk
          </Link>
        </div>
      </section>
      {/* Program Section */}
      <section id="program" className="px-6 py-20 mx-auto max-w-7xl">
        <h2 className="mb-12 text-4xl font-bold text-center text-indigo-700">Program Pembelajaran</h2>
        <div className="grid w-full max-w-4xl grid-cols-1 gap-12 mx-auto text-indigo-700 sm:grid-cols-2">
          {/* Materi Lengkap */}
          <div className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="mb-4 text-red-600 h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 20l8-4V6l-8 4-8-4v10l8 4z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 12l8-4" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 12v8" />
            </svg>
            <h3 className="mb-2 text-xl font-semibold">Materi Lengkap</h3>
            <p className="text-center text-indigo-600">Materi jelas dan mudah dipahami</p>
          </div>

          {/* Quiz Interaktif */}
          <div className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="mb-4 text-red-600 h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z" />
            </svg>
            <h3 className="mb-2 text-xl font-semibold">Quiz Interaktif</h3>
            <p className="text-center text-indigo-600">Uji kemampuan dengan quiz seru</p>
          </div>
        </div>
      </section>

      {/* Materi Unggulan */}
      <section id="materi-unggulan" className="flex flex-col items-center gap-10 px-6 py-20 mx-auto rounded-lg shadow-md max-w-7xl md:flex-row bg-gray-50">
        <div className="flex items-center w-full md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1494059980473-813e73ee784b?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Materi Unggulan"
            className="rounded-lg shadow-lg w-full h-[300px] object-cover"
          />
        </div>
        <div className="w-full text-gray-800 md:w-1/2">
          <h2 className="mb-6 text-4xl font-bold text-indigo-700">Materi Unggulan</h2>
          <p className="mb-4 text-lg leading-relaxed">Temukan materi pembelajaran unggulan yang dirancang khusus untuk meningkatkan kemampuan bacaan, kognitif, dan nalar Anda secara efektif dan efisien.</p>
          <p className="mb-6 text-lg">Setiap materi disusun secara sistematis dengan pendekatan interaktif yang mudah dipahami, lengkap dengan quiz untuk memperkuat pemahaman.</p>
          <div className="flex justify-end md:justify-start">
            <Link to="/daftar" className="inline-block px-6 py-3 font-semibold text-white transition bg-indigo-600 rounded shadow hover:bg-indigo-700">
              Lihat Seluruh Materi
            </Link>
          </div>
        </div>
      </section>

      {/* Testimoni */}
      <section id="testimoni" className="w-full py-20 bg-white">
        <h2 className="px-6 mx-auto mb-10 text-4xl font-bold text-center text-indigo-700 max-w-7xl">Testimoni</h2>
        <div className="relative px-6 mx-auto overflow-hidden max-w-7xl">
          <div ref={sliderRef} className="flex space-x-6 flex-nowrap will-change-transform">
            {[
              { text: '"Platform LogikaIn sangat membantu saya dalam meningkatkan kemampuan berpikir dan membaca dengan cara yang menyenangkan."', name: "- Rina S.", bg: "bg-indigo-50" },
              { text: '"Materi dan quiz yang interaktif membuat saya lebih termotivasi belajar secara rutin."', name: "- Budi K.", bg: "bg-indigo-100" },
              { text: '"Quiz yang ada sangat membantu saya melatih nalar dengan cara yang menyenangkan dan menantang."', name: "- Sari L.", bg: "bg-indigo-50" },
              { text: '"Fitur quiz interaktif membuat pembelajaran lebih efektif dan menyenangkan."', name: "- Andi W.", bg: "bg-indigo-100" },
              { text: '"LogikaIn memberikan pengalaman belajar yang menarik dan mudah dipahami."', name: "- Dina P.", bg: "bg-indigo-50" },
              { text: '"Konten quiz yang menantang membuat saya selalu ingin mencoba lebih banyak."', name: "- Fajar M.", bg: "bg-indigo-100" },
              { text: '"Quiz yang seru membuat belajar jadi tidak membosankan."', name: "- Reni T.", bg: "bg-indigo-50" },
              { text: '"Komunitas LogikaIn sangat membantu saya mendapatkan dukungan selama belajar."', name: "- Dedi S.", bg: "bg-indigo-100" },
            ].map((item, index) => (
              <div key={index} className={`flex-shrink-0 w-full sm:w-1/2 md:w-1/3 ${item.bg} rounded-lg p-8 shadow-lg`}>
                <p className="mb-6 italic text-gray-800">{item.text}</p>
                <h3 className="font-semibold text-indigo-700">{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 text-indigo-700 bg-indigo-100">
        <div className="max-w-5xl px-6 mx-auto">
          <h2 className="mb-12 text-4xl font-bold text-center">Pertanyaan yang Sering Diajukan</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <details className="p-5 bg-white rounded shadow cursor-pointer">
              <summary className="text-lg font-semibold">Apa itu LogikaIn?</summary>
              <p className="mt-3 text-gray-700">LogikaIn adalah platform edukasi interaktif yang membantu meningkatkan kemampuan bacaan, kognitif, dan nalar melalui materi singkat dan quiz interaktif.</p>
            </details>
            <details className="p-5 bg-white rounded shadow cursor-pointer">
              <summary className="text-lg font-semibold">Bagaimana cara memulai belajar?</summary>
              <p className="mt-3 text-gray-700">Klik tombol "Mulai Sekarang" di bagian atas halaman untuk memilih program pembelajaran yang ingin kamu ikuti.</p>
            </details>
            <details className="p-5 bg-white rounded shadow cursor-pointer">
              <summary className="text-lg font-semibold">Apakah ada sertifikat setelah menyelesaikan program?</summary>
              <p className="mt-3 text-gray-700">Saat ini kami fokus pada materi dan quiz, sertifikat akan kami tambahkan di pengembangan selanjutnya.</p>
            </details>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto text-gray-300 bg-gray-900">
        <div className="grid grid-cols-1 gap-12 px-6 py-16 mx-auto max-w-7xl md:grid-cols-4">
          <div>
            <div className="flex items-center mb-4">
              <img src={logo} alt=" Logo" className="w-8 h-8" />
              <span className="text-xl font-bold cursor-pointer">
                <span style={{ color: "#e30613" }}>Logika</span>
                <span style={{ color: "white" }}>In</span>
              </span>
            </div>
            <p className="max-w-xs text-gray-400">LogikaIn adalah platform pembelajaran untuk membantu kamu meningkatkan kemampuan bacaan, kognitif, dan nalar secara efektif.</p>
            <p className="mt-6">Palembang, Indonesia</p>
            <p className="mt-1">+62xxxxxxxxxx</p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">Program</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/daftar" className="block font-semibold text-indigo-700 hover:underline">
                  Learning Modules
                </Link>
              </li>
              <li>
                <Link to="/daftar" className="block font-semibold text-indigo-700 hover:underline">
                  Interactive Quizzes
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">Informasi</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="https://discord.gg/example" className="hover:text-white">
                  Komunitas
                </a>
              </li>
              <li>
                <Link to="/blog" className="block mb-2 font-semibold text-indigo-700 hover:underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/about" className="block mb-2 font-semibold text-indigo-700 hover:underline">
                  Tentang Kami
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/contact" className="block mb-2 font-semibold text-indigo-700 hover:underline">
                  Hubungi Kami
                </Link>
              </li>
              <li>
                <Link to="/terms" className="block mb-2 font-semibold text-indigo-700 hover:underline">
                  Syarat dan Ketentuan
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="block mb-2 font-semibold text-indigo-700 hover:underline">
                  Kebijakan Privasi
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="py-6 text-sm text-center text-gray-500 bg-gray-800">&copy; 2025 LogikaIn. Semua hak cipta dilindungi.</div>
      </footer>
    </div>
  );
}
