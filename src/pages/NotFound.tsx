import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-gray-800 bg-gray-100">
      <h1 className="mb-4 text-6xl font-bold">404</h1>
      <p className="mb-6 text-xl">Oops! Halaman yang kamu cari tidak ditemukan.</p>
      <Link to="/" className="px-6 py-3 text-white transition bg-blue-600 rounded-lg hover:bg-blue-700">
        Kembali ke Beranda
      </Link>
    </div>
  );
};

export default NotFound;
