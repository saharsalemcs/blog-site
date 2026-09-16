# Next.js Concepts Checklist — Blog MVP

Stack: Next.js (App Router, TypeScript) + Tailwind CSS + Supabase + React Hook Form + Zod + Server Actions

Scope: 5 core features — Home page, Post page, Create post, Edit post, Delete post

---

## Routing (App Router)

- [x] Basic file-based routing (`app/page.tsx`)
- [x] Dynamic routes (`app/posts/[postId]/page.tsx`)
- [x] Nested routes (`app/posts/[postId]/edit/page.tsx`)
- [x] Simple static routes (`app/posts/new/page.tsx`)

## Rendering Model

- [x] Difference between Server Components (default) and Client Components (`"use client"`)
- [x] When to convert a component to Client (forms, anything with state/interactivity)
- [x] Keeping the client boundary as small as possible (e.g. post page stays server, only the Delete button is client)

## Data Fetching

- [x] Fetching data directly inside a Server Component (async/await, no useEffect)
- [x] Reading route params (`params.postId`) in a dynamic route
- [x] `params` as a `Promise` in modern Next.js — awaiting it before use
- [x] Separating data-access logic (`lib/data/`) from the component itself

## Mutations (core focus of this project)

- [x] Basic Server Actions (`"use server"`)
- [x] Calling a Server Action manually from a client function (instead of via `action={}` directly)
- [x] Passing extra parameters to an action (like the post id) besides the form data
- [x] Difference between a Server Action that returns a structured response vs. one that throws

## Caching & Revalidation

- [x] `revalidatePath` after every mutation (create/update/delete)
- [ ] Understanding when Next.js caches a page and when you need to force a refresh

## Navigation

- [x] `redirect()` from `next/navigation` (server-side)
- [ ] `useRouter` (`router.push`, `router.refresh`) from the client after a successful mutation

## Layouts & Structure

- [x] Shared root layout (`app/layout.tsx`)
- [x] Organizing code outside `app/` (`lib/`, `components/`) in a way that follows conventions

## Metadata, Loading & Error States

- [x] `generateMetadata` for dynamic, per-page titles/descriptions (`app/posts/[postId]/page.tsx`)
- [x] Title template in the root layout (`title: { default, template }`) so child pages don't repeat the site name
- [x] `app/loading.tsx` — automatic loading UI while a Server Component awaits data
- [x] `app/error.tsx` — error boundary (must be `"use client"`), with `reset()` to retry
- [x] `app/not-found.tsx` and the `notFound()` function — difference between an expected "not found" case and an unexpected error

## JavaScript/TypeScript Concepts That Came Up Along the Way

- [x] Closures — a nested function (like the inline Server Action in the edit page) remembers variables from the scope it was defined in (like `postId`), without them being passed in explicitly
- [x] Why an inline Server Action needs its own `"use server"` directive when it's defined inside a component, instead of at the top of the file

## Environment & Config

- [x] Using `.env.local` and the difference between a regular variable and a `NEXT_PUBLIC_` one
- [x] Difference between the Supabase client on the server vs. the browser (`lib/supabase/server.ts` vs `client.ts`)

## Things That Come Naturally But Deserve Attention

- [x] Loading UI during submit (`formState.isSubmitting` from RHF instead of `useFormStatus`)
- [x] Displaying server errors inside the same form (`setError` from RHF)
- [x] TypeScript types inferred automatically from the Zod schema (`z.infer`)
