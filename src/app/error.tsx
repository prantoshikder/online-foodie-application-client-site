"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-4">
      <span className="text-6xl font-extrabold text-orange-500">Oops!</span>
      <h1 className="mt-4 text-2xl font-bold text-gray-800">Something went wrong</h1>
      <p className="mt-2 text-gray-500 max-w-sm">
        An unexpected error occurred. Please try again — if the problem persists, contact support.
      </p>
      {error.digest && <p className="mt-2 text-xs text-gray-400">Error ID: {error.digest}</p>}
      <button
        onClick={reset}
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-orange-600 transition-colors"
      >
        Try again
      </button>
    </div>
  );
}
