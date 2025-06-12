import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/actions/auth.action";
import { useNavigate } from "react-router";
import { isLoggedin } from "../helpers/isLoggedIn";
import { toast } from "react-toastify";
import { selectToken } from "../store/reducers/authSlice";

const Authpage = () => {
  const token = useSelector(selectToken);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [flipped, setFlipped] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const data = { email, password };
    try {
      const res = await dispatch(login(data));
      if (res.payload.success) {
        navigate("/home");
      }

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (isLoggedin(token)) {
      toast.warn("user logged in");
      navigate("/home");
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="relative flex flex-col items-center gap-4">
        <div className="relative">
          <label className="flex items-center justify-center gap-4 relative">
            {/* Toggle switch */}
            <input
              type="checkbox"
              className="sr-only peer"
              onChange={(e) => setFlipped(e.target.checked)}
            />
            <span className="absolute -left-20 top-0 text-gray-800 font-semibold underline peer-checked:no-underline">
              Log in
            </span>
            <span className="absolute -right-20 top-0 text-gray-800 font-semibold no-underline peer-checked:underline">
              Sign up
            </span>
            <div className="w-14 h-7 rounded border-2 border-gray-800 shadow-[4px_4px_0_0_#323232] bg-white relative cursor-pointer">
              <div
                className={`absolute ${
                  flipped ? "right-0" : "left-0"
                } top-[2px] w-5 h-5 rounded border-2 border-gray-800 bg-white shadow-[0_3px_0_0_#323232] transition-transform peer-checked:translate-x-7`}
              ></div>
            </div>
          </label>
        </div>

        {/* Flip card container */}
        <div className="w-[300px] h-[350px] relative transition-transform duration-700 [transform-style:preserve-3d] perspective-[1000px]">
          <div
            className={`absolute w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
              flipped ? "rotate-y-180" : ""
            }`}
          >
            {/* Login Front */}
            <div className="absolute w-full h-full flex flex-col justify-center items-center gap-4 bg-gray-200 border-2 border-gray-800 rounded shadow-[4px_4px_0_0_#323232] backface-hidden">
              <h2 className="text-xl font-bold text-gray-800">Log in</h2>
              <form
                onSubmit={handleLogin}
                className="flex flex-col gap-4 items-center"
              >
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-64 h-10 rounded border-2 border-gray-800 bg-white shadow-[4px_4px_0_0_#323232] px-3 font-semibold placeholder-gray-500 focus:outline-none focus:border-blue-500"
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-64 h-10 rounded border-2 border-gray-800 bg-white shadow-[4px_4px_0_0_#323232] px-3 font-semibold placeholder-gray-500 focus:outline-none focus:border-blue-500"
                  required
                />
                <button
                  type="submit"
                  className="w-32 h-10 mt-2 rounded border-2 border-gray-800 bg-white shadow-[4px_4px_0_0_#323232] font-semibold hover:bg-gray-100 active:shadow-none active:translate-x-[3px] active:translate-y-[3px]"
                >
                  Let's go!
                </button>
              </form>
            </div>

            {/* Signup Back */}
            <div className="absolute w-full h-full flex flex-col justify-center items-center gap-4 bg-gray-200 border-2 border-gray-800 rounded shadow-[4px_4px_0_0_#323232] rotate-y-180 backface-hidden">
              <h2 className="text-xl font-bold text-gray-800">Sign up</h2>
              <form className="flex flex-col gap-4 items-center">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-64 h-10 rounded border-2 border-gray-800 bg-white shadow-[4px_4px_0_0_#323232] px-3 font-semibold placeholder-gray-500 focus:outline-none focus:border-blue-500"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-64 h-10 rounded border-2 border-gray-800 bg-white shadow-[4px_4px_0_0_#323232] px-3 font-semibold placeholder-gray-500 focus:outline-none focus:border-blue-500"
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-64 h-10 rounded border-2 border-gray-800 bg-white shadow-[4px_4px_0_0_#323232] px-3 font-semibold placeholder-gray-500 focus:outline-none focus:border-blue-500"
                  required
                />
                <button
                  type="submit"
                  className="w-32 h-10 mt-2 rounded border-2 border-gray-800 bg-white shadow-[4px_4px_0_0_#323232] font-semibold hover:bg-gray-100 active:shadow-none active:translate-x-[3px] active:translate-y-[3px]"
                >
                  Confirm!
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authpage;
