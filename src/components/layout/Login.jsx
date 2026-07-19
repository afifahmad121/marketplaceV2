import { Navigate } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AutContext";
import { useState } from "react";
import { apiRequest } from "../../api/client";

export const Login = () => {
  const navigate = useNavigate();
  const { login, isLoggedIn } = useAuth();

  const [form, setForm] = useState({ email: "", password: "", role: "" });
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!form.email.trim()) {
      newErrors.email = "Email wajib diisi";
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = "Format email tidak valid";
    }

    if (!form.password) newErrors.password = "Password wajib diisi";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError("");

    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setSubmitting(true);
    try {
      const data = await apiRequest("/auth/login", {
        method: "POST",
        body: { email: form.email, password: form.password, role: form.role },
      });

      login(data.token, data.user); // simpan token + user
      navigate("/dasboard");
    } catch (err) {
      setServerError(err.message || "Login gagal");
    } finally {
      setSubmitting(false);
    }
  };

  if (isLoggedIn) {
    return <Navigate to="/dasboard" replace />;
  }
  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-6 text-center text-2xl/9 font-bold tracking-tight text-white">
            Login
          </h2>
        </div>
        {/* {serverError && (
          <div className="bg-#fdecea text-yellow-300  px-3 py-2,5 rounded-lg text-[14px] mb-4  ">
            {serverError}
          </div>
        )} */}
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            {/* <form action="#" method="POST" className="space-y-6"></form> */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-100"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  // id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  // autoComplete="email"
                  className={errors.email ? "input-error" : ""}
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
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
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={form.password}
                  onChange={handleChange}
                  className={errors.password ? "input-error" : ""}
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
                {errors.password && (
                  <small className="text-yellow-500 text-[13px] mt-1">
                    {errors.password}
                  </small>
                )}
              </div>
            </div>
            {/* <div className="">
              <label>Role</label>
              <select
                required
                onChange={handleChange}
                defaultValue={"buyer"}
                name="role"
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
            </div> */}
            <div>
              <button
                type="submit"
                disabled={submitting}
                className="flex w-full justify-center rounded-md bg-button px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                {submitting ? "Memproses..." : "Login"}
              </button>

              {/* <button
                type="submit"
                disabled={submitting}
                className="flex w-full justify-center rounded-md bg-button px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                {submitting ? "Memproses..." : "login"}
                </button> */}
            </div>
          </form>
          <Link to="/Registration"></Link>

          <p className="mt-10 text-center text-sm/6 text-gray-400">
            Don't have an account?{" "}
            <a
              href="/Registration"
              className="font-semibold text-indigo-400 hover:text-indigo-300"
            >
              Register
            </a>
            {/* <Link to="/Registration">Registration</Link> */}
          </p>
        </div>
      </div>
    </>
  );
};
