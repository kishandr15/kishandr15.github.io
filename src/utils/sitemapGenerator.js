/**
 * Sitemap Generator Utility
 * 
 * This utility helps generate and maintain the sitemap.xml file.
 * Update the sitemapData array when adding new pages/sections.
 * 
 * To use: Run this script to generate an updated sitemap.xml
 */

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

/**
 * Generates XML sitemap string from sitemapData
 */
export const generateSitemapXML = () => {
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>\n';
  const urlsetOpen = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  const urlsetClose = '</urlset>';
  
  const urls = sitemapData.map(item => {
    return `  <url>
    <loc>${item.url}</loc>
    <lastmod>${item.lastmod}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>`;
  }).join('\n\n  <!-- ');
  
  // Add comments for better readability
  const urlsWithComments = sitemapData.map((item, index) => {
    const comment = index === 0 ? `  <!-- ${item.description} -->\n` : `  <!-- ${item.description} -->\n`;
    return comment + `  <url>
    <loc>${item.url}</loc>
    <lastmod>${item.lastmod}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>`;
  }).join('\n\n');
  
  return xmlHeader + urlsetOpen + '\n' + urlsWithComments + '\n' + urlsetClose;
};

/**
 * Updates lastmod date for a specific URL
 */
export const updateLastmod = (url, date = new Date()) => {
  const item = sitemapData.find(item => item.url === url);
  if (item) {
    item.lastmod = date.toISOString().split('T')[0];
    return true;
  }
  return false;
};

/**
 * Adds a new URL to the sitemap
 */
export const addUrl = (url, options = {}) => {
  const newItem = {
    url,
    lastmod: options.lastmod || new Date().toISOString().split('T')[0],
    changefreq: options.changefreq || 'monthly',
    priority: options.priority || '0.7',
    description: options.description || 'New Page'
  };
  
  if (!sitemapData.find(item => item.url === url)) {
    sitemapData.push(newItem);
    return true;
  }
  return false;
};

export default sitemapData;

