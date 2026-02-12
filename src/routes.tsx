import type { RouteRecord } from "vite-react-ssg";
import AppLayout from "./AppLayout";
import Index from "./pages/Index";
import BestLiftCreams from "./pages/BestLiftCreams";
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
      { path: "best-lift-creams", element: <BestLiftCreams /> },
      { path: "best-by-skin-type", element: <BestLiftingCreamBySkinType /> },
      { path: "best-by-skin-type/oily-skin", element: <BestLiftingCreamOilySkin /> },
      { path: "best-by-skin-type/dry-skin", element: <BestLiftingCreamDrySkin /> },
      { path: "best-by-skin-type/sensitive-skin", element: <BestLiftingCreamSensitiveSkin /> },
      { path: "best-by-skin-type/mature-skin", element: <BestLiftingCreamMatureSkin /> },
      { path: "best-by-skin-type/combination-skin", element: <BestLiftingCreamCombinationSkin /> },
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
