import NotFound from "@/app/not-found";
import PostForm from "@/components/PostForm";
import { updatePost } from "@/lib/actions/posts";
import { getPostById } from "@/lib/data/posts";

type EditPostProps = {
  params: Promise<{ postId: string }>;
};

export default async function EditPostPage({ params }: EditPostProps) {
  const { postId } = await params;
  const post = await getPostById(postId);

  if (!post) return <NotFound />;

  async function handleUpdate(data: Parameters<typeof updatePost>[1]) {
    "use server";
    return updatePost(postId, data);
  }

  return (
    <div>
      <h1 className="mb-8 font-serif text-3xl text-ink">Edit post</h1>

      <PostForm
        defaultValues={{
          title: post.title,
          description: post.description ?? "",
          content: post.content,
        }}
        onSubmit={handleUpdate}
        submitLabel="Save changes"
      />
    </div>
  );
}
