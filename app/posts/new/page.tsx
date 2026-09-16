import PostForm from "@/components/PostForm";
import { createPost } from "@/lib/actions/posts";

export const metadata = { title: "New post" };

export default function NewPostPage() {
  return (
    <div>
      <h1 className="mb-8 font-serif text-3xl text-ink">New post</h1>
      <PostForm onSubmit={createPost} submitLabel="Publish" />
    </div>
  );
}
