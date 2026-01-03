#!/usr/bin/env node

/**
 * Sitemap Generator Script
 * 
 * This script generates a sitemap.xml file in the public directory.
 * Run with: node scripts/generate-sitemap.js
 * 
 * Or add to package.json scripts: "generate-sitemap": "node scripts/generate-sitemap.js"
 */

const fs = require('fs');
const path = require('path');

const sitemapData = [
  {
    url: 'https://kishandr.online/',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: '1.0',
    description: 'Homepage'
  },
  {
    url: 'https://kishandr.online/#about',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: '0.9',
    description: 'About Section'
  },
  {
    url: 'https://kishandr.online/#skills',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: '0.9',
    description: 'Skills Section'
  },
  {
    url: 'https://kishandr.online/#experience',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: '0.9',
    description: 'Experience Section'
  },
  {
    url: 'https://kishandr.online/#projects',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: '0.9',
    description: 'Projects Section'
  },
  {
    url: 'https://kishandr.online/#education',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: '0.8',
    description: 'Education Section'
  },
  {
    url: 'https://kishandr.online/#contact',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: '0.8',
    description: 'Contact Section'
  }
];

const generateSitemapXML = () => {
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>\n';
  const urlsetOpen = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  const urlsetClose = '</urlset>';
  
  const urls = sitemapData.map((item) => {
    return `  <!-- ${item.description} -->
  <url>
    <loc>${item.url}</loc>
    <lastmod>${item.lastmod}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>`;
  }).join('\n\n');
  
  return xmlHeader + urlsetOpen + '\n' + urls + '\n' + urlsetClose;
};

// Generate sitemap
const sitemapXML = generateSitemapXML();

// Write to public directory
const publicDir = path.join(__dirname, '..', 'public');
const sitemapPath = path.join(publicDir, 'sitemap.xml');

fs.writeFileSync(sitemapPath, sitemapXML, 'utf8');

console.log('✅ Sitemap generated successfully!');
console.log(`📄 Location: ${sitemapPath}`);
console.log(`📊 Total URLs: ${sitemapData.length}`);

