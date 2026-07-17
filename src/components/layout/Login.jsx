import { useNavigate, Link } from "react-router-dom";
import { ButtonSubmit } from "../shared/Button";
import { useAuth } from "../../context/AutContext";
import { useState } from "react";
// import DropDown from "../shared/DropDown";

export const Login = () => {
  // const [submitting, setSubmitting] = useState(false);

  const navigate = useNavigate();
  const { Login, isLoggedIn } = useAuth();

  const [form, setForm] = useState({ email: "", password: "", role });
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

    if (!form.password) newErrors.password = "password wajib diisi";

    return newErrors;
  };
  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {/* <img
            alt="Your Company"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
            className="mx-auto h-10 w-auto"
          /> */}
          <h2 className="mt-6 text-center text-2xl/9 font-bold tracking-tight text-white">
            Login
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
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
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
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
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
                {/* <DropDown /> */}
              </div>
            </div>
            <div className="">
              <label>Role</label>
              <select
                required
                // onChange={handleChange}
                defaultValue={"buyer"}
                name="role"
              >
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
              </select>
              {/* {errors.role && (
                <small className="error-text">{errors.role}</small>
              )} */}
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-button px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                <Link to="/Registration">Login</Link>
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

          <p className="mt-10 text-center text-sm/6 text-gray-400">
            Not a member?{" "}
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
