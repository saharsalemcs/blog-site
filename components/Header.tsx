import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex items-center justify-between px-6 py-5">
        <Link href="/" className="font-serif text-xl text-ink">
          My Blog
        </Link>
        <Link href="/posts/new" className="text-sm text-accent hover:underline">
          New post
        </Link>
      </div>
    </header>
  );
}
