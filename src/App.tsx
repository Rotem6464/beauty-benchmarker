import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import BestLiftCreams from "./pages/BestLiftCreams";
import ProductReview from "./pages/ProductReview";
import EditorialMission from "./pages/EditorialMission";
import HowWeTest from "./pages/HowWeTest";
import ExpertTeam from "./pages/ExpertTeam";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import AffiliateDisclosure from "./pages/AffiliateDisclosure";
import Contact from "./pages/Contact";
import BestLiftingCreamBySkinType from "./pages/BestLiftingCreamBySkinType";
import BestLiftingCreamOilySkin from "./pages/BestLiftingCreamOilySkin";
import BestLiftingCreamDrySkin from "./pages/BestLiftingCreamDrySkin";
import BestLiftingCreamSensitiveSkin from "./pages/BestLiftingCreamSensitiveSkin";
import BestLiftingCreamMatureSkin from "./pages/BestLiftingCreamMatureSkin";
import BestLiftingCreamCombinationSkin from "./pages/BestLiftingCreamCombinationSkin";
import BestLiftingCreamForJowlsArticle from "./pages/BestLiftingCreamForJowlsArticle";
import BestRetinolCreamForJowlsArticle from "./pages/BestRetinolCreamForJowlsArticle";
import BestLiftingCreamForWomenOver50Article from "./pages/BestLiftingCreamForWomenOver50Article";
import VeganLiftingCreamForJowlsArticle from "./pages/VeganLiftingCreamForJowlsArticle";
import IdealiftVsRetinolJowlsArticle from "./pages/IdealiftVsRetinolJowlsArticle";
import WhyNeckCreamDoesntWorkJowlsArticle from "./pages/WhyNeckCreamDoesntWorkJowlsArticle";
import BestLiftingCreamForTurkeyNeckArticle from "./pages/BestLiftingCreamForTurkeyNeckArticle";
import BestAffordableLiftingCreamUnder50Article from "./pages/BestAffordableLiftingCreamUnder50Article";
import HowToApplyLiftingCreamArticle from "./pages/HowToApplyLiftingCreamArticle";
import DoLiftingCreamsWorkArticle from "./pages/DoLiftingCreamsWorkArticle";
import BestLiftingCreamForMenopauseSkinArticle from "./pages/BestLiftingCreamForMenopauseSkinArticle";
import BestExosomeCreamArticle from "./pages/BestExosomeCreamArticle";
import BestBodyRetinolForNeckArticle from "./pages/BestBodyRetinolForNeckArticle";
import BestLiftCreamsHub from "./pages/BestLiftCreamsHub";
import BestExosomeCreamForJowlsArticle from "./pages/BestExosomeCreamForJowlsArticle";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Index />} />
            <Route path="/best-lift-creams" element={<BestLiftCreamsHub />} />
            <Route path="/best-lift-creams-products" element={<BestLiftCreams />} />
            
            {/* Skin Type Pillar & Spokes */}
            <Route path="/best-by-skin-type" element={<BestLiftingCreamBySkinType />} />
            <Route path="/best-by-skin-type/oily-skin" element={<BestLiftingCreamOilySkin />} />
            <Route path="/best-by-skin-type/dry-skin" element={<BestLiftingCreamDrySkin />} />
            <Route path="/best-by-skin-type/sensitive-skin" element={<BestLiftingCreamSensitiveSkin />} />
            <Route path="/best-by-skin-type/mature-skin" element={<BestLiftingCreamMatureSkin />} />
            <Route path="/best-by-skin-type/combination-skin" element={<BestLiftingCreamCombinationSkin />} />
            
            {/* Articles */}
            <Route path="/best-lifting-cream-for-jowls" element={<BestLiftingCreamForJowlsArticle />} />
            <Route path="/best-retinol-cream-for-jowls" element={<BestRetinolCreamForJowlsArticle />} />
            <Route path="/best-lifting-cream-for-women-over-50" element={<BestLiftingCreamForWomenOver50Article />} />
            <Route path="/vegan-lifting-cream-for-jowls" element={<VeganLiftingCreamForJowlsArticle />} />
            <Route path="/idealift-vs-retinol-jowls" element={<IdealiftVsRetinolJowlsArticle />} />
            <Route path="/why-neck-cream-doesnt-work-jowls" element={<WhyNeckCreamDoesntWorkJowlsArticle />} />
            <Route path="/best-lifting-cream-for-turkey-neck" element={<BestLiftingCreamForTurkeyNeckArticle />} />
            <Route path="/best-affordable-lifting-cream-under-50" element={<BestAffordableLiftingCreamUnder50Article />} />
            <Route path="/how-to-apply-lifting-cream" element={<HowToApplyLiftingCreamArticle />} />
            <Route path="/do-lifting-creams-work" element={<DoLiftingCreamsWorkArticle />} />
            <Route path="/best-lifting-cream-for-menopause-skin" element={<BestLiftingCreamForMenopauseSkinArticle />} />
            <Route path="/best-exosome-cream" element={<BestExosomeCreamArticle />} />
            <Route path="/best-body-retinol-for-neck" element={<BestBodyRetinolForNeckArticle />} />
            
            <Route path="/exosome-cream-for-jowls" element={<BestExosomeCreamForJowlsArticle />} />
            
            {/* Product Reviews */}
            <Route path="/reviews/:productId" element={<ProductReview />} />
            
            {/* Editorial */}
            <Route path="/editorial-mission" element={<EditorialMission />} />
            <Route path="/how-we-test" element={<HowWeTest />} />
            <Route path="/experts" element={<ExpertTeam />} />
            
            {/* Legal/Compliance Pages */}
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/affiliate-disclosure" element={<AffiliateDisclosure />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
