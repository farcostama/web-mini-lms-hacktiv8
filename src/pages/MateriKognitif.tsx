import { useState, FormEvent } from "react";
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
    question: "Membagi nomor telepon panjang menjadi tiga bagian (contoh: 0812-345-6789) adalah contoh dari teknik daya ingat...",
    options: ["Visualisasi", "Asosiasi", "Chunking", "Repetisi"],
    answer: "Chunking",
  },
  {
    id: 2,
    question: "Metode belajar yang melibatkan kerja fokus selama 25 menit dan istirahat 5 menit disebut...",
    options: ["Pomodoro", "Skimming", "Scanning", "SQ3R"],
    answer: "Pomodoro",
  },
  {
    id: 3,
    question: "Bagian otak yang paling vital untuk memori jangka panjang adalah...",
    options: ["Amigdala", "Hipokampus", "Cerebellum", "Medulla"],
    answer: "Hipokampus",
  },
  {
    id: 4,
    question: "Apa tahapan pertama dalam proses pemecahan masalah?",
    options: ["Jalankan Rencana", "Identifikasi Masalah", "Buat Rencana", "Tinjau Ulang"],
    answer: "Identifikasi Masalah",
  },
  {
    id: 5,
    question: "Melatih mindfulness terbukti dapat meningkatkan...",
    options: ["Kekuatan fisik", "Memori jangka pendek", "Konsentrasi", "Kemampuan menghitung"],
    answer: "Konsentrasi",
  },
  {
    id: 6,
    question: "Menghubungkan nama seseorang yang baru Anda kenal dengan nama teman lama adalah contoh teknik daya ingat...",
    options: ["Chunking", "Asosiasi", "Repetisi", "Visualisasi"],
    answer: "Asosiasi",
  },
  {
    id: 7,
    question: "Mengapa multitasking sering kali tidak efisien?",
    options: ["Karena otak kita tidak dirancang untuk itu", "Karena memecah konsentrasi dan menurunkan kualitas", "Karena membutuhkan terlalu banyak energi", "Karena membuat tugas lebih cepat selesai"],
    answer: "Karena memecah konsentrasi dan menurunkan kualitas",
  },
  {
    id: 8,
    question: "Kemampuan yang paling dibutuhkan saat memainkan catur adalah...",
    options: ["Daya ingat dan konsentrasi", "Kekuatan otot", "Kecepatan membaca", "Keterampilan motorik"],
    answer: "Daya ingat dan konsentrasi",
  },
  {
    id: 9,
    question: "Bagaimana cara terbaik untuk mengingat daftar belanja yang panjang?",
    options: ["Membacanya sekali dengan cepat", "Membayangkan setiap item di troli belanja Anda", "Menghafal urutannya secara berulang", "Menghindari membelinya"],
    answer: "Membayangkan setiap item di troli belanja Anda",
  },
  {
    id: 10,
    question: "Otak yang berfungsi dengan baik secara kognitif ditandai dengan...",
    options: ["Kemampuan multitasking yang hebat", "Daya ingat, konsentrasi, dan pemecahan masalah yang kuat", "Kemampuan untuk bekerja tanpa istirahat", "Semuanya benar"],
    answer: "Daya ingat, konsentrasi, dan pemecahan masalah yang kuat",
  },
];

export default function MateriKognitif() {
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
        <h1 className="mb-4 text-3xl font-bold text-indigo-600">Materi Kognitif</h1>
        <p className="mb-8 text-lg text-gray-700">
          Materi ini akan melatih kemampuan kognitif Anda, termasuk daya ingat, konsentrasi, dan kemampuan pemecahan masalah. Kemampuan ini adalah fondasi untuk pembelajaran dan kinerja otak yang optimal.
        </p>

        <div className="p-6 mb-8 bg-white rounded-lg shadow-md">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">1. Daya Ingat (Memory)</h2>
          <p className="mb-4 text-gray-600">
            Daya ingat adalah kemampuan untuk menyimpan, mempertahankan, dan mengambil informasi. Ini bukan hanya tentang menghafal, tetapi juga tentang cara informasi diproses. * Memori Jangka Pendek (Short-term memory): Menyimpan
            informasi dalam jumlah kecil untuk waktu singkat. * Memori Jangka Panjang (Long-term memory): Menyimpan informasi secara permanen. * Latihan untuk daya ingat: * Teknik Chunking: Mengelompokkan informasi menjadi "potongan" yang
            lebih kecil dan mudah diingat. * Asosiasi: Menghubungkan informasi baru dengan yang sudah ada di memori. * Visualisasi: Membentuk gambaran mental dari informasi yang ingin diingat.
          </p>
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">2. Konsentrasi (Concentration)</h2>
          <p className="mb-4 text-gray-600">
            Konsentrasi adalah kemampuan untuk memusatkan perhatian pada satu tugas atau stimulus, sambil mengabaikan gangguan. Ini adalah keterampilan yang bisa dilatih. * Latihan untuk konsentrasi: * Metode Pomodoro: Bekerja dalam
            interval waktu yang fokus (misalnya 25 menit) diikuti dengan istirahat singkat. * Meditasi: Latihan mindfulness dapat membantu melatih fokus otak. * Hindari multitasking: Berfokus pada satu tugas pada satu waktu untuk
            meningkatkan efisiensi dan akurasi.
          </p>
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">3. Pemecahan Masalah (Problem Solving)</h2>
          <p className="mb-4 text-gray-600">
            Pemecahan masalah adalah proses kognitif yang melibatkan penemuan solusi untuk masalah yang tidak jelas. Ini adalah kemampuan untuk berpikir kritis dan kreatif. * Tahapan: * Identifikasi Masalah: Pahami akar dari masalah. * Buat
            Rencana: Kembangkan strategi untuk menemukan solusi. * Jalankan Rencana: Terapkan strategi Anda. * Tinjau Ulang: Evaluasi hasilnya dan pelajari dari prosesnya. * Teknik: Menggunakan diagram, memecah masalah besar menjadi
            bagian-bagian kecil, dan brainstorming.
          </p>
        </div>

        <button onClick={() => setShowQuiz(true)} className="px-6 py-3 mb-8 text-lg font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700">
          Mulai Kuis
        </button>

        {showQuiz && (
          <div className="p-8 bg-white rounded-lg shadow-md">
            <h2 className="mb-6 text-2xl font-semibold text-gray-800">Kuis Materi Kognitif</h2>
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
