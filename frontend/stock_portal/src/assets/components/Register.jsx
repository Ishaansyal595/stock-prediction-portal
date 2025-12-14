import React, { useState } from "react";
import api from "../../lib/axiosInstance";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);

  const handleRegistration = async (e) => {
    e.preventDefault();
    setError({});
    setLoading(true);

    try {
      await api.post("register/", {
        username,
        email,
        password,
      });
      setUsername("");
      setEmail("");
      setPassword("");
    } catch (err) {
      setError(err.response?.data || {});
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (field) =>
    `bg-gray-200 rounded-lg py-2.5 px-3.5 text-[16px] border w-full 
     placeholder:text-gray-600 text-gray-800 focus:outline-none
     ${
       error[field]
         ? "border-red-500 focus:shadow-[0_0_0_0.2rem_rgba(239,68,68,0.25)]"
         : "border-[#ccc] focus:border-[#0d6efd] focus:shadow-[0_0_0_0.2rem_rgba(13,110,253,0.25)]"
     }`;

  return (
    <div className="mx-auto px-4 sm:px-6 flex-1 flex justify-center items-center w-full">
      <div className="p-10 bg-light-dark rounded-xl w-full max-w-md space-y-6 shadow-lg">
        <h3 className="text-center text-2xl font-semibold text-white">
          Create an Account
        </h3>

        <form onSubmit={handleRegistration} className="space-y-4">
          {/* Username */}
          <div>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className={inputClass("username")}
            />
            {error.username && (
              <p className="mt-1 text-sm text-red-400 text-left">
                {error.username}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className={inputClass("email")}
            />
            {error.email && (
              <p className="mt-1 text-sm text-red-400 text-left">
                {error.email}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className={inputClass("password")}
            />
            {error.password && (
              <p className="mt-1 text-sm text-red-400 text-left">
                {error.password}
              </p>
            )}
          </div>

          {loading ? (
            <button
              type="submit"
              className={`w-full mt-4 rounded-lg py-2.5 font-semibold 
                       bg-cyan-500 text-black border border-cyan-500
                       hover:bg-transparent hover:text-cyan-500
                       transition-all duration-200`}
              disabled
            >
              Please wait...
            </button>
          ) : (
            <button
              type="submit"
              className={`w-full mt-4 rounded-lg py-2.5 font-semibold 
                       bg-cyan-500 text-black border border-cyan-500
                       hover:bg-transparent hover:text-cyan-500
                       transition-all duration-200`}
            >
              Register
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Register;
