import NotFound from "@/app/not-found";

type PostPageParams = {
  params: Promise<{ postId: number }>;
};

export default async function PostPage({ params }: PostPageParams) {
  const { postId } = await params;

  const res = await fetch(`https://dummyjson.com/posts/${postId}`);
  const post = await res.json();

  if (!post.id) return <NotFound />;

  return (
    <article className="space-y-6">
      <div className="space-y-4">
        <h2> {post.title.charAt(0).toUpperCase() + post.title.slice(1)}</h2>
      </div>
    </article>
  );
}
