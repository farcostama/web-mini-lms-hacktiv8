export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-grow max-w-4xl p-6 mx-auto text-gray-800">
        <h1 className="mb-6 text-4xl font-bold text-center text-indigo-700">Kebijakan Privasi</h1>

        <ol className="space-y-3 text-gray-700 list-decimal list-inside">
          <li>
            <strong>Pengumpulan Data:</strong> Kami mengumpulkan data pribadi seperti nama, email, dan aktivitas belajar untuk meningkatkan layanan.
          </li>
          <li>
            <strong>Penggunaan Data:</strong> Data yang dikumpulkan digunakan hanya untuk keperluan internal platform dan tidak akan dibagikan ke pihak ketiga tanpa izin.
          </li>
          <li>
            <strong>Keamanan Data:</strong> LogikaIn menerapkan langkah-langkah keamanan untuk melindungi data pengguna dari akses tidak sah.
          </li>
          <li>
            <strong>Cookie dan Teknologi Serupa:</strong> Kami menggunakan cookie untuk meningkatkan pengalaman pengguna dan analisis penggunaan situs.
          </li>
          <li>
            <strong>Hak Pengguna:</strong> Pengguna berhak mengakses, memperbaiki, atau menghapus data pribadinya sesuai peraturan yang berlaku.
          </li>
        </ol>
      </main>

      <footer className="py-8 text-center text-gray-300 bg-gray-900">&copy; 2025 LogikaIn. Semua hak cipta dilindungi.</footer>
    </div>
  );
}
