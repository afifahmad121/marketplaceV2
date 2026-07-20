import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { apiRequest } from "../../api/client";

function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    apiRequest(`/users/${id}`)
      .then((res) => setUser(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div className="max-w-5xl mx-auto my-12 px-4 text-slate-200">
      {/* Tombol Kembali */}
      <div className="mb-6">
        <Link
          to="/users"
          className="inline-flex items-center text-sm text-slate-400 hover:text-white transition gap-2"
        >
          <span>←</span> Kembali ke Daftar
        </Link>
      </div>

      <h1 className="text-2xl font-bold mb-8 text-white">Detail User</h1>

      {loading && <p className="text-sm text-slate-400">Memuat data...</p>}
      {error && (
        <p className="text-red-400 text-[13px] mt-1 bg-red-500/10 border border-red-500/20 px-3 py-2 rounded-lg">
          Error: {error}
        </p>
      )}

      {!loading && !error && user && (
        <div className="w-full bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="flex flex-col sm:flex-row items-center gap-5 shrink-0 text-center sm:text-left">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-xl font-semibold text-white shadow-md">
              {user.username ? user.username.charAt(0).toUpperCase() : "U"}
            </div>
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <h2 className="text-xl font-bold text-white">
                  {user.username}
                </h2>
                <span className="text-xs text-slate-500 font-mono">
                  #{user.id}
                </span>
              </div>
              <span
                className={`inline-block mt-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium tracking-wide border uppercase ${
                  user.role === "seller"
                    ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                    : "bg-blue-500/10 text-blue-400 border-blue-500/20"
                }`}
              >
                {user.role || "buyer"}
              </span>
            </div>
          </div>

          {/* Sisi Kanan: Isian Detail yang Berjejer Horizontal */}
          <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-6 sm:border-l sm:border-white/10 sm:pl-8 text-sm">
            {/* Kolom Email */}
            <div className="space-y-1">
              <span className="text-xs text-slate-400 block uppercase tracking-wider">
                Email Address
              </span>
              <span className="text-white font-medium break-all">
                {user.email}
              </span>
            </div>

            {/* Kolom Tanggal */}
            <div className="space-y-1">
              <span className="text-xs text-slate-400 block uppercase tracking-wider">
                Tanggal Terdaftar
              </span>
              <span className="text-slate-300 font-medium">
                {new Date(user.created_at).toLocaleDateString("id-ID", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserDetail;
