import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuthStore } from "../stores/auth";

interface AuthFormProps {
  mode: "login" | "register";
}

export default function AuthForm({ mode }: AuthFormProps) {
  const navigate = useNavigate();
  const { login, register } = useAuthStore();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    try {
      if (mode === "login") {
        const res = await login(email, password);
        if (res.error) {
          setError(res.error.message.includes("email not confirmed") ? "Email belum dikonfirmasi. Silakan cek inbox Anda." : res.error.message);
          return;
        }
        navigate("/dashboard"); // login sukses → dashboard
      } else {
        const res = await register(email, password);
        if (res.error) {
          setError(res.error.message);
          return;
        }
        setMessage("Registrasi berhasil! Silakan cek email untuk konfirmasi.");
        setEmail("");
        setPassword("");
      }
    } catch (err: any) {
      setError(err.message || "Terjadi kesalahan");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center min-h-screen py-12 bg-gray-50 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-3xl font-extrabold text-center text-indigo-600">{mode === "login" ? "Masuk ke akun Anda" : "Buat akun baru"}</h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
          {error && <div className="mb-4 text-sm text-center text-red-600">{error}</div>}
          {message && <div className="mb-4 text-sm text-center text-green-600">{message}</div>}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div>
              <button type="submit" disabled={loading} className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none">
                {loading ? "Memproses..." : mode === "login" ? "Masuk" : "Daftar"}
              </button>
            </div>
          </form>

          <p className="mt-6 text-sm text-center text-gray-500">
            {mode === "login" ? (
              <>
                Belum punya akun?{" "}
                <Link to="/daftar" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Daftar
                </Link>
              </>
            ) : (
              <>
                Sudah punya akun?{" "}
                <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Masuk
                </Link>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
