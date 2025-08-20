// src/pages/LupaKataSandi.tsx

import { useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { Link } from "react-router-dom";

export default function LupaKataSandi() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/update-password`,
    });

    if (error) {
      setMessage("Gagal mengirim email. Pastikan email Anda terdaftar.");
    } else {
      setMessage("Tautan reset kata sandi telah dikirim ke email Anda. Silakan cek inbox.");
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="p-8 w-full max-w-md bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Lupa Kata Sandi?</h1>
        <p className="text-gray-600 text-sm mb-6 text-center">Masukkan email yang terdaftar untuk menerima tautan reset kata sandi.</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Mengirim..." : "Kirim Tautan Reset"}
          </button>
        </form>
        {message && (
          <p className="mt-4 text-sm text-center font-medium" style={{ color: message.includes("Gagal") ? "red" : "green" }}>
            {message}
          </p>
        )}
        <div className="mt-4 text-sm text-center">
          <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
            Kembali ke halaman masuk
          </Link>
        </div>
      </div>
    </div>
  );
}
