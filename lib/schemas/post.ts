import z from "zod";

export const postSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional().or(z.literal("")),
  content: z.string().min(1, "Content is required"),
});

export type PostInput = z.infer<typeof postSchema>;
