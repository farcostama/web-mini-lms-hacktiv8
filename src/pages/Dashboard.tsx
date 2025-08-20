import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../stores/auth";

interface Course {
  id: number;
  title: string;
  description: string;
  link: string;
}

export default function Dashboard() {
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  const courses: Course[] = [
    {
      id: 1,
      title: "Materi Bacaan",
      description: "Materi yang membantu meningkatkan kemampuan membaca secara efektif dan cepat.",
      link: "/materi/bacaan",
    },
    {
      id: 2,
      title: "Materi Penalaran",
      description: "Latihan untuk mengasah kemampuan berpikir logis dan analitis.",
      link: "/materi/penalaran",
    },
    {
      id: 3,
      title: "Materi Kognitif",
      description: "Materi untuk meningkatkan daya ingat, konsentrasi, dan kemampuan kognitif lainnya.",
      link: "/materi/kognitif",
    },
  ];

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-indigo-600">Halo, {user?.email}</h1>
        <button onClick={handleLogout} className="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600">
          Logout
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {courses.map((course) => (
          <div key={course.id} className="p-6 transition bg-white rounded-lg shadow-md hover:shadow-lg">
            <h2 className="mb-2 text-xl font-semibold text-indigo-600">{course.title}</h2>
            <p className="mb-4 text-gray-600">{course.description}</p>
            <button onClick={() => navigate(course.link)} className="px-4 py-2 text-white bg-indigo-600 rounded hover:bg-indigo-700">
              Lihat Materi
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
