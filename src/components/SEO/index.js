import { Helmet } from 'react-helmet-async'
import { Bio } from '../../data/constants'

const SEO = ({ title, description, image, url }) => {
  const defaultTitle = `${Bio.name} - Frontend Developer & Software Engineer Portfolio`
  const defaultDescription = "Frontend Developer & Software Engineer specializing in React, TypeScript, Angular, and modern web technologies. Explore my projects, skills, and experience."
  const defaultImage = "https://kishandr15.github.io/aml.png"
  const defaultUrl = "https://kishandr15.github.io/"

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: image || defaultImage,
    url: url || defaultUrl,
  }

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      
      {/* Open Graph */}
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      
      {/* Canonical */}
      <link rel="canonical" href={seo.url} />
    </Helmet>
  )
}

export default SEO

