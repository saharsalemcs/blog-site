"use client";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex flex-col items-center py-20 text-center">
      <h1 className="font-serif text-3xl text-ink">Something went wrong</h1>
      <p className="mt-3 text-muted">
        An unexpected error occurred. Please try again.
      </p>
      <button
        onClick={reset}
        className="mt-6 bg-accent px-5 py-2 text-sm text-paper cursor-pointer"
      >
        Try again
      </button>
    </div>
  );
}
