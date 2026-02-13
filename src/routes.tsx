import type { RouteRecord } from "vite-react-ssg";
import AppLayout from "./AppLayout";
import Index from "./pages/Index";
import BestLiftCreams from "./pages/BestLiftCreams";
import BestLiftCreamsHub from "./pages/BestLiftCreamsHub";
import BestLiftingCreamBySkinType from "./pages/BestLiftingCreamBySkinType";
import BestLiftingCreamOilySkin from "./pages/BestLiftingCreamOilySkin";
import BestLiftingCreamDrySkin from "./pages/BestLiftingCreamDrySkin";
import BestLiftingCreamSensitiveSkin from "./pages/BestLiftingCreamSensitiveSkin";
import BestLiftingCreamMatureSkin from "./pages/BestLiftingCreamMatureSkin";
import BestLiftingCreamCombinationSkin from "./pages/BestLiftingCreamCombinationSkin";
import ProductReview from "./pages/ProductReview";
import EditorialMission from "./pages/EditorialMission";
import HowWeTest from "./pages/HowWeTest";
import ExpertTeam from "./pages/ExpertTeam";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import AffiliateDisclosure from "./pages/AffiliateDisclosure";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Article imports
import BestLiftingCreamForJowlsArticle from "./pages/BestLiftingCreamForJowlsArticle";
import BestLiftingCreamForWomenOver50Article from "./pages/BestLiftingCreamForWomenOver50Article";
import VeganLiftingCreamForJowlsArticle from "./pages/VeganLiftingCreamForJowlsArticle";
import IdealiftVsRetinolJowlsArticle from "./pages/IdealiftVsRetinolJowlsArticle";
import WhyNeckCreamDoesntWorkJowlsArticle from "./pages/WhyNeckCreamDoesntWorkJowlsArticle";
import BestLiftingCreamForTurkeyNeckArticle from "./pages/BestLiftingCreamForTurkeyNeckArticle";
import BestAffordableLiftingCreamUnder50Article from "./pages/BestAffordableLiftingCreamUnder50Article";
import HowToApplyLiftingCreamArticle from "./pages/HowToApplyLiftingCreamArticle";
import DoLiftingCreamsWorkArticle from "./pages/DoLiftingCreamsWorkArticle";
import BestLiftingCreamForMenopauseSkinArticle from "./pages/BestLiftingCreamForMenopauseSkinArticle";

// All product IDs for static path generation
const PRODUCT_IDS = [
  "okoaskin-lifting",
  "la-prairie-caviar",
  "drunk-elephant-protini",
  "olay-regenerist",
  "la-mer-creme",
  "no7-lift-luminate",
  "round-lab-collagen",
  "beverly-hills-md",
  "neutrogena-wrinkle",
  "augustinus-bader",
  "sulwhasoo-ginseng",
  "biossance-plumping",
];

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Index /> },
      { path: "best-lift-creams", element: <BestLiftCreamsHub /> },
      { path: "best-lift-creams-products", element: <BestLiftCreams /> },
      { path: "best-by-skin-type", element: <BestLiftingCreamBySkinType /> },
      { path: "best-by-skin-type/oily-skin", element: <BestLiftingCreamOilySkin /> },
      { path: "best-by-skin-type/dry-skin", element: <BestLiftingCreamDrySkin /> },
      { path: "best-by-skin-type/sensitive-skin", element: <BestLiftingCreamSensitiveSkin /> },
      { path: "best-by-skin-type/mature-skin", element: <BestLiftingCreamMatureSkin /> },
      { path: "best-by-skin-type/combination-skin", element: <BestLiftingCreamCombinationSkin /> },
      
      // Articles (topical cluster)
      { path: "best-lifting-cream-for-jowls", element: <BestLiftingCreamForJowlsArticle /> },
      { path: "best-lifting-cream-for-women-over-50", element: <BestLiftingCreamForWomenOver50Article /> },
      { path: "vegan-lifting-cream-for-jowls", element: <VeganLiftingCreamForJowlsArticle /> },
      { path: "idealift-vs-retinol-jowls", element: <IdealiftVsRetinolJowlsArticle /> },
      { path: "why-neck-cream-doesnt-work-jowls", element: <WhyNeckCreamDoesntWorkJowlsArticle /> },
      { path: "best-lifting-cream-for-turkey-neck", element: <BestLiftingCreamForTurkeyNeckArticle /> },
      { path: "best-affordable-lifting-cream-under-50", element: <BestAffordableLiftingCreamUnder50Article /> },
      { path: "how-to-apply-lifting-cream", element: <HowToApplyLiftingCreamArticle /> },
      { path: "do-lifting-creams-work", element: <DoLiftingCreamsWorkArticle /> },
      { path: "best-lifting-cream-for-menopause-skin", element: <BestLiftingCreamForMenopauseSkinArticle /> },
      
      {
        path: "reviews/:productId",
        element: <ProductReview />,
        getStaticPaths: () => PRODUCT_IDS.map((id) => `/reviews/${id}`),
      },
      { path: "editorial-mission", element: <EditorialMission /> },
      { path: "how-we-test", element: <HowWeTest /> },
      { path: "experts", element: <ExpertTeam /> },
      { path: "privacy", element: <PrivacyPolicy /> },
      { path: "terms", element: <TermsOfService /> },
      { path: "affiliate-disclosure", element: <AffiliateDisclosure /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];
