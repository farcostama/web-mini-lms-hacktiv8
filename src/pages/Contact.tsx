export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-grow max-w-4xl mx-auto p-6 text-gray-800">
        <h1 className="text-4xl font-bold mb-6 text-indigo-700">Kontak Kami</h1>
        <p className="mb-4">Kontak ini dapat digunakan untuk diskusi mengenai kerja sama bisnis bersama LogikaIn...</p>
        <p className="mb-4">Operasional LogikaIn melayani pada hari Senin s/d Jumat mulai pukul 09.00 WIB s/d 16.00 WIB.</p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-indigo-700">Kontak Melalui WhatsApp</h2>
        <p className="mb-6">Klik tombol di bawah untuk menghubungi kami langsung via WhatsApp.</p>
        <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded shadow transition">
          Hubungi via WhatsApp
        </a>
      </main>

      <footer className="bg-gray-900 text-gray-300 py-8 text-center">&copy; 2025 LogikaIn. All rights reserved.</footer>
    </div>
  );
}
