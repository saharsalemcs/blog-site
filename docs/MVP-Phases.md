# Blog MVP — Project Phases

Stack: Next.js (App Router, TypeScript) + Tailwind CSS + Supabase + React Hook Form + Zod + Server Actions

---

## Phase 0 — Project Setup

- [x] Create the Next.js app (`create-next-app`) with TypeScript, App Router, Tailwind
- [x] Create a Supabase project
- [x] Create the `posts` table (id, title, description, content, created_at, updated_at)
- [x] Enable RLS on the `posts` table with public (permissive) policies for select/insert/update/delete
- [x] Install dependencies: `@supabase/supabase-js`, `@supabase/ssr`, `react-hook-form`, `zod`, `@hookform/resolvers`
- [x] Set up `.env.local` with Supabase URL and anon key
- [x] Create the folder structure (`lib/data`, `lib/actions`, `lib/schemas`, `lib/supabase`, `components`)

## Phase 1 — Read-Only Foundation (Home + Post Page)

- [x] Create `lib/supabase/server.ts` (Supabase client for Server Components)
- [x] Create `lib/data/posts.ts` with `getAllPosts()` and `getPostById(id)`
- [x] Build `app/layout.tsx` (shared header/footer)
- [x] Build `app/page.tsx` (Home) — list all posts using `getAllPosts()`
- [x] Build `components/PostCard.tsx` for displaying a post preview
- [x] Build `app/posts/[id]/page.tsx` — display a single post using `getPostById()`
- [x] Handle "post not found" case (`notFound()`)

## Phase 2 — Zod Schema + Shared Form

- [x] Create `lib/schemas/post.ts` with the Zod schema (title, description, content)
- [x] Infer the TypeScript type from the schema (`z.infer`)
- [x] Create `lib/supabase/client.ts` (Supabase client for Client Components, if needed)
- [x] Build `components/PostForm.tsx` ("use client") using `useForm` + `zodResolver`
- [x] Design the form to accept `defaultValues` and a `mode` (create/edit) as props

## Phase 3 — Create Post (Full Mutation Flow)

- [x] Create `lib/actions/posts.ts` with `createPost` Server Action (`"use server"`)
- [x] Validate input server-side with the same Zod schema
- [x] Insert the new post into Supabase
- [x] Call `revalidatePath` for the home page
- [x] Build `app/posts/new/page.tsx` using `PostForm`
- [x] Wire up `PostForm`'s `onSubmit` to call `createPost` manually (not via `action={}`)
- [x] Handle success (redirect/`router.push`) and server-side errors (`setError`)
- [x] Add `formState.isSubmitting` loading state on the submit button

## Phase 4 — Edit Post (Reuse the Form)

- [x] Add `updatePost` Server Action in `lib/actions/posts.ts`
- [x] Bind/pass the post `id` to the action alongside form data
- [x] Validate server-side, update the row in Supabase
- [x] Call `revalidatePath` for both the post page and the home page
- [x] Build `app/posts/[id]/edit/page.tsx` — fetch the post, pass `defaultValues` to `PostForm`
- [x] Confirm `PostForm` correctly switches behavior between create/edit mode
- [x] Test the full error path: invalid data → same page, error shown, data preserved

## Phase 5 — Delete Post

- [x] Add `deletePost` Server Action in `lib/actions/posts.ts`
- [x] Call `revalidatePath` after deletion
- [x] Build `components/DeletePostButton.tsx` ("use client") with a confirm step
- [x] Wire the button to call `deletePost` and redirect/refresh on success
- [x] Add the delete button to the post page and/or post cards

## Phase 6 — Polish & Review

- [ ] Review error handling consistency across all 3 mutations (create/update/delete)
- [ ] Review loading states across all forms/buttons
- [x] Basic styling pass with Tailwind (spacing, typography, responsive check)
- [ ] Manual test of all 5 features end-to-end
- [ ] (Optional) Deploy to Vercel
