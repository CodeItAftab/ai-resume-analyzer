import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { usePuterStore } from "~/lib/puter";

const WipeApp = () => {
  const { auth, isLoading, error, clearError, fs, ai, kv } = usePuterStore();
  const navigate = useNavigate();
  const [files, setFiles] = useState<FSItem[]>([]);

  const loadFiles = async () => {
    const files = (await fs.readDir("./")) as FSItem[];
    setFiles(files);
  };

  useEffect(() => {
    loadFiles();
  }, []);

  useEffect(() => {
    if (!isLoading && !auth.isAuthenticated) {
      navigate("/auth?next=/wipe");
    }
  }, [isLoading]);

  const handleDelete = async () => {
    files.forEach(async (file) => {
      await fs.delete(file.path);
    });
    await kv.flush();
    loadFiles();
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-100">
        <div className="bg-white rounded-2xl shadow-md p-8 text-center text-lg font-semibold animate-pulse">
          Loading...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-100">
        <div className="bg-white rounded-2xl shadow-md p-8 text-center text-red-600 font-semibold">
          Error: {error}
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-100">
      <div className="bg-white rounded-3xl shadow-xl p-3 sm:p-8 w-full max-w-xs sm:max-w-md mx-auto flex flex-col gap-5 sm:gap-7 items-center border border-gray-100">
        <div className="flex flex-col items-center gap-1 sm:gap-2 text-center w-full">
          <img
            src="/icons/warning.svg"
            alt="Wipe"
            className="w-8 h-8 sm:w-10 sm:h-10 mb-1 sm:mb-2"
          />
          <h1 className="text-base sm:text-2xl md:text-3xl font-bold text-gray-900">
            Wipe App Data
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-gray-600 flex items-center justify-center gap-1 w-full">
            <img
              src="/icons/info.svg"
              alt="info"
              className="w-3 h-3 sm:w-4 sm:h-4 inline-block"
            />
            This will permanently delete all your files and app data. This
            action cannot be undone.
          </p>
        </div>
        <div className="w-full">
          <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm md:text-base text-gray-500 mb-1 sm:mb-2">
            <img
              src="/icons/info.svg"
              alt="user info"
              className="w-3 h-3 sm:w-4 sm:h-4"
            />
            Authenticated as:{" "}
            <span className="font-semibold text-gray-700">
              {auth.user?.username}
            </span>
          </div>
          <div className="text-xs sm:text-base md:text-lg font-semibold mb-1 sm:mb-2 flex items-center gap-1 sm:gap-2">
            Existing files:
          </div>
          <div className="flex flex-col gap-2 max-h-56 sm:max-h-72 overflow-auto mb-2 sm:mb-4 border border-gray-200 rounded-xl bg-gray-50 p-2 text-xs sm:text-base md:text-lg">
            {files.length === 0 ? (
              <div className="text-gray-400 text-xs sm:text-base md:text-lg mt-4">
                No files found.
              </div>
            ) : (
              files.map((file) => (
                <div
                  key={file.id}
                  className="rounded-lg px-3 py-2 transition-colors duration-150 hover:bg-white cursor-pointer"
                >
                  <p className="text-xs sm:text-base md:text-lg text-gray-800 font-medium truncate">
                    {file.name}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
        <button
          className="w-full rounded-full bg-gradient-to-r from-red-400 to-pink-500 text-white font-bold text-base sm:text-lg py-2 sm:py-3 shadow hover:scale-[1.02] transition-transform duration-150 flex items-center justify-center gap-2"
          onClick={() => {
            if (
              window.confirm(
                "Are you sure you want to wipe all app data? This cannot be undone."
              )
            ) {
              handleDelete();
            }
          }}
        >
          <img
            src="/icons/cross.svg"
            alt="delete"
            className="w-4 h-4 sm:w-5 sm:h-5"
          />
          Wipe App Data
        </button>
      </div>
    </main>
  );
};

export default WipeApp;
