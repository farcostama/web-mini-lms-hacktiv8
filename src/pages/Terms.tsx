export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-grow max-w-4xl p-6 mx-auto text-gray-800">
        <h1 className="mb-6 text-4xl font-bold text-center text-indigo-700">Syarat dan Ketentuan</h1>

        <ol className="space-y-3 text-gray-700 list-decimal list-inside">
          <li>
            <strong>Penggunaan Layanan:</strong> Dengan menggunakan platform LogikaIn, Anda setuju untuk mematuhi semua aturan dan ketentuan yang berlaku.
          </li>
          <li>
            <strong>Konten Materi:</strong> Semua materi pembelajaran disediakan untuk tujuan edukasi. Kami tidak bertanggung jawab atas hasil belajar individu.
          </li>
          <li>
            <strong>Akses dan Akun:</strong> Pengguna bertanggung jawab menjaga kerahasiaan akun dan informasi pribadinya.
          </li>
          <li>
            <strong>Perubahan Layanan:</strong> LogikaIn berhak mengubah atau menghentikan layanan kapan saja tanpa pemberitahuan sebelumnya.
          </li>
          <li>
            <strong>Hak Kekayaan Intelektual:</strong> Seluruh konten di LogikaIn dilindungi hak cipta dan tidak boleh disalin tanpa izin tertulis.
          </li>
        </ol>
      </main>

      <footer className="py-8 text-center text-gray-300 bg-gray-900">&copy; 2025 LogikaIn. Semua hak cipta dilindungi.</footer>
    </div>
  );
}
