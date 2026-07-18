import { useAuth } from "../../context/AutContext";

function Dasboard() {
  const { user, isSeller } = useAuth();

  return (
    <div className="max-w-5xl mx-auto my-12 px-4 text-slate-200">
      <h1 className="text-2xl font-bold mb-8 text-white">Dashboard</h1>

      <div className="flex flex-col gap-6">
        <div className="w-full bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left w-full sm:w-auto">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-xl font-semibold text-white shrink-0">
              {user?.username ? user.username.charAt(0).toUpperCase() : "U"}
            </div>

            <div className="space-y-1">
              <h2 className="text-lg font-medium text-white">
                {user?.username}
              </h2>
              <p className="text-sm text-slate-400 break-all">{user?.email}</p>
            </div>
          </div>

          <div className="shrink-0">
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium tracking-wide border ${
                isSeller
                  ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                  : "bg-blue-500/10 text-blue-400 border-blue-500/20"
              }`}
            >
              {isSeller ? "seller" : "buyer"}
            </span>
          </div>
        </div>

        {isSeller && (
          <div className="w-full bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6">
            <h3 className="text-base font-semibold text-white mb-4 pb-2 border-b border-white/10">
              Menu Seller
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              {[
                "Manajemen Produk",
                "Pesanan & Transaksi",
                "Promosi",
                "Layanan Pelanggan (Chat)",
              ].map((menu, index) => (
                <li
                  key={index}
                  className="p-3 rounded-lg bg-white/2 hover:bg-white/6 border border-white/5 transition text-sm text-slate-300 hover:text-white "
                >
                  {menu}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dasboard;
