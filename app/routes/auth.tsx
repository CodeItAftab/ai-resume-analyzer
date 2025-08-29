import { usePuterStore } from "~/lib/puter";
import type { Route } from "../+types/root";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind | Auth" },
    { name: "description", content: "Log into your account" },
  ];
}

const Auth = () => {
  const { isLoading, error, auth } = usePuterStore();
  const location = useLocation();
  const next = location.search.split("next=")[1];
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.isAuthenticated) {
      navigate(next);
    }
  }, [auth.isAuthenticated, next]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-100">
      <div className="shadow-md rounded-3xl bg-white/80 backdrop-blur-lg w-full max-w-xs sm:max-w-md mx-auto border border-gray-100 px-2 sm:px-0">
        <section className="flex flex-col gap-5 sm:gap-8 bg-white rounded-2xl p-3 sm:p-10 w-full max-w-xs sm:max-w-md mx-auto overflow-auto">
          <div className="flex flex-col items-center gap-1 sm:gap-2 text-center w-full">
            <h1 className="text-xl sm:text-4xl font-extrabold break-words w-full leading-tight text-gray-900 font-display">
              {auth.isAuthenticated ? "Welcome" : "Welcome"}
            </h1>
            {auth.isAuthenticated && auth.user?.username && (
              <div className="text-lg sm:text-2xl font-bold text-purple-700 break-words w-full leading-tight mb-1">
                {auth.user.username}!
              </div>
            )}
            <h2 className="text-sm sm:text-lg text-gray-600 break-words w-full leading-snug font-medium">
              {auth.isAuthenticated
                ? "You are logged in. You can now access all features."
                : "Please log in to continue your job journey."}
            </h2>
          </div>
          {error && (
            <div className="bg-red-50 text-red-700 rounded-lg px-4 py-2 text-center text-sm border border-red-200 shadow-sm">
              {error}
            </div>
          )}
          {auth.isAuthenticated && auth.user && (
            <div className="flex flex-col items-center gap-0.5 sm:gap-1 text-center">
              <p className="text-xs sm:text-base font-semibold text-gray-700">Signed in as:</p>
              <span className="bg-gray-50 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-mono break-words max-w-full border border-gray-200">
                {auth.user.username || JSON.stringify(auth.user)}
              </span>
            </div>
          )}
          <div className="flex flex-col gap-2 sm:gap-3 w-full mt-2">
            {isLoading ? (
              <button
                className="auth-button w-full animate-pulse flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 text-white font-bold text-lg shadow-md hover:scale-[1.02] transition-transform duration-150"
                disabled
              >
                <span className="loader border-2 border-gray-300 border-t-blue-500 rounded-full w-5 h-5 animate-spin"></span>
                <span>Signing you in...</span>
              </button>
            ) : auth.isAuthenticated ? (
              <button
                className="auth-button w-full rounded-full bg-gradient-to-r from-blue-400 to-purple-500 text-white font-bold text-lg shadow-md hover:scale-[1.02] transition-transform duration-150"
                onClick={auth.signOut}
                aria-label="Log Out"
              >
                <span>Log Out</span>
              </button>
            ) : (
              <>
                <button
                  className="auth-button w-full rounded-full bg-gradient-to-r from-blue-400 to-purple-500 text-white font-bold text-lg shadow-md hover:scale-[1.02] transition-transform duration-150"
                  onClick={auth.signIn}
                  aria-label="Log In"
                >
                  <span>Log In</span>
                </button>
                <button
                  className="auth-button w-full rounded-full bg-gray-100 text-gray-700 border border-gray-300 font-semibold shadow-sm hover:bg-gray-200 transition-colors duration-150"
                  aria-label="Sign Up"
                >
                  <span>Sign Up</span>
                </button>
                <button
                  className="auth-button w-full rounded-full bg-white text-blue-600 underline font-semibold shadow-none hover:bg-blue-50 transition-colors duration-150"
                  aria-label="Forgot Password"
                >
                  <span>Forgot Password?</span>
                </button>
              </>
            )}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Auth;
