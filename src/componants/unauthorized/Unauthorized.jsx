// src/pages/Unauthorized.jsx
import { Link } from "react-router";

const Unauthorized = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
        <div className="text-6xl mb-4">🔒</div>

        <h1 className="text-4xl font-bold text-red-600">401</h1>

        <h2 className="text-2xl font-semibold mt-2">
          Unauthorized Access
        </h2>

        <p className="text-gray-600 mt-3">
          Sorry, you don't have permission to access this page.
          Please log in with an authorized account.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link to="/">
            <button className="btn btn-primary">
              Go Home
            </button>
          </Link>

          <Link to="/login">
            <button className="btn btn-outline">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;