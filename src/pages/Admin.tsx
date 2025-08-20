// src/pages/Admin.tsx
import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function Admin() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const { data, error } = await supabase.from("materi").insert([{ title, content }]);

    if (error) {
      console.error("Error saat mengunggah materi:", error);
      setMessage("Gagal mengunggah materi. Silakan coba lagi.");
    } else {
      setMessage("Materi berhasil diunggah!");
      setTitle(""); // Bersihkan form
      setContent("");
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="p-8 w-full max-w-2xl bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Halaman Admin - Unggah Materi</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Judul Materi
            </label>
            <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" required />
          </div>
          <div className="mb-4">
            <label htmlFor="content" className="block text-sm font-medium text-gray-700">
              Isi Materi
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={10}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Mengunggah..." : "Unggah Materi"}
          </button>
        </form>
        {message && <p className={`mt-4 text-center font-medium ${message.includes("Gagal") ? "text-red-600" : "text-green-600"}`}>{message}</p>}
      </div>
    </div>
  );
}
