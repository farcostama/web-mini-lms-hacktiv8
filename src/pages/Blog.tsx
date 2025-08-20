// src/pages/Blog.tsx
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-grow max-w-4xl mx-auto p-6 text-gray-800">
        <h1 className="text-4xl font-bold mb-6 text-indigo-700">5 Kebiasaan Sederhana untuk Meningkatkan Produktivitas Belajar</h1>
        <p className="mb-6">
          Belajar efektif bukan hanya soal seberapa lama kamu duduk di depan buku atau layar, tapi bagaimana kamu mengelola waktu dan fokus secara tepat. Berikut beberapa kebiasaan sederhana yang bisa kamu coba untuk meningkatkan
          produktivitas belajar:
        </p>

        <ol className="list-decimal list-inside space-y-4">
          <li>
            <strong>Buat Jadwal Belajar yang Konsisten</strong>
            <br />
            Memiliki rutinitas belajar membantu otak siap menerima materi dan mengurangi rasa malas.
          </li>
          <li>
            <strong>Istirahat Secara Berkala</strong>
            <br />
            Menggunakan teknik Pomodoro atau istirahat singkat bisa menjaga fokus dan energi otak.
          </li>
          <li>
            <strong>Gunakan Lingkungan Belajar yang Nyaman</strong>
            <br />
            Pilih tempat belajar yang tenang, terang, dan minim gangguan untuk mendukung konsentrasi.
          </li>
          <li>
            <strong>Gunakan Metode Belajar Aktif</strong>
            <br />
            Catat poin penting, tanyakan pada diri sendiri, atau ajarkan orang lain untuk memperkuat pemahaman.
          </li>
          <li>
            <strong>Tetapkan Tujuan Belajar Harian</strong>
            <br />
            Target kecil harian membuat kamu tetap termotivasi dan mudah mengevaluasi kemajuan.
          </li>
        </ol>
      </main>

      <footer className="bg-gray-900 text-gray-300 py-8 text-center">&copy; 2025 LogikaIn. All rights reserved.</footer>
    </div>
  );
}
