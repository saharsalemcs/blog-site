import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center py-20 text-center">
      <h1 className="font-serif text-3xl text-ink">Page not found</h1>
      <p className="mt-3 text-muted">
        The page you&apos;re looking for doesn&apos;t exist or may have been
        removed.
      </p>
      <Link href="/" className="mt-6 text-sm text-accent hover:underline">
        Back to home
      </Link>
    </div>
  );
}
