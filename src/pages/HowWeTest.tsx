import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import {
  FlaskConical,
  Clock,
  CheckCircle,
  Microscope,
  Camera,
  Ruler,
  Star,
  BarChart3,
  Droplets,
  Sun,
  Moon,
  Repeat,
  Award,
  Shield
} from "lucide-react";

const HowWeTest = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-900 via-brand-800 to-accent-pink text-background py-16">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-background/20 text-background border-0">Our Process</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">How We Test Every Product We Review</h1>
          <p className="text-xl text-brand-100 max-w-2xl mx-auto">
            Our rigorous, multi-phase testing methodology ensures every recommendation is backed by science and real-world results
          </p>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="py-8 bg-muted border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-3xl font-bold text-brand-600">500+</div>
              <div className="text-muted-foreground text-sm">Products Tested Annually</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-600">28 Days</div>
              <div className="text-muted-foreground text-sm">Minimum Test Period</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-600">50+</div>
              <div className="text-muted-foreground text-sm">Evaluation Criteria</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-600">12</div>
              <div className="text-muted-foreground text-sm">Expert Reviewers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* Testing Philosophy */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-4">
                <FlaskConical className="w-8 h-8 text-brand-600" />
                <h2 className="text-2xl font-bold">Our Testing Philosophy</h2>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Every lifting cream, serum, and treatment we review undergoes the same rigorous, standardized testing protocol. Our methodology is designed to deliver <strong className="text-foreground">accurate, repeatable, and objective results</strong> that remain consistent across similar products—allowing for fair, meaningful comparisons.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We don't just read ingredient lists. Our expert team physically tests every product over a minimum of 28 days, combining laboratory analysis with real-world usage to surface insights that spec sheets alone cannot reveal.
              </p>
            </div>

            {/* Testing Phases */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <Microscope className="w-8 h-8 text-brand-600" />
                <h2 className="text-2xl font-bold">Our 5-Phase Testing Protocol</h2>
              </div>

              {/* Phase 1 */}
              <div className="mb-8">
                <Card className="border-l-4 border-l-brand-500">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-brand-600 text-background rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                      <h3 className="text-xl font-semibold">Ingredient Analysis</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Our cosmetic chemists analyze every ingredient list, evaluating formulation quality, concentration of active ingredients, potential irritants, and overall safety profile.
                    </p>
                    <div className="grid md:grid-cols-3 gap-3">
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-success" />
                        <span>Active ingredient concentrations</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-success" />
                        <span>Potential allergens flagged</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-success" />
                        <span>Formulation stability check</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Phase 2 */}
              <div className="mb-8">
                <Card className="border-l-4 border-l-brand-500">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-brand-600 text-background rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                      <h3 className="text-xl font-semibold">Instrumented Skin Analysis</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Using professional-grade skin analysis tools, we measure baseline metrics before testing begins and track changes throughout the evaluation period.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-muted rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Ruler className="w-5 h-5 text-brand-600" />
                          <span className="font-medium">Firmness Measurement</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Cutometer analysis to measure skin elasticity and firmness improvements</p>
                      </div>
                      <div className="bg-muted rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Droplets className="w-5 h-5 text-brand-600" />
                          <span className="font-medium">Hydration Levels</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Corneometer readings at 1hr, 6hr, and 24hr post-application</p>
                      </div>
                      <div className="bg-muted rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Camera className="w-5 h-5 text-brand-600" />
                          <span className="font-medium">Visual Documentation</span>
                        </div>
                        <p className="text-sm text-muted-foreground">High-resolution before/after photography under controlled lighting</p>
                      </div>
                      <div className="bg-muted rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <BarChart3 className="w-5 h-5 text-brand-600" />
                          <span className="font-medium">Wrinkle Depth</span>
                        </div>
                        <p className="text-sm text-muted-foreground">VISIA skin analysis for fine lines and wrinkle improvements</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Phase 3 */}
              <div className="mb-8">
                <Card className="border-l-4 border-l-brand-500">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-brand-600 text-background rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                      <h3 className="text-xl font-semibold">28-Day Real-World Testing</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Our expert testers use each product as a regular consumer would—twice daily, following manufacturer instructions, for a minimum of 28 days (one full skin cycle).
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center gap-2">
                        <Sun className="w-5 h-5 text-accent-gold" />
                        <span className="text-sm">Morning Application</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Moon className="w-5 h-5 text-brand-600" />
                        <span className="text-sm">Evening Application</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-brand-500" />
                        <span className="text-sm">28+ Days Minimum</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Repeat className="w-5 h-5 text-success" />
                        <span className="text-sm">Daily Journaling</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Phase 4 */}
              <div className="mb-8">
                <Card className="border-l-4 border-l-brand-500">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-brand-600 text-background rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                      <h3 className="text-xl font-semibold">Multi-Tester Panel Evaluation</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Products are tested by multiple testers across different skin types, ages, and concerns to ensure our findings apply to diverse users—not just a single experience.
                    </p>
                    <div className="grid md:grid-cols-4 gap-3 text-center">
                      <div className="bg-brand-50 rounded-lg p-3">
                        <div className="font-semibold text-brand-600">Oily Skin</div>
                        <div className="text-xs text-muted-foreground">Tester Panel</div>
                      </div>
                      <div className="bg-brand-50 rounded-lg p-3">
                        <div className="font-semibold text-brand-600">Dry Skin</div>
                        <div className="text-xs text-muted-foreground">Tester Panel</div>
                      </div>
                      <div className="bg-brand-50 rounded-lg p-3">
                        <div className="font-semibold text-brand-600">Sensitive Skin</div>
                        <div className="text-xs text-muted-foreground">Tester Panel</div>
                      </div>
                      <div className="bg-brand-50 rounded-lg p-3">
                        <div className="font-semibold text-brand-600">Mature Skin</div>
                        <div className="text-xs text-muted-foreground">Tester Panel</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Phase 5 */}
              <div className="mb-8">
                <Card className="border-l-4 border-l-brand-500">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-brand-600 text-background rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                      <h3 className="text-xl font-semibold">Comparative Analysis & Scoring</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      No review is complete without comparing the product against its direct competitors. We contextualize every result against similar products in the same price tier and category.
                    </p>
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-accent-gold" />
                      <span className="text-sm text-muted-foreground">Products are rated on a 5-point scale across 10+ criteria, weighted by importance to the target user</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* What We Evaluate */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-8 h-8 text-brand-600" />
                <h2 className="text-2xl font-bold">What We Evaluate</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-3 text-brand-700">Efficacy Metrics</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-success" />
                        Firmness improvement (%)
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-success" />
                        Wrinkle depth reduction
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-success" />
                        Hydration retention (24hr)
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-success" />
                        Skin tone evenness
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-success" />
                        Visible lifting effect
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-3 text-brand-700">User Experience</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-success" />
                        Texture and spreadability
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-success" />
                        Absorption speed
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-success" />
                        Scent and sensory experience
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-success" />
                        Compatibility with makeup
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-success" />
                        Packaging functionality
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-3 text-brand-700">Safety & Tolerance</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-success" />
                        Irritation potential
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-success" />
                        Sensitivity reactions
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-success" />
                        Comedogenicity (pore-clogging)
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-success" />
                        Ingredient safety profile
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-success" />
                        Long-term use considerations
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-3 text-brand-700">Value Assessment</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-success" />
                        Price per ml/oz analysis
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-success" />
                        Results vs. cost ratio
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-success" />
                        Comparison to alternatives
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-success" />
                        Longevity of product
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-success" />
                        Overall value score
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Continuous Updates */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-8 h-8 text-brand-600" />
                <h2 className="text-2xl font-bold">Continuous Testing & Updates</h2>
              </div>
              <Card className="bg-brand-50 border-brand-200">
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4">
                    Our work doesn't end when a review is published. We continuously retest products as formulations change, and update our recommendations as new competitors enter the market.
                  </p>
                  <p className="text-muted-foreground">
                    Every review displays a "Last Tested" date so you know exactly how current our findings are. If a product is reformulated, we re-run our complete testing protocol and update our assessment accordingly.
                  </p>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default HowWeTest;
