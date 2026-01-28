import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { SITE_CONFIG, getBreadcrumbSchema } from "@/lib/seo-config";
import { Helmet } from "react-helmet-async";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  // Build schema items with full URLs
  const schemaItems = [
    { name: "Home", url: SITE_CONFIG.url },
    ...items.map((item) => ({
      name: item.label,
      url: item.href ? `${SITE_CONFIG.url}${item.href}` : SITE_CONFIG.url,
    })),
  ];

  const breadcrumbSchema = getBreadcrumbSchema(schemaItems);

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>
      <nav 
        aria-label="Breadcrumb" 
        className="container mx-auto px-4 py-3 text-sm"
      >
        <ol className="flex items-center flex-wrap gap-1">
          <li className="flex items-center">
            <Link 
              to="/" 
              className="text-muted-foreground hover:text-brand-600 transition-colors flex items-center gap-1"
              aria-label="Home"
            >
              <Home className="w-4 h-4" />
              <span className="sr-only sm:not-sr-only">Home</span>
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              <ChevronRight className="w-4 h-4 text-muted-foreground mx-1" aria-hidden="true" />
              {item.href && index < items.length - 1 ? (
                <Link 
                  to={item.href} 
                  className="text-muted-foreground hover:text-brand-600 transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-foreground font-medium" aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
