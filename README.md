## LavaLab Final Round Dev Challenge

Based on the provided Figma Mockup:
https://www.figma.com/design/JRzzLjCpKp7XIHfo65SC90/S-26-Dev-Challenge?node-id=0-1&t=UPF9Ohx7yeAVfFZw-1

Hosted on:
https://s26-dev-challenge.vercel.app/

## Tech Stack

### Framework: Next.js (App Router)

**Justification:** detailed routing, server-side rendering for performance/SEO, and easy integration with Vercel for deployment.

### Backend & Auth: Supabase (PostgreSQL)

**Justification:** Provides an instant, scalable PostgreSQL database and seamless Authentication handling (Google OAuth). It simplifies backend complexity, allowing focus on frontend logic.

### Styling: Tailwind CSS & Shadcn UI

**Justification:** Tailwind allows for rapid, pixel-perfect styling directly in markup. Shadcn UI (built on Radix primitives) provides accessible, unstyled components that are easily customizable to match the Figma design.

## Features

- **Responsive Landing Page**: Pixel-perfect implementation of Hero, Shop, and Services sections.
- **Authentication**: Secure Google OAuth login using Supabase Auth.
- **Persistent Session State**: UI adapts based on login status (e.g., changes "Sign In" to "My Account").
- **Interactive UI**:
  - **Cart Drawer**: Smooth drawer animation for cart interactions.
  - **Login Modal**: Context-aware login dialog.
  - **Filter Logic**: URL-based filtering for shop items.
- **Custom Routing**: Custom 404 page that preserves the main application layout.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
