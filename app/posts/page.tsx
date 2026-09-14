import Link from "next/link";
import { Post } from "../types";

export default async function PostsPage() {
  // const res = await fetch("https://dummyjson.com/posts");
  // const data = await res.json();
  // const posts = data.posts;

  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h1 className="text-center font-bold text-4xl text-zinc-950">Posts</h1>
        <ul>
          {/* {posts.map((post: Post) => (
            <li key={post.id}>
              <div>
                <Link href={`/posts/${post.id}`}>
                  {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
                </Link>
              </div>
            </li>
          ))} */}
        </ul>
      </section>
    </div>
  );
}
