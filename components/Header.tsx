import Link from "next/link";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="flex items-center gap-2.5 font-serif text-xl text-ink"
        >
          <Logo className="h-8 w-9 text-accent" />
          My Blog
        </Link>
        <Link href="/posts/new" className="text-sm text-accent hover:underline">
          New post
        </Link>
      </div>
    </header>
  );
}
