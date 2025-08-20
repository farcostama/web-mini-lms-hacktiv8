// src/pages/About.tsx
import React from "react";
import Navbar from "../components/Navbar";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Main content */}
      <main className="flex-grow max-w-4xl mx-auto p-6 text-gray-800">
        <h1 className="text-4xl font-bold mb-6 text-indigo-700">Tentang Kami</h1>
        <p className="mb-4">LogikaIn adalah platform edukasi interaktif yang membantu meningkatkan kemampuan bacaan, kognitif, dan nalar dengan materi lengkap dan Quiz yang menyenangkan dan efektif.</p>
        <p className="mb-4">Kami berkomitmen menyediakan konten edukasi berkualitas untuk semua kalangan usia.</p>
        {/* Tambahkan konten tentang kami lainnya di sini */}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 text-center mt-auto">&copy; 2025 LogikaIn. All rights reserved.</footer>
    </div>
  );
}
