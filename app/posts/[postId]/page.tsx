import NotFound from "@/app/not-found";
import { getPostById } from "@/lib/data/posts";
import { formatDate } from "@/lib/utils";
import Link from "next/link";

type Props = {
  params: Promise<{ postId: string }>;
};

export default async function Page({ params }: Props) {
  const { postId } = await params;
  const post = await getPostById(postId).catch(() => null);

  if (!post) return <NotFound />;
  return (
    <article>
      <header className="mb-8 border-b border-border pb-8">
        <h1 className="font-serif text-4xl text-ink">{post.title}</h1>
        <div className="mt-4 flex items-center justify-between">
          <p className="text-sm text-muted">{formatDate(post.created_at)}</p>
          <Link
            href={`/posts/${post.id}/edit`}
            className="text-sm text-accent hover:underline"
          >
            Edit
          </Link>
        </div>
      </header>

      <div className="whitespace-pre-wrap text-ink/90 leading-relaxed">
        {post.content}
      </div>
    </article>
  );
}
