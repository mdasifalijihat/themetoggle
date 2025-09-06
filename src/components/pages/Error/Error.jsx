import React from "react";
import { Link } from "react-router";
import { FiAlertCircle } from "react-icons/fi";

const Error = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-base-200 px-4 text-center">
      <FiAlertCircle className="text-8xl text-primary mb-6" />
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Oops! Page Not Found</h2>
      <p className="text-base-content mb-6">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link to="/">
        <button className="btn btn-primary">Go Back Home</button>
      </Link>
    </div>
  );
};

export default Error;
