import { Helmet } from "react-helmet-async";
import { SITE_CONFIG, PageSEO } from "@/lib/seo-config";

interface SEOHeadProps {
  page: PageSEO;
  schema?: object[];
}

export function SEOHead({ page, schema = [] }: SEOHeadProps) {
  const fullUrl = `${SITE_CONFIG.url}${page.path}`;
  const imageUrl = page.image 
    ? `${SITE_CONFIG.url}${page.image}` 
    : `${SITE_CONFIG.url}${SITE_CONFIG.defaultImage}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{page.title}</title>
      <meta name="title" content={page.title} />
      <meta name="description" content={page.description} />
      <meta name="author" content={SITE_CONFIG.author} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Robots */}
      {page.noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={page.title} />
      <meta property="og:description" content={page.description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content={SITE_CONFIG.name} />
      <meta property="og:locale" content={SITE_CONFIG.locale} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={page.title} />
      <meta name="twitter:description" content={page.description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:site" content={SITE_CONFIG.twitterHandle} />
      
      {/* Schema.org JSON-LD */}
      {schema.map((schemaItem, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schemaItem)}
        </script>
      ))}
    </Helmet>
  );
}
