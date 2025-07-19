import { blogPosts } from "@/app/lib/posts";
import { notFound } from "next/navigation";
import Image from "next/image";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.link.split("/").pop(),
  }));
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = blogPosts.find((p) => p.link.endsWith(params.slug));

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4">{post.title}</h1>
          <div className="flex items-center justify-center mb-8">
            <span className="text-sm text-gray-600 dark:text-gray-300">
              {post.date}
            </span>
            <span className="mx-2 text-gray-400">•</span>
            <span className="text-sm text-gray-600 dark:text-gray-300">
              {post.readTime} min read
            </span>
          </div>
          <div className="relative h-96 mb-8">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="prose dark:prose-invert max-w-none">
            <p>{post.excerpt}</p>
            {/* Add more content here */}
          </div>
        </div>
      </div>
    </div>
  );
}