import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/navigation/breadcrumbs";
import { getAllBlogPosts } from "@/lib/blog";
import { SITE_DOMAIN } from "@/lib/config";
import { ArrowRightIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "1031 Exchange Blog | Articles and Resources",
  description:
    "Educational articles about 1031 exchanges, replacement property identification, timeline management, and compliance.",
  alternates: {
    canonical: `${SITE_DOMAIN}/blog`,
  },
};

type SearchParams = {
  page?: string;
};

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const { page = "1" } = await searchParams;
  const currentPage = parseInt(page, 10) || 1;
  const postsPerPageDesktop = 6;
  const postsPerPageMobile = 3;

  const allPosts = getAllBlogPosts();
  const totalPages = Math.ceil(
    allPosts.length / postsPerPageDesktop
  );

  const startIndex = (currentPage - 1) * postsPerPageDesktop;
  const endIndex = startIndex + postsPerPageDesktop;
  const posts = allPosts.slice(startIndex, endIndex);

  return (
    <div className="min-h-screen bg-[#F5F3EF]">
      <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-8 sm:px-10 lg:px-16">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
          ]}
        />

        <section className="space-y-10 pt-8">
          <header className="max-w-3xl space-y-4">
            <h1 className="font-playfair text-4xl font-bold text-[#2A2A2A] sm:text-5xl">
              Blog
            </h1>
            <p className="text-base text-[#2A2A2A]/75 sm:text-lg">
              Educational articles about 1031 exchanges, replacement property
              identification, and compliance.
            </p>
          </header>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col justify-between rounded-2xl border border-white/70 bg-white/70 p-6 shadow-[0_12px_40px_rgba(24,24,24,0.07)] transition hover:border-[#E6A445]/40 hover:shadow-[0_18px_48px_rgba(24,24,24,0.10)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006E7F]"
              >
                <div>
                  <h2 className="font-inter text-xl font-medium text-[#2A2A2A]">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-sm text-[#2A2A2A]/75">
                    {post.excerpt}
                  </p>
                  {post.publishedAt && (
                    <time
                      dateTime={post.publishedAt}
                      className="mt-4 block text-xs text-[#2A2A2A]/60"
                    >
                      {new Date(post.publishedAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  )}
                </div>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#006E7F]">
                  Read more
                  <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>

          {totalPages > 1 && (
            <nav
              aria-label="Blog pagination"
              className="flex items-center justify-center gap-4"
            >
              {currentPage > 1 && (
                <Link
                  href={`/blog?page=${currentPage - 1}`}
                  className="rounded-full border border-white/70 bg-white/70 px-4 py-2 text-sm font-medium text-[#2A2A2A] transition hover:border-[#E6A445]/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006E7F]"
                >
                  Previous
                </Link>
              )}
              <span className="text-sm text-[#2A2A2A]/75">
                Page {currentPage} of {totalPages}
              </span>
              {currentPage < totalPages && (
                <Link
                  href={`/blog?page=${currentPage + 1}`}
                  className="rounded-full border border-white/70 bg-white/70 px-4 py-2 text-sm font-medium text-[#2A2A2A] transition hover:border-[#E6A445]/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006E7F]"
                >
                  Next
                </Link>
              )}
            </nav>
          )}

          <div className="rounded-3xl border border-white/70 bg-white/90 p-10 shadow-[0_32px_120px_rgba(24,24,24,0.08)]">
            <div className="space-y-6 text-center">
              <h2 className="font-playfair text-3xl font-bold text-[#2A2A2A]">
                Ready to discuss your exchange?
              </h2>
              <p className="text-base text-[#2A2A2A]/75">
                Connect with our team to discuss your 1031 exchange needs and replacement property objectives.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E6A445] px-6 py-3 text-base font-semibold text-[#2A2A2A] transition hover:bg-[#C88735] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006E7F]"
              >
                Contact Us
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

