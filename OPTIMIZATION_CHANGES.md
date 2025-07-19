# Landing Site Optimization and Fixes

This document outlines the optimizations and fixes implemented in the landing site project, following a "Where/What/Why" format.

## 1. Security

*   **Where:** `app/api/pexels/route.ts`, `app/gallery/page.tsx`, `.env.local`
*   **What:** Created a server-side API route to handle Pexels API requests and moved the API key to a `.env.local` file.
*   **Why:** To fix a critical security vulnerability that exposed the Pexels API key on the client-side, preventing unauthorized use.

## 2. Performance Optimization

*   **Where:** `public/` directory, `app/components/BlogPostCard.tsx`
*   **What:** Compressed all PNG images and updated the `BlogPostCard` component to use the `next/image` component.
*   **Why:** To reduce image file sizes and enable lazy loading, significantly improving page load times and overall performance.

*   **Where:** `app/components/PromptInput.tsx`
*   **What:** Refactored the component to simplify state management and remove unnecessary `useEffect` hooks.
*   **Why:** To make the code more efficient, reduce re-renders, and improve the maintainability of the component.

*   **Where:** `app/components/FontShowcase.tsx`, `app/lib/fonts.ts`
*   **What:** Moved the large `fonts` array from the component to a separate, reusable file.
*   **Why:** To prevent the array from being recreated on every render, which improves performance and memory usage.

*   **Where:** `app/components/Hero.tsx`
*   **What:** Replaced the background video with a more optimized version and added a `poster` image.
*   **Why:** To improve the loading performance of the hero section and provide a better user experience while the video is loading.

*   **Where:** `app/layout.tsx`, `app/lib/fonts.ts`
*   **What:** Removed direct Google Fonts loading and implemented the `next/font` module for optimized font delivery.
*   **Why:** To allow Next.js to automatically optimize font loading, which improves the First Contentful Paint (FCP) and overall application performance.

## 3. Bug Fixes

*   **Where:** `app/blog/[slug]/page.tsx`, `app/blog/page.tsx`, `app/lib/posts.ts`
*   **What:** Created a dynamic route for blog posts, moved the `blogPosts` array to a reusable file, and updated the `next/image` components.
*   **Why:** To fix the 404 errors on the blog post links and resolve the legacy warnings from the `next/image` component.

*   **Where:** `app/pricing/page.tsx`
*   **What:** Updated the "Start Free Trial" button links to point to the `/demo` page.
*   **Why:** To fix the 404 errors and ensure that users are directed to the correct page.

*   **Where:** `app/contact/page.tsx`, `app/pricing/page.tsx`
*   **What:** Created a new contact page and updated the "Contact Sales" button links.
*   **Why:** To fix the 404 errors and provide a functional contact page for users.

## 4. New Features

*   **Where:** `app/components/AppBar.tsx`
*   **What:** Implemented a scroll-activated background color and text color change for the navigation bar.
*   **Why:** To improve the user experience by making the navigation bar more visible and readable as the user scrolls.

## 5. Deployment

*   **Where:** Render Dashboard
*   **What:** Provided the correct build and start commands for deploying a Next.js application.
*   **Why:** To ensure that the project builds and deploys successfully on Render.
    *   **Build command:** `npm install && npm run build`
    *   **Start command:** `npm start`