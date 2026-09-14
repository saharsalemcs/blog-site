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

- [ ] Create `lib/supabase/server.ts` (Supabase client for Server Components)
- [ ] Create `lib/data/posts.ts` with `getAllPosts()` and `getPostById(id)`
- [ ] Build `app/layout.tsx` (shared header/footer)
- [ ] Build `app/page.tsx` (Home) — list all posts using `getAllPosts()`
- [ ] Build `components/PostCard.tsx` for displaying a post preview
- [ ] Build `app/posts/[id]/page.tsx` — display a single post using `getPostById()`
- [ ] Handle "post not found" case (`notFound()`)

## Phase 2 — Zod Schema + Shared Form

- [ ] Create `lib/schemas/post.ts` with the Zod schema (title, description, content)
- [ ] Infer the TypeScript type from the schema (`z.infer`)
- [ ] Create `lib/supabase/client.ts` (Supabase client for Client Components, if needed)
- [ ] Build `components/PostForm.tsx` ("use client") using `useForm` + `zodResolver`
- [ ] Design the form to accept `defaultValues` and a `mode` (create/edit) as props

## Phase 3 — Create Post (Full Mutation Flow)

- [ ] Create `lib/actions/posts.ts` with `createPost` Server Action (`"use server"`)
- [ ] Validate input server-side with the same Zod schema
- [ ] Insert the new post into Supabase
- [ ] Call `revalidatePath` for the home page
- [ ] Build `app/posts/new/page.tsx` using `PostForm`
- [ ] Wire up `PostForm`'s `onSubmit` to call `createPost` manually (not via `action={}`)
- [ ] Handle success (redirect/`router.push`) and server-side errors (`setError`)
- [ ] Add `formState.isSubmitting` loading state on the submit button

## Phase 4 — Edit Post (Reuse the Form)

- [ ] Add `updatePost` Server Action in `lib/actions/posts.ts`
- [ ] Bind/pass the post `id` to the action alongside form data
- [ ] Validate server-side, update the row in Supabase
- [ ] Call `revalidatePath` for both the post page and the home page
- [ ] Build `app/posts/[id]/edit/page.tsx` — fetch the post, pass `defaultValues` to `PostForm`
- [ ] Confirm `PostForm` correctly switches behavior between create/edit mode
- [ ] Test the full error path: invalid data → same page, error shown, data preserved

## Phase 5 — Delete Post

- [ ] Add `deletePost` Server Action in `lib/actions/posts.ts`
- [ ] Call `revalidatePath` after deletion
- [ ] Build `components/DeletePostButton.tsx` ("use client") with a confirm step
- [ ] Wire the button to call `deletePost` and redirect/refresh on success
- [ ] Add the delete button to the post page and/or post cards

## Phase 6 — Polish & Review

- [ ] Review error handling consistency across all 3 mutations (create/update/delete)
- [ ] Review loading states across all forms/buttons
- [ ] Basic styling pass with Tailwind (spacing, typography, responsive check)
- [ ] Manual test of all 5 features end-to-end
- [ ] (Optional) Deploy to Vercel
