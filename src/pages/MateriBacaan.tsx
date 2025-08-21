import { useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  answer: string;
}

interface Answers {
  [key: number]: string;
}

const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Jika Anda ingin mencari nomor telepon di direktori, teknik membaca apa yang paling efektif?",
    options: ["Skimming", "Scanning", "Deep Reading", "Reading Aloud"],
    answer: "Scanning",
  },
  {
    id: 2,
    question: "Tujuan utama dari teknik skimming adalah...",
    options: ["Menghafal seluruh isi teks", "Menemukan kata kunci tertentu", "Mendapatkan ide utama teks dengan cepat", "Menganalisis argumen secara mendalam"],
    answer: "Mendapatkan ide utama teks dengan cepat",
  },
  {
    id: 3,
    question: "Manakah langkah pertama dalam teknik SQ3R?",
    options: ["Recite", "Read", "Survey", "Review"],
    answer: "Survey",
  },
  {
    id: 4,
    question: "Apa yang sebaiknya Anda perhatikan saat melakukan skimming?",
    options: ["Setiap kata di setiap baris", "Kata-kata yang dicetak tebal dan judul", "Kata-kata sulit dan definisinya", "Semuanya benar"],
    answer: "Kata-kata yang dicetak tebal dan judul",
  },
  {
    id: 5,
    question: "Teknik yang paling cocok untuk membaca buku pelajaran yang berisi materi kompleks adalah...",
    options: ["Scanning", "Skimming", "Deep Reading", "Speed Reading"],
    answer: "Deep Reading",
  },
  {
    id: 6,
    question: "Mengapa membaca paragraf pertama dan terakhir penting saat skimming?",
    options: ["Karena mereka selalu berisi semua detail penting", "Karena mereka memberikan gambaran umum dan ringkasan", "Karena itu satu-satunya bagian yang perlu dibaca", "Karena itu adalah cara tercepat untuk mengakhiri bacaan"],
    answer: "Karena mereka memberikan gambaran umum dan ringkasan",
  },
  {
    id: 7,
    question: "Mencari nama dalam daftar kontak adalah contoh dari teknik...",
    options: ["Scanning", "Skimming", "Reciting", "Annotating"],
    answer: "Scanning",
  },
  {
    id: 8,
    question: "Langkah 'Recite' dalam SQ3R bertujuan untuk...",
    options: ["Mengucapkan kata-kata keras-keras", "Mengulang ide utama dengan kata-kata sendiri", "Menghafal seluruh teks", "Membaca dengan cepat"],
    answer: "Mengulang ide utama dengan kata-kata sendiri",
  },
  {
    id: 9,
    question: "Jika Anda membaca ulasan film untuk memutuskan apakah akan menontonnya, teknik apa yang Anda gunakan?",
    options: ["Scanning", "Skimming", "Deep Reading", "Memorizing"],
    answer: "Skimming",
  },
  {
    id: 10,
    question: "Berinteraksi dengan teks dengan membuat catatan adalah bagian dari...",
    options: ["Skimming", "Scanning", "Deep Reading", "Semua di atas"],
    answer: "Deep Reading",
  },
];

