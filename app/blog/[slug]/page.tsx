import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumbs } from "@/components/navigation/breadcrumbs";
import { getBlogPostBySlug, getAllBlogPosts, type BlogPostSection } from "@/lib/blog";
import { COMPANY_NAME, SITE_DOMAIN } from "@/lib/config";
import { ArrowRightIcon } from "@/components/icons";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.seoTitle || post.title,
    description: post.excerpt,
    alternates: {
      canonical: post.canonicalUrl || `${SITE_DOMAIN}/blog/${slug}`,
    },
    openGraph: {
      title: post.seoTitle || post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      images: post.heroImage
        ? [
            {
              url: `${SITE_DOMAIN}${post.heroImage.src}`,
              width: 1200,
              height: 630,
              alt: post.heroImage.alt,
            },
          ]
        : [],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#F5F3EF]">
      <div className="relative mx-auto max-w-4xl px-6 pb-24 pt-8 sm:px-10 lg:px-16">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: post.title, href: `/blog/${slug}` },
          ]}
        />

        <article className="space-y-10 pt-8">
          <header className="space-y-4">
            <h1 className="font-playfair text-4xl font-bold text-[#2A2A2A] sm:text-5xl">
              {post.title}
            </h1>
            {post.excerpt && (
              <p className="text-base text-[#2A2A2A]/75 sm:text-lg">
                {post.excerpt}
              </p>
            )}
            {post.publishedAt && (
              <time
                dateTime={post.publishedAt}
                className="block text-sm text-[#2A2A2A]/60"
              >
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            )}
          </header>

          {post.heroImage && (
            <div className="relative aspect-video overflow-hidden rounded-2xl">
              <img
                src={post.heroImage.src}
                alt={post.heroImage.alt}
                className="h-full w-full object-cover"
              />
            </div>
          )}

          <div className="prose prose-lg max-w-none space-y-6 text-[#2A2A2A]">
            {post.content.map((section, idx) => (
              <BlogSection key={idx} section={section} />
            ))}
          </div>

          <div className="flex flex-col items-center gap-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#006E7F] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006E7F]"
            >
              Back to Blog
              <ArrowRightIcon className="h-4 w-4" />
            </Link>

            <div className="w-full rounded-3xl border border-white/70 bg-white/90 p-10 shadow-[0_32px_120px_rgba(24,24,24,0.08)]">
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
          </div>
        </article>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.publishedAt,
            dateModified: post.updatedAt || post.publishedAt,
            author: {
              "@type": "Person",
              name: post.author.name,
            },
            publisher: {
              "@type": "Organization",
              name: COMPANY_NAME,
              url: SITE_DOMAIN,
            },
            image: post.heroImage
              ? `${SITE_DOMAIN}${post.heroImage.src}`
              : undefined,
            url: `${SITE_DOMAIN}/blog/${slug}`,
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${SITE_DOMAIN}/blog/${slug}`,
            },
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: SITE_DOMAIN,
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Blog",
                  item: `${SITE_DOMAIN}/blog`,
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: post.title,
                  item: `${SITE_DOMAIN}/blog/${slug}`,
                },
              ],
            },
          }),
        }}
      />
    </div>
  );
}

function BlogSection({ section }: { section: BlogPostSection }) {
  switch (section.type) {
    case "heading":
      const HeadingTag = `h${section.level}` as "h2" | "h3" | "h4";
      return (
        <HeadingTag className="font-playfair text-2xl font-bold text-[#2A2A2A]">
          {section.text}
        </HeadingTag>
      );
    case "paragraph":
      return (
        <p className="text-base leading-relaxed text-[#2A2A2A]">
          {section.text}
        </p>
      );
    case "list":
      const ListTag = section.ordered ? "ol" : "ul";
      return (
        <ListTag className="space-y-2 pl-6">
          {section.items.map((item, idx) => (
            <li key={idx} className="text-base text-[#2A2A2A]">
              {item}
            </li>
          ))}
        </ListTag>
      );
    case "quote":
      return (
        <blockquote className="border-l-4 border-[#E6A445] pl-4 italic text-[#2A2A2A]/80">
          <p className="text-base">{section.text}</p>
          {section.source && (
            <cite className="mt-2 block text-sm text-[#2A2A2A]/60">
              {section.source}
            </cite>
          )}
        </blockquote>
      );
    default:
      return null;
  }
}

