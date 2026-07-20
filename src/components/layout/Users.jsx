import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiRequest } from "../../api/client";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(""); // Memperbaiki typo 'erorr'

  useEffect(() => {
    apiRequest("/users")
      .then((res) => setUsers(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="max-w-5xl mx-auto my-12 px-4 text-slate-200">
      <h1 className="text-2xl font-bold mb-8 text-white">Daftar User</h1>

      {loading && <p className="text-sm text-slate-400">Memuat data user...</p>}
      {error && (
        <p className="text-red-400 text-[13px] mt-1 bg-red-500/10 border border-red-500/20 px-3 py-2 rounded-lg">
          Error: {error}
        </p>
      )}

      {!loading && !error && (
        <div className="flex flex-col gap-4">
          {users.map((u) => (
            <div
              key={u.id}
              className="w-full bg-white/5 backdrop-blur border border-white/10 rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 transition hover:bg-white/[0.07]"
            >
              <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left w-full sm:w-auto">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-base font-semibold text-white shrink-0">
                  {u.username ? u.username.charAt(0).toUpperCase() : "U"}
                </div>

                <div className="space-y-0.5">
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                    <h2 className="text-base font-medium text-white">
                      {u.username}
                    </h2>
                    <span className="text-xs text-slate-500">#{u.id}</span>
                  </div>
                  <p className="text-sm text-slate-400 break-all">{u.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 shrink-0 w-full sm:w-auto justify-between sm:justify-end">
                <span
                  className={`px-2.5 py-0.5 rounded-full text-xs font-medium tracking-wide border uppercase ${
                    u.role === "seller"
                      ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                      : "bg-blue-500/10 text-blue-400 border-blue-500/20"
                  }`}
                >
                  {u.role || "buyer"}
                </span>

                <Link
                  to={`/users/${u.id}`}
                  className="px-4 py-1.5 text-xs font-medium bg-white/10 hover:bg-white/20 border border-white/10 text-white rounded-lg transition"
                >
                  Detail
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Users;
