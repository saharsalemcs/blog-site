"use client";

import { deletePost } from "@/lib/actions/posts";
import { useState } from "react";

export default function DeletePostButton({ postId }: { postId: string }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleDelete() {
    const confirmed = confirm(
      "Are you sure you want to delete this post? This can't be undone.",
    );
    if (!confirmed) return;

    setIsDeleting(true);
    setError(null);

    const deleteResult = await deletePost(postId);
    if (deleteResult?.error) {
      setError(deleteResult.error);
      setIsDeleting(false);
    }
  }
  return (
    <div>
      <button
        disabled={isDeleting}
        onClick={handleDelete}
        className="text-sm text-red-700 hover:underline disabled:opacity-50"
      >
        {isDeleting ? "Deleting..." : "Delete"}
      </button>
      {error && <p className="mt-1 text-sm text-red-700">{error}</p>}
    </div>
  );
}
