import React from 'react';

/**
 * Blog posts registry.
 * To add a new post:
 * 1. Create a .mdx file in src/data/blog/
 * 2. Add an entry here with slug, meta, and lazy-loaded component
 */
export const blogPosts = [
  {
    slug: 'rethinking-enterprise-reporting',
    title: 'Rethinking Enterprise Reporting from First Principles',
    description: 'How I rebuilt PDF report generation at Matters.AI - reducing development time from 30 days to 1-2 days during a 15-day hackathon.',
    date: 'Feb 2026',
    readTime: '6 min read',
    tags: ['System Design', 'PDF Service', 'Hackathon'],
    cover: '/blog/images/kishan-dr-matters-ai.webp',
    component: React.lazy(() => import('./rethinking-enterprise-reporting.mdx')),
  },
];
