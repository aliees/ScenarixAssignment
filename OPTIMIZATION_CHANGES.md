# Landing Site Optimization and Fixes

This document outlines the optimizations and fixes implemented in the landing site project.

## 1. Security Vulnerability Fix

*   **Issue:** The Pexels API key was exposed on the client-side in the gallery page (`app/gallery/page.tsx`), posing a significant security risk.
*   **Fix:**
    *   Created a new server-side API route at `app/api/pexels/route.ts` to handle all requests to the Pexels API.
    *   The API key is now stored securely in a `.env.local` file and is only accessed on the server-side.
    *   The gallery page now fetches data from the new API route, preventing the API key from being exposed in the browser.

## 2. Image Optimization

*   **Issue:** Large, unoptimized images in the `public` directory were slowing down page load times.
*   **Fix:**
    *   Compressed all PNG images in the `public` directory using `imagemin-cli` with the `pngquant` plugin.
    *   Replaced the original images with their optimized versions, resulting in smaller file sizes and faster loading times.
    *   Updated the `BlogPostCard.tsx` component to use the `next/image` component, which enables lazy loading and automatic image optimization for blog post images.

## 3. Component Optimization

*   **Issue:** Several React components had opportunities for performance improvements.
*   **Fix:**
    *   **`PromptInput.tsx`:** Refactored the component to remove redundant state management and consolidated `useEffect` hooks, making the code more efficient and easier to maintain.
    *   **`FontShowcase.tsx`:** Moved the large `fonts` array from the component file to a separate file (`app/lib/fonts.ts`). This prevents the array from being recreated on every render, improving performance.

## 4. Video Optimization

*   **Issue:** The background video in the `Hero.tsx` component was not optimized for web playback.
*   **Fix:**
    *   Replaced the original video with a more compressed and optimized version.
    *   Added a `poster` image to the video element. The poster image is displayed while the video is loading, improving the user experience.

## 5. Code Cleanup and Font Optimization

*   **Issue:** The `layout.tsx` file was loading a large number of fonts directly from Google Fonts, which is inefficient.
*   **Fix:**
    *   Removed the direct font loading from the `layout.tsx` file.
    *   Used the `next/font` module to load the `Inter` font, allowing Next.js to optimize font loading and improve the overall performance of the application.

These changes have significantly improved the performance, security, and code quality of the landing site.

## 6. Bug Fixes

*   **Issue:** The blog post links were broken, leading to a 404 error page.
*   **Fix:**
    *   Created a dynamic route at `app/blog/[slug]/page.tsx` to handle individual blog posts.
    *   Moved the `blogPosts` array to a separate file (`app/lib/posts.ts`) to be reused by both the main blog page and the dynamic route.
    *   Updated the `next/image` components to use the latest properties, removing the legacy warnings from the terminal.
*   **Issue:** The "Start Free Trial" buttons on the pricing page were leading to a 404 error page.
*   **Fix:**
    *   Updated the `ctaLink` for the "House" and "Village" plans in `app/pricing/page.tsx` to point to the `/demo` page.
*   **Issue:** The "Contact Sales" buttons on the pricing page were leading to a 404 error page.
*   **Fix:**
    *   Created a new contact page at `app/contact/page.tsx`.

## 7. New Features

*   **Navbar background on scroll:** Added a feature to the navigation bar that gives it a background color when the user scrolls down the page. This improves the user experience by making the navigation bar more visible against the page content. The text color also changes to white when the page is not scrolled.