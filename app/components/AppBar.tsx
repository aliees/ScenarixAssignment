"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function AppBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-white dark:bg-gray-900 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className={`text-xl font-bold transition-colors duration-300 ${
              scrolled ? "text-gray-900 dark:text-white" : "text-white"
            }`}
          >
            Magic Moments
          </Link>

          <div className="flex items-center space-x-8">
            <Link
              href="/"
              className={`transition-colors duration-300 ${
                scrolled
                  ? "text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white"
                  : "text-white hover:text-gray-200"
              }`}
            >
              Home
            </Link>
            <Link
              href="/gallery"
              className={`transition-colors duration-300 ${
                scrolled
                  ? "text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white"
                  : "text-white hover:text-gray-200"
              }`}
            >
              Gallery
            </Link>
            <Link
              href="/blog"
              className={`transition-colors duration-300 ${
                scrolled
                  ? "text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white"
                  : "text-white hover:text-gray-200"
              }`}
            >
              Blog
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
