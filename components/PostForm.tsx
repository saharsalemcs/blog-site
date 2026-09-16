"use client";

import { useForm } from "react-hook-form";
import FormField from "./FormField";
import { type PostInput, postSchema } from "@/lib/schemas/post";
import { zodResolver } from "@hookform/resolvers/zod";

type PostFormProps = {
  defaultValues?: PostInput;
  onSubmit: (data: PostInput) => Promise<{ error?: string } | void>;
  submitLabel?: string;
};

const inputClass =
  "mt-1 w-full border border-border bg-paper px-3 py-2 text-ink focus:border-accent focus:outline-none";

export default function PostForm({
  defaultValues,
  onSubmit,
  submitLabel = "Save",
}: PostFormProps) {
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<PostInput>({
    resolver: zodResolver(postSchema),
    defaultValues: defaultValues ?? { title: "", description: "", content: "" },
  });

  async function onValid(data: PostInput) {
    const result = await onSubmit(data);

    if (result?.error) {
      setError("root", { message: result.error });
    }
  }

  return (
    <form onSubmit={handleSubmit(onValid)} className="flex flex-col gap-6">
      <FormField label="Title" htmlFor="title" error={errors.title}>
        <input
          id="title"
          type="text"
          {...register("title")}
          className={inputClass}
        />
      </FormField>
      <FormField
        label="Description"
        htmlFor="description"
        error={errors.description}
      >
        <input
          id="description"
          type="text"
          {...register("description")}
          className={inputClass}
        />
      </FormField>
      <FormField label="Content" htmlFor="content" error={errors.content}>
        <textarea
          id="content"
          rows={12}
          {...register("content")}
          className={inputClass}
        />
      </FormField>

      {errors.root && (
        <p className="text-sm text-red-700">{errors.root.message}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-fit bg-accent px-5 py-2 text-sm text-paper disabled:opacity-50 cursor-pointer"
      >
        {isSubmitting ? "Saving..." : submitLabel}
      </button>
    </form>
  );
}
