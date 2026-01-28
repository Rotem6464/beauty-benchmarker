// Analytics utilities for GA4 event tracking

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

// Check if GA is loaded
const isGALoaded = () => typeof window !== "undefined" && typeof window.gtag === "function";

// Track outbound/affiliate link clicks
export const trackOutboundClick = (url: string, productName?: string) => {
  if (!isGALoaded()) return;
  
  try {
    const destination = new URL(url).hostname;
    window.gtag?.("event", "outbound_click", {
      event_category: "outbound",
      event_label: url,
      destination_domain: destination,
      product_name: productName || "unknown",
      transport_type: "beacon",
    });
  } catch {
    // Invalid URL, skip tracking
  }
};

// Track CTA button clicks
export const trackCTAClick = (ctaName: string, pagePath: string, ctaPosition?: string) => {
  if (!isGALoaded()) return;
  
  window.gtag?.("event", "CTA_click", {
    event_category: "engagement",
    cta_name: ctaName,
    page_path: pagePath,
    cta_position: ctaPosition || "unknown",
  });
};

// Track scroll depth milestones
export const initScrollDepthTracking = () => {
  if (typeof window === "undefined") return;
  
  const milestones = [25, 50, 75, 90, 100];
  const tracked = new Set<number>();
  
  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (scrollHeight <= 0) return;
    
    const scrollPercent = Math.round((window.scrollY / scrollHeight) * 100);
    
    for (const milestone of milestones) {
      if (scrollPercent >= milestone && !tracked.has(milestone)) {
        tracked.add(milestone);
        
        if (isGALoaded()) {
          window.gtag?.("event", "scroll_depth", {
            event_category: "engagement",
            percent_scrolled: milestone,
            page_path: window.location.pathname,
          });
        }
      }
    }
  };
  
  window.addEventListener("scroll", handleScroll, { passive: true });
  
  return () => window.removeEventListener("scroll", handleScroll);
};

// Preserve UTM parameters across navigation
export const getUTMParams = (): Record<string, string> => {
  if (typeof window === "undefined") return {};
  
  const params = new URLSearchParams(window.location.search);
  const utmKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];
  const utmParams: Record<string, string> = {};
  
  utmKeys.forEach((key) => {
    const value = params.get(key);
    if (value) utmParams[key] = value;
  });
  
  // Store in sessionStorage for persistence across navigation
  if (Object.keys(utmParams).length > 0) {
    sessionStorage.setItem("utmParams", JSON.stringify(utmParams));
  }
  
  return utmParams;
};

// Retrieve stored UTM params
export const getStoredUTMParams = (): Record<string, string> => {
  if (typeof window === "undefined") return {};
  
  try {
    const stored = sessionStorage.getItem("utmParams");
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
};

// Append UTM params to a URL
export const appendUTMParams = (url: string): string => {
  const utmParams = getStoredUTMParams();
  if (Object.keys(utmParams).length === 0) return url;
  
  try {
    const urlObj = new URL(url);
    Object.entries(utmParams).forEach(([key, value]) => {
      urlObj.searchParams.set(key, value);
    });
    return urlObj.toString();
  } catch {
    return url;
  }
};

// Initialize all analytics on page load
export const initAnalytics = () => {
  getUTMParams(); // Store UTM params
  initScrollDepthTracking();
};
