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
    question: "Jika semua kucing suka ikan, dan Bella adalah kucing, maka Bella suka ikan. Ini adalah contoh penalaran...",
    options: ["Induktif", "Deduktif", "Kuantitatif", "Verbal"],
    answer: "Deduktif",
  },
  {
    id: 2,
    question: "Penalaran yang bergerak dari contoh-contoh spesifik ke generalisasi umum disebut...",
    options: ["Deduktif", "Induktif", "Kuantitatif", "Analitis"],
    answer: "Induktif",
  },
  {
    id: 3,
    question: "Membuat grafik dari data penjualan bulanan adalah contoh dari penalaran...",
    options: ["Verbal", "Induktif", "Deduktif", "Kuantitatif"],
    answer: "Kuantitatif",
  },
  {
    id: 4,
    question: "Apa yang membedakan penalaran deduktif dari induktif?",
    options: [
      "Deduktif menghasilkan kesimpulan yang probabel, induktif menghasilkan kesimpulan yang pasti.",
      "Deduktif menghasilkan kesimpulan yang pasti, induktif menghasilkan kesimpulan yang probabel.",
      "Deduktif hanya menggunakan angka, induktif hanya menggunakan kata-kata.",
      "Tidak ada perbedaan signifikan.",
    ],
    answer: "Deduktif menghasilkan kesimpulan yang pasti, induktif menghasilkan kesimpulan yang probabel.",
  },
  {
    id: 5,
    question: '"Hari ini cerah. Kemarin cerah. Seminggu terakhir cerah. Jadi, besok akan cerah." Kesimpulan ini adalah contoh dari penalaran...',
    options: ["Deduktif", "Induktif", "Kuantitatif", "Logis"],
    answer: "Induktif",
  },
  {
    id: 6,
    question: "Kemampuan memahami sinonim, antonim, dan hubungan antar kata adalah bagian dari penalaran...",
    options: ["Kuantitatif", "Induktif", "Verbal", "Deduktif"],
    answer: "Verbal",
  },
  {
    id: 7,
    question: "Jika premis dari penalaran deduktif benar, maka kesimpulannya...",
    options: ["Mungkin benar", "Selalu salah", "Pasti benar", "Tidak dapat ditentukan"],
    answer: "Pasti benar",
  },
  {
    id: 8,
    question: "Dalam metode ilmiah, pembentukan hipotesis baru sering kali dimulai dengan penalaran...",
    options: ["Deduktif", "Induktif", "Kuantitatif", "Verbal"],
    answer: "Induktif",
  },
  {
    id: 9,
    question: "Jika Anda memecahkan teka-teki silang, Anda terutama menggunakan penalaran...",
    options: ["Kuantitatif", "Deduktif", "Verbal", "Induktif"],
    answer: "Verbal",
  },
  {
    id: 10,
    question: "Penalaran yang menggunakan logika dari angka dan data disebut...",
    options: ["Verbal", "Kuantitatif", "Kualitatif", "Analitis"],
    answer: "Kuantitatif",
  },
];

export default function MateriPenalaran() {
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
        <h1 className="mb-4 text-3xl font-bold text-indigo-600">Materi Penalaran</h1>
        <p className="mb-8 text-lg text-gray-700">Materi ini akan menguatkan kemampuan Anda untuk berpikir secara logis dan analitis. Anda akan belajar mengenali pola, menarik kesimpulan yang valid, dan menghindari jebakan logika.</p>

        <div className="p-6 mb-8 bg-white rounded-lg shadow-md">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">1. Penalaran Deduktif</h2>
          <p className="mb-4 text-gray-600">
            Penalaran Deduktif adalah proses berpikir dari premis atau pernyataan umum menuju kesimpulan yang spesifik. Jika premisnya benar, kesimpulannya dijamin benar. * Contoh: * Premis 1 (Umum): Semua manusia bisa bernapas. * Premis 2
            (Spesifik): Budi adalah manusia. * Kesimpulan: Budi bisa bernapas. Ini adalah bentuk penalaran yang sering digunakan dalam matematika dan logika formal.
          </p>
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">2. Penalaran Induktif</h2>
          <p className="mb-4 text-gray-600">
            Penalaran Induktif adalah kebalikan dari penalaran deduktif. Proses ini dimulai dari fakta-fakta spesifik atau observasi menuju kesimpulan yang lebih umum. Kesimpulan induktif tidak dijamin kebenarannya, melainkan hanya
            probabilitas. * Contoh: * Observasi 1: Setiap angsa yang saya lihat berwarna putih. * Observasi 2: Angsa di taman juga berwarna putih. * Kesimpulan (Umum): Semua angsa berwarna putih. Penalaran induktif adalah dasar dari metode
            ilmiah, di mana kita mengumpulkan data untuk membentuk hipotesis atau teori.
          </p>
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">3. Penalaran Kuantitatif</h2>
          <p className="mb-4 text-gray-600">
            Penalaran Kuantitatif melibatkan penggunaan data, angka, dan konsep matematika untuk menyelesaikan masalah. Ini adalah kemampuan untuk memahami dan mengolah informasi numerik, menginterpretasi grafik, dan menggunakan rumus
            sederhana untuk menarik kesimpulan.
          </p>
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">4. Penalaran Verbal</h2>
          <p className="mb-4 text-gray-600">
            Penalaran Verbal adalah kemampuan untuk memahami dan menggunakan bahasa untuk berpikir dan menyelesaikan masalah. Ini termasuk kemampuan memahami hubungan antar kata, menganalisis argumen, dan memahami implikasi logis dari suatu
            pernyataan.
          </p>
        </div>

        <button onClick={() => setShowQuiz(true)} className="px-6 py-3 mb-8 text-lg font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700">
          Mulai Kuis
        </button>

        {showQuiz && (
          <div className="p-8 bg-white rounded-lg shadow-md">
            <h2 className="mb-6 text-2xl font-semibold text-gray-800">Kuis Materi Penalaran</h2>
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
