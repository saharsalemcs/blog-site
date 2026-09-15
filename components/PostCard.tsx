import { formatDate } from "@/lib/utils";
import Link from "next/link";

type PostCardProps = {
  id: string;
  title: string;
  description: string | null;
  createdAt: string;
};

export default function PostCard({
  id,
  title,
  description,
  createdAt,
}: PostCardProps) {
  return (
    <article className="border-b border-border py-6 first:pt-0 last:border-b-0">
      <Link href={`/posts/${id}`} className="group">
        <h2 className="font-serif text-2xl text-ink group-hover:text-accent">
          {title}
        </h2>
        {description && <p className="mt-2 text-ink/80">{description}</p>}
        <p className="mt-3 text-sm text-muted">{formatDate(createdAt)}</p>
      </Link>
    </article>
  );
}
