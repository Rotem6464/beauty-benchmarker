import { Link } from "react-router-dom";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-background border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-brand-600">
          BestLiftingCream.com
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-muted-foreground hover:text-brand-600 transition-colors">
            Home
          </Link>
          <Link to="/how-we-test" className="text-muted-foreground hover:text-brand-600 transition-colors">
            How We Test
          </Link>
          <Link to="/experts" className="text-muted-foreground hover:text-brand-600 transition-colors">
            Our Experts
          </Link>
          <Link to="/editorial-mission" className="text-muted-foreground hover:text-brand-600 transition-colors">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
