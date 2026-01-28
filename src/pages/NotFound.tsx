import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Home, Search } from "lucide-react";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    // Only log 404 errors in development to avoid exposing routing patterns in production
    if (import.meta.env.DEV) {
      console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>Page Not Found - BestLiftingCream.com</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="description" content="The page you're looking for doesn't exist. Find the best lifting creams at BestLiftingCream.com." />
      </Helmet>
      
      <SiteHeader />
      
      <main className="flex-1 flex items-center justify-center py-16 px-4">
        <div className="text-center max-w-md">
          <div className="text-8xl font-bold text-brand-200 mb-4">404</div>
          <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
          <p className="text-muted-foreground mb-8">
            Sorry, the page you're looking for doesn't exist or has been moved. 
            Let's get you back on track to finding the perfect lifting cream.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/">
                <Home className="w-4 h-4 mr-2" aria-hidden="true" />
                Go Home
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/#products">
                <Search className="w-4 h-4 mr-2" aria-hidden="true" />
                Browse Products
              </Link>
            </Button>
          </div>
          
          <div className="mt-8 pt-8 border-t">
            <p className="text-sm text-muted-foreground mb-4">Popular pages:</p>
            <nav className="flex flex-wrap justify-center gap-4 text-sm" aria-label="Popular pages">
              <Link to="/" className="text-brand-600 hover:underline">Home</Link>
              <Link to="/how-we-test" className="text-brand-600 hover:underline">How We Test</Link>
              <Link to="/experts" className="text-brand-600 hover:underline">Our Experts</Link>
              <Link to="/contact" className="text-brand-600 hover:underline">Contact</Link>
            </nav>
          </div>
        </div>
      </main>
      
      <SiteFooter />
    </div>
  );
};

export default NotFound;
