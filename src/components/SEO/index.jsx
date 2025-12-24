import { Helmet } from 'react-helmet-async'
import { Bio } from '../../data/constants'

const SEO = ({ title, description, image, url }) => {
  const defaultTitle = `${Bio.name} - Frontend Developer & Software Engineer | Portfolio`
  const defaultDescription = "Kishan D R (kidhandr) - Frontend Developer at Matters.AI | Software Engineer based in Channarayapatna specializing in React, TypeScript, and Angular. Explore my portfolio for projects, skills, and experience."
  const defaultImage = "https://kishandr.online/aml.png"
  const defaultUrl = "https://kishandr.online/"

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

