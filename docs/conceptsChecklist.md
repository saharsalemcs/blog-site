# Next.js Concepts Checklist — Blog MVP

Stack: Next.js (App Router, TypeScript) + Tailwind CSS + Supabase + React Hook Form + Zod + Server Actions

Scope: 5 core features — Home page, Post page, Create post, Edit post, Delete post

---

## Routing (App Router)

- [ ] Basic file-based routing (`app/page.tsx`)
- [ ] Dynamic routes (`app/posts/[id]/page.tsx`)
- [ ] Nested routes (`app/posts/[id]/edit/page.tsx`)
- [ ] Simple static routes (`app/posts/new/page.tsx`)

## Rendering Model

- [ ] Difference between Server Components (default) and Client Components (`"use client"`)
- [ ] When to convert a component to Client (forms, anything with state/interactivity)
- [ ] Keeping the client boundary as small as possible (e.g. post page stays server, only the Delete button is client)

## Data Fetching

- [ ] Fetching data directly inside a Server Component (async/await, no useEffect)
- [ ] Reading route params (`params.id`) in a dynamic route
- [ ] Separating data-access logic (`lib/data/`) from the component itself

## Mutations (core focus of this project)

- [ ] Basic Server Actions (`"use server"`)
- [ ] Calling a Server Action manually from a client function (instead of via `action={}` directly)
- [ ] Passing extra parameters to an action (like the post id) besides the form data
- [ ] Difference between a Server Action that returns a structured response vs. one that throws

## Caching & Revalidation

- [ ] `revalidatePath` after every mutation (create/update/delete)
- [ ] Understanding when Next.js caches a page and when you need to force a refresh

## Navigation

- [ ] `redirect()` from `next/navigation` (server-side)
- [ ] `useRouter` (`router.push`, `router.refresh`) from the client after a successful mutation

## Layouts & Structure

- [ ] Shared root layout (`app/layout.tsx`)
- [ ] Organizing code outside `app/` (`lib/`, `components/`) in a way that follows conventions

## Environment & Config

- [ ] Using `.env.local` and the difference between a regular variable and a `NEXT_PUBLIC_` one
- [ ] Difference between the Supabase client on the server vs. the browser (`lib/supabase/server.ts` vs `client.ts`)

## Things That Come Naturally But Deserve Attention

- [ ] Loading UI during submit (`formState.isSubmitting` from RHF instead of `useFormStatus`)
- [ ] Displaying server errors inside the same form (`setError` from RHF)
- [ ] TypeScript types inferred automatically from the Zod schema (`z.infer`)