export default function MateriBacaan() {
  const [showQuiz, setShowQuiz] = useState<boolean>(false);
  const [quizScore, setQuizScore] = useState<number | null>(null);
  const [answers, setAnswers] = useState<Answers>({});
  const [filter, setFilter] = useState<string>("");

  const handleInputChange = (questionId: number, option: string) => {
    setAnswers({
      ...answers,
      [questionId]: option,
    });
  };

  const handleSubmitQuiz = (e: FormEvent) => {
    e.preventDefault();
    let score = 0;
    quizQuestions.forEach((q) => {
      if (answers[q.id] === q.answer) {
        score += 1;
      }
    });
    setQuizScore(score);
  };

  const filteredQuestions = quizQuestions.filter((q) => q.question.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="container mx-auto">
        <h1 className="mb-4 text-3xl font-bold text-indigo-600">Materi Bacaan</h1>
        <p className="mb-8 text-lg text-gray-700">
          Materi ini dirancang untuk meningkatkan kecepatan dan pemahaman membaca Anda secara signifikan. Kita akan berfokus pada teknik-teknik yang akan mengubah cara Anda berinteraksi dengan teks, dari sekadar melihat kata-kata menjadi
          benar-benar menyerap informasi.
        </p>

        <div className="p-6 mb-8 bg-white rounded-lg shadow-md">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">1. Skimming: Mendapatkan Gambaran Besar</h2>
          <p className="mb-4 text-gray-600">
            Skimming adalah teknik membaca cepat yang bertujuan untuk mendapatkan gambaran umum atau ide pokok dari suatu teks. Ini sangat berguna ketika Anda perlu memutuskan apakah suatu artikel atau buku relevan untuk dibaca lebih dalam.
            Caranya sederhana: Baca judul, subjudul, dan heading. Baca paragraf pertama dan terakhir dari teks. Baca kalimat pertama dari setiap paragraf, karena sering kali mengandung ide utama. Perhatikan kata-kata yang dicetak tebal atau
            miring, serta poin-poin dalam daftar (bullet points).
          </p>
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">2. Scanning: Mencari Informasi Spesifik</h2>
          <p className="mb-4 text-gray-600">
            Scanning adalah teknik membaca super cepat yang digunakan untuk menemukan informasi spesifik, seperti nama, tanggal, atau angka. Anda tidak membaca setiap kata, melainkan memindai teks seolah-olah Anda adalah pemindai (scanner).
            Tentukan kata kunci atau frasa yang Anda cari. Gerakkan mata Anda dengan cepat di sepanjang halaman, dari atas ke bawah atau zigzag. Ketika mata Anda menemukan kata kunci, berhenti dan baca kalimat di sekitarnya untuk
            mendapatkan konteks.
          </p>
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">3. Deep Reading: Memahami Secara Mendalam</h2>
          <p className="mb-4 text-gray-600">
            Deep Reading (Membaca Mendalam) adalah proses yang lebih lambat dan disengaja. Teknik ini digunakan ketika Anda perlu memahami argumen yang kompleks, menganalisis detail, atau menghargai nilai literatur. Gunakan teknik SQ3R
            (Survey, Question, Read, Recite, Review). * Survey (Survei): Tinjau teks untuk mendapatkan gambaran umum. * Question (Pertanyaan): Ajukan pertanyaan berdasarkan judul dan subjudul. * Read (Baca): Baca seluruh teks secara
            perlahan untuk menjawab pertanyaan Anda. * Recite (Ucapkan): Ulangi ide-ide utama dengan kata-kata Anda sendiri. * Review (Tinjau Ulang): Tinjau kembali catatan dan jawaban Anda untuk memperkuat pemahaman. Aktif berinteraksi
            dengan teks: membuat catatan, menggarisbawahi, atau membuat anotasi.
          </p>
        </div>

        <button onClick={() => setShowQuiz(true)} className="px-6 py-3 mb-8 text-lg font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700">
          Mulai Kuis
        </button>

        {showQuiz && (
          <div className="p-8 bg-white rounded-lg shadow-md">
            <h2 className="mb-6 text-2xl font-semibold text-gray-800">Kuis Materi Bacaan</h2>
            <div className="mb-4">
              <input type="text" placeholder="Filter pertanyaan..." className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" value={filter} onChange={(e) => setFilter(e.target.value)} />
            </div>
            <form onSubmit={handleSubmitQuiz}>
              {filteredQuestions.map((q) => (
                <div key={q.id} className="p-4 mb-4 border rounded-lg bg-gray-50">
                  <p className="mb-2 font-semibold text-gray-700">{`${q.id}. ${q.question}`}</p>
                  <div className="flex flex-col space-y-2">
                    {q.options.map((option) => (
                      <label key={option} className="inline-flex items-center">
                        <input type="radio" className="text-indigo-600 form-radio" name={`question-${q.id}`} value={option} checked={answers[q.id] === option} onChange={() => handleInputChange(q.id, option)} />
                        <span className="ml-2">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
              <button type="submit" className="px-6 py-3 mt-4 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700">
                Kirim Jawaban
              </button>
            </form>

            {quizScore !== null && (
              <div className="mt-6 text-center">
                <p className="text-xl font-bold">
                  Skor Anda: {quizScore} dari {quizQuestions.length}
                </p>
              </div>
            )}
          </div>
        )}
        <div className="mt-8">
          <Link to="/dashboard" className="text-indigo-600 hover:underline">
            &larr; Kembali ke Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
