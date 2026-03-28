import React, { Suspense } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { blogPosts } from '../../data/blog';
import BlogLayout from './BlogLayout';

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/" replace />;
  }

  const MDXContent = post.component;

  return (
    <BlogLayout meta={post}>
      <Suspense fallback={<div style={{ minHeight: '50vh' }} />}>
        <MDXContent />
      </Suspense>
    </BlogLayout>
  );
};

export default BlogPost;
