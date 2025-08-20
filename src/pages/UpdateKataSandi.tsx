// src/pages/UpdateKataSandi.tsx

import { useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { useNavigate } from "react-router-dom";

export default function UpdateKataSandi() {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.updateUser({
      password: password,
    });

    if (error) {
      setMessage("Gagal memperbarui kata sandi. Silakan coba lagi.");
    } else {
      setMessage("Kata sandi Anda berhasil diperbarui. Mengarahkan ke halaman login...");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="p-8 w-full max-w-md bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Perbarui Kata Sandi</h1>
        <p className="text-gray-600 text-sm mb-6 text-center">Masukkan kata sandi baru Anda.</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Kata Sandi Baru
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Memperbarui..." : "Perbarui Kata Sandi"}
          </button>
        </form>
        {message && (
          <p className="mt-4 text-sm text-center font-medium" style={{ color: message.includes("Gagal") ? "red" : "green" }}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
