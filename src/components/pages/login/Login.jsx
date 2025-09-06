import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-md shadow-xl bg-base-100 p-8">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-primary mb-6">
          Welcome Back
        </h2>
        <p className="text-center text-base-content mb-6">
          Please login to your account
        </p>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-semibold">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Remember & Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="checkbox checkbox-primary" />
              Remember me
            </label>
            <a href="#" className="text-primary hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Button */}
          <button type="submit" className="btn btn-primary w-full">
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="divider">OR</div>

        {/* Social Login (Optional) */}
        <button className="btn btn-outline w-full mb-3">Continue with Google</button>
        <button className="btn btn-outline w-full">Continue with Facebook</button>

        {/* Register Link */}
        <p className="text-center text-sm mt-6">
          Don’t have an account?{" "}
          <a href="/register" className="text-primary font-semibold hover:underline">
            Register here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
