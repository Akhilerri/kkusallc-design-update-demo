import React from 'react';
import { BlogPost } from '../../../../shared/types/blog';
import { formatDate } from '../../lib/utils';

interface BlogGridProps {
  posts: BlogPost[];
  loading?: boolean;
  emptyMessage?: string;
}

const BlogGrid: React.FC<BlogGridProps> = ({ 
  posts, 
  loading = false, 
  emptyMessage = "No blog posts found." 
}) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 6 }).map((_, index) => (
          <BlogPostSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-500 text-lg">{emptyMessage}</div>
        <p className="text-gray-400 mt-2">Try adjusting your search or filters.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <BlogPostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  const handleClick = () => {
    // Navigate to blog post detail page
    window.location.href = `/blog/${post.slug}`;
  };

  return (
    <article 
      className="bg-card rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer group touch-manipulation border-2 border-card-border hover:border-primary/30"
      onClick={handleClick}
    >
      {/* Featured Image */}
      {post.featuredImage && (
        <div className="aspect-video overflow-hidden">
          <img
            src={post.featuredImage.url}
            alt={post.featuredImage.alt}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            loading="lazy"
            decoding="async"
          />
        </div>
      )}

      <div className="p-5 sm:p-6">
        {/* Category Badge */}
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-block px-3 py-1.5 text-xs font-semibold bg-primary text-primary-foreground rounded-full">
            {post.category}
          </span>
          {post.readingTime && (
            <span className="text-xs text-muted-foreground">
              {post.readingTime} min read
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-serif font-semibold text-card-foreground mb-3 group-hover:text-primary transition-colors duration-300 leading-tight">
          {post.title}
        </h3>

        {/* Excerpt */}
        {post.excerpt && (
          <p className="text-sm sm:text-base text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
            {post.excerpt}
          </p>
        )}

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="inline-block px-3 py-1 text-xs text-muted-foreground bg-secondary rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              >
                {tag}
              </span>
            ))}
            {post.tags.length > 3 && (
              <span className="text-xs text-muted-foreground">
                +{post.tags.length - 3} more
              </span>
            )}
          </div>
        )}

        {/* Author and Date */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-0 text-xs sm:text-sm text-muted-foreground">
          <div className="flex items-center">
            <span className="font-medium text-card-foreground">{post.author}</span>
          </div>
          <time dateTime={post.publishedAt?.toISOString()}>
            {post.publishedAt && formatDate(post.publishedAt)}
          </time>
        </div>

        {/* View Count */}
        {post.viewCount && (
          <div className="mt-2 text-xs text-muted-foreground">
            {post.viewCount.toLocaleString()} views
          </div>
        )}
      </div>
    </article>
  );
};

const BlogPostSkeleton: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
      {/* Image skeleton */}
      <div className="aspect-video bg-gray-200"></div>
      
      <div className="p-6">
        {/* Category and reading time skeleton */}
        <div className="flex items-center gap-2 mb-3">
          <div className="h-5 w-20 bg-gray-200 rounded-full"></div>
          <div className="h-4 w-16 bg-gray-200 rounded"></div>
        </div>

        {/* Title skeleton */}
        <div className="h-6 bg-gray-200 rounded mb-3"></div>
        <div className="h-6 bg-gray-200 rounded mb-3 w-3/4"></div>

        {/* Excerpt skeleton */}
        <div className="space-y-2 mb-4">
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
        </div>

        {/* Tags skeleton */}
        <div className="flex gap-2 mb-4">
          <div className="h-5 w-16 bg-gray-200 rounded"></div>
          <div className="h-5 w-20 bg-gray-200 rounded"></div>
          <div className="h-5 w-14 bg-gray-200 rounded"></div>
        </div>

        {/* Author and date skeleton */}
        <div className="flex items-center justify-between">
          <div className="h-4 w-24 bg-gray-200 rounded"></div>
          <div className="h-4 w-20 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default BlogGrid;