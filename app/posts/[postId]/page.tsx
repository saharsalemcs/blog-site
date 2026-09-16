import NotFound from "@/app/not-found";
import DeletePostButton from "@/components/DeletePostButton";
import { getPostById } from "@/lib/data/posts";
import { formatDate } from "@/lib/utils";
import { Metadata } from "next";
import Link from "next/link";

type Props = {
  params: Promise<{ postId: string }>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ postId: string }>;
}): Promise<Metadata> {
  const { postId } = await params;
  const post = await getPostById(postId);
  if (!post) return { title: "Post not found." };

  return { title: post.title, description: post.description ?? undefined };
}

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
          <div className="flex items-center gap-4">
            <Link
              href={`/posts/${post.id}/edit`}
              className="text-sm text-accent hover:underline"
            >
              Edit
            </Link>
            <DeletePostButton postId={post.id} />
          </div>
        </div>
      </header>

      <div className="whitespace-pre-wrap text-ink/90 leading-relaxed">
        {post.content}
      </div>
    </article>
  );
}
