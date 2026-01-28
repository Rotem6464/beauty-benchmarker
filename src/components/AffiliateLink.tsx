import { ExternalLink } from "lucide-react";
import { trackOutboundClick } from "@/lib/analytics";

interface AffiliateLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  productName?: string;
  showIcon?: boolean;
}

export function AffiliateLink({ 
  href, 
  children, 
  className = "", 
  productName = "product",
  showIcon = false 
}: AffiliateLinkProps) {
  const handleClick = () => {
    trackOutboundClick(href, productName);
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow sponsored noopener noreferrer"
      onClick={handleClick}
      className={className}
      aria-label={`Check price for ${productName} (opens in new tab, affiliate link)`}
    >
      {children}
      {showIcon && <ExternalLink className="w-3 h-3 ml-1 inline" aria-hidden="true" />}
    </a>
  );
}
