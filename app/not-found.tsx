import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center space-y-6">
      <div className="text-9xl font-black text-zinc-200">404</div>
      <h2 className="text-3xl font-bold text-zinc-800">Page Not Found</h2>
      <p className="text-zinc-500 max-w-md">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-4 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-sm"
      >
        Back Home
      </Link>
    </div>
  );
}
