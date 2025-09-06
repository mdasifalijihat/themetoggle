import React from "react";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-md shadow-xl bg-base-100 p-8">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-primary mb-6">
          Create Account
        </h2>
        <p className="text-center text-base-content mb-6">
          Please fill in the details to register
        </p>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-semibold">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full"
              required
            />
          </div>

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

          <div>
            <label className="block mb-1 font-semibold">Confirm Password</label>
            <input
              type="password"
              placeholder="Re-enter your password"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Button */}
          <button type="submit" className="btn btn-primary w-full">
            Register
          </button>
        </form>

        {/* Divider */}
        <div className="divider">OR</div>

        {/* Social Register (Optional) */}
        <button className="btn btn-outline w-full mb-3">Continue with Google</button>
        <button className="btn btn-outline w-full">Continue with Facebook</button>

        {/* Login Link */}
        <p className="text-center text-sm mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-primary font-semibold hover:underline">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
