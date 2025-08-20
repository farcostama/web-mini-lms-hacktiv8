import { useParams } from "react-router-dom";

export default function QuizPage() {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-indigo-700">{id?.toUpperCase()} - Quiz</h1>
      <p>Ini quiz untuk materi {id}. Setelah quiz selesai, progres tetap 100%.</p>
      {/* Bisa ditambah logika scoring */}
    </div>
  );
}
