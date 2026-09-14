import { getAllPosts } from "@/lib/data/posts";
import PostCard from "@/components/PostCard";

export default async function Home() {
  const posts = await getAllPosts();

  if (posts.length === 0) {
    return (
      <div className="text-center text-muted">
        <p>No posts yet.</p>
      </div>
    );
  }

  return (
    <div>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          id={post.id}
          title={post.title}
          description={post.description}
          createdAt={post.created_at}
        />
      ))}
    </div>
  );
}
