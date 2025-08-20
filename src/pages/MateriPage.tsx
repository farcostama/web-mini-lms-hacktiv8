import { useParams, useNavigate } from "react-router-dom";

const materiContent: Record<string, { title: string; content: string; quizLink: string }> = {
  bacaan: {
    title: "Materi Bacaan",
    content: "Materi bacaan ini membantu meningkatkan kemampuan membaca secara efektif dan cepat...",
    quizLink: "/quiz/bacaan",
  },
  penalaran: {
    title: "Materi Penalaran",
    content: "Latihan ini mengasah kemampuan berpikir logis dan analitis...",
    quizLink: "/quiz/penalaran",
  },
  kognitif: {
    title: "Materi Kognitif",
    content: "Materi ini meningkatkan daya ingat, konsentrasi, dan kemampuan kognitif lainnya...",
    quizLink: "/quiz/kognitif",
  },
};

export default function MateriPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const materi = materiContent[id ?? ""] || null;

  if (!materi) return <p>Materi tidak ditemukan</p>;

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <h1 className="mb-6 text-3xl font-bold text-indigo-600">{materi.title}</h1>
      <div className="p-6 mb-6 text-gray-700 bg-white rounded shadow">
        <p>{materi.content}</p>
      </div>
      <button onClick={() => navigate(materi.quizLink)} className="px-6 py-3 text-white bg-indigo-600 rounded hover:bg-indigo-700">
        Mulai Quiz
      </button>
    </div>
  );
}
