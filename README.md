# My Blog

A simple blog built as a **learning project** to practice Next.js hands-on — mainly Server Actions, mutations, and the App Router. This isn't meant to be a polished product; it's a sandbox for understanding how the pieces fit together.

## Stack

- Next.js (App Router, TypeScript)
- Tailwind CSS
- Supabase (Postgres)
- React Hook Form + Zod
- Server Actions

## Features

- View all posts (Home page)
- View a single post
- Create a post
- Edit a post
- Delete a post

## Project Structure

```
app/            → pages and routes
components/     → shared UI components
lib/data/       → read-only Supabase queries
lib/actions/    → Server Actions (create/update/delete)
lib/schemas/    → Zod schemas
lib/supabase/   → Supabase client setup
```

## Notes

This project has no authentication — Row Level Security is enabled with public policies for learning purposes only. Not meant for production use as-is.
