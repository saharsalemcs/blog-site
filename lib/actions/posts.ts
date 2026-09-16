"use server";

import { revalidatePath } from "next/cache";
import { postSchema, type PostInput } from "../schemas/post";
import { createClient } from "../supabase/server";
import { redirect } from "next/navigation";

export async function createPost(data: PostInput) {
  const parsed = postSchema.safeParse(data);
  // const result = mySchema.safeParse(dataToValidate);
  //   {
  //   success: true,
  //   data: { /* البيانات النظيفة والمفحوصة بنجاح */ }
  // }

  // {
  //   success: false,
  //   error: { /* كائن يحتوي على جميع أخطاء التحقق تفصيلياً */ }
  // }
  if (!parsed.success) {
    console.log(parsed.error);
    console.log(parsed.error.issues);
    return { error: "Invalid data. Please check the form and try again." };
  }

  const supabase = await createClient();

  const { data: post, error } = await supabase
    .from("posts")
    .insert({
      title: parsed.data.title,
      description: parsed.data.description || null,
      content: parsed.data.content,
    })
    .select("id")
    .single();

  if (error) {
    console.error("Error creating post:", error);
    return { error: "Something went wrong. Please try again." };
    //     if (result?.error) {
    //   setError("root", { message: result.error });
    // }  عشان اقدر استخدمها ف الفورم كدا
  }

  revalidatePath("/");
  redirect(`/posts/${post.id}`);
}
export async function updatePost(id: string, data: PostInput) {
  const parsed = postSchema.safeParse(data);

  if (!parsed.success) {
    console.log(parsed.error);
    console.log(parsed.error.issues);
    return { error: "Invalid data. Please check the form and try again." };
  }

  const supabase = await createClient();
  const { error } = await supabase
    .from("posts")
    .update({
      title: parsed.data.title,
      description: parsed.data.description || null,
      content: parsed.data.content,
    })
    .eq("id", id);

  if (error) {
    console.error("Error updating post:", error);
    return { error: "Something went wrong. Please try again." };
  }

  revalidatePath("/");
  revalidatePath(`/posts/${id}`);
  redirect(`/posts/${id}`);
}

export async function deletePost(id: string) {
  const supabase = await createClient();

  const { error } = await supabase.from("posts").delete().eq("id", id);

  if (error) {
    console.error("Error deleting post:", error);
    return { error: "Something went wrong. Please try again." };
  }

  revalidatePath("/");
  redirect("/");
}
