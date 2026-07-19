import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AutContext";
import { apiRequest } from "../../api/client";
import { Login } from "./Login";
// import { method } from "lodash";

export const Registration = () => {
  const navigate = useNavigate();
  const { Login } = useAuth();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "buyer",
  });

  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // --- Validasi (mengembalikan object errors) ---
  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!form.username.trim()) newErrors.username = "nama wajid diisi";

    if (!form.email.trim()) {
      newErrors.email = "Email wajib diisi";
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = "Format email tidak valid";
    }

    if (!form.password) {
      newErrors.password = "Password wajib diisi";
    } else if (form.password.length < 6) {
      newErrors.password = "Password minimal 6 karakter";
    }

    if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Konfirmasi password tidak cocok ";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError("");

    const validationError = validate();
    setErrors(validationError);
    if (Object.keys(validationError).length > 0) return;
    // console.log(form);
    setSubmitting(true);
    try {
      const data = await apiRequest("auth/register", {
        method: "POST",
        body: {
          username: form.username,
          email: form.email,
          password: form.password,
          password_confirmation: form.confirmPassword,
          role: form.role,
        },
      });

      // Berhasil: simpan token + user via context, lalu ke dashboard
      // login(data.token, data.user);

      navigate("/login");
    } catch (err) {
      // Gagal: tampilkan error validasi dari Laravel (data.errors) jika ada
      if (err.data?.errors) {
        const laravelErros = {};
        Object.keys(err.data.errors).forEach((key) => {
          laravelErros[key] = err.data.errors[key][0];
        });
        setErrors(laravelErros);
      } else {
        setServerError(err.message);
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-6 text-center text-2xl font-bold tracking-tight text-white">
            Registration
          </h2>
          {serverError && <div className="alert-error">{serverError}</div>}
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            <div>
              <label
                // htmlFor="email"
                className="block text-sm/6 font-medium text-gray-100"
              >
                name
              </label>
              <div className="mt-2">
                <input
                  name="username"
                  type="text"
                  value={form.username}
                  onChange={handleChange}
                  required
                  className={`block w-full rounded-md bg-white/5 px-3 py-1.5 text-white ${
                    errors.email ? "" : ""
                  }`}
                />
                {errors.username && (
                  <small className="text-yellow-500 text-[13px] mt-1">
                    {errors.username}
                  </small>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-100"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  // autoComplete="email"
                  className={`block w-full rounded-md bg-white/5 px-3 py-1.5 text-white ${
                    errors.email ? "" : ""
                  }`}
                />
                {errors.email && (
                  <small className="text-yellow-500 text-[13px] mt-1">
                    {errors.email}
                  </small>
                )}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-100"
                >
                  password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={form.password}
                  onChange={handleChange}
                  required
                  // autoComplete="current-password"
                  className={`block w-full rounded-md bg-white/5 px-3 py-1.5 text-white ${
                    errors.email ? "" : ""
                  }`}
                />
                {errors.password && (
                  <small className="text-yellow-500 text-[13px] mt-1">
                    {errors.password}
                  </small>
                )}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-100"
                >
                  confirm password
                </label>
              </div>
              <div className="mt-2">
                <input
                  name="confirmPassword"
                  type="password"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  required
                  // autoComplete="current-password"
                  className={`block w-full rounded-md bg-white/5 px-3 py-1.5 text-white ${
                    errors.email ? "" : ""
                  }`}
                />
                {errors.confirmPassword && (
                  <small className="text-yellow-500 text-[13px] mt-1">
                    {errors.confirmPassword}
                  </small>
                )}
              </div>
            </div>

            <div className="">
              <label>Role</label>
              <select
                required
                onChange={handleChange}
                // defaultValue={"buyer"}
                name="role"
                // value={form.role}
                className="border rounded-md bg-white text-black"
              >
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
              </select>
              {errors.role && (
                <small className="text-yellow-500 text-[13px] mt-1">
                  {errors.role}
                </small>
              )}
            </div>

            <div>
              <button
                type="submit"
                disabled={submitting}
                className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                {submitting ? "Memproses..." : "Register"}
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-400">
            Already have an account?{" "}
            <a
              href="/Login"
              className="font-semibold text-indigo-400 hover:text-indigo-300"
            >
              Login
            </a>
          </p>
        </div>
      </div>
    </>
  );
};
