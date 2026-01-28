import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import {
  Shield,
  Award,
  Eye,
  Ban,
  Users,
  FileCheck,
  Heart,
  CheckCircle,
  ExternalLink,
  Sparkles
} from "lucide-react";

const EditorialMission = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-900 via-brand-800 to-accent-pink text-background py-16">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-background/20 text-background border-0">About Us</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Editorial Mission</h1>
          <p className="text-xl text-brand-100 max-w-2xl mx-auto">
            For over a decade, earning and maintaining the trust of our readers has been our top priority at BestLiftingCream.com
          </p>
        </div>
      </section>

      {/* Google E-E-A-T Trust Box */}
      <section className="py-8 bg-gradient-to-r from-success/10 to-success/5 border-y border-success/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-success/30 bg-background">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-success/20 rounded-full p-3 flex-shrink-0">
                  <Shield className="w-8 h-8 text-success" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h2 className="text-lg font-bold text-success">Verified Trusted Source</h2>
                    <Badge className="bg-success text-success-foreground">E-E-A-T Compliant</Badge>
                  </div>
                  <p className="text-success/90 mb-3">
                    BestLiftingCream.com meets Google's quality standards for <strong>Experience</strong>, <strong>Expertise</strong>, <strong>Authoritativeness</strong>, and <strong>Trustworthiness</strong> (E-E-A-T) in skincare content.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span>Expert-Written</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span>Lab-Tested</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span>No Paid Reviews</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span>Transparent Methods</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* Mission Statement */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-8 h-8 text-brand-600" />
                <h2 className="text-2xl font-bold">Our Mission</h2>
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  BestLiftingCream.com is a leading authority on skincare and anti-aging products, delivering <strong className="text-foreground">lab-based, independent reviews</strong> of the latest lifting creams, serums, and treatments. Our expert team combines scientific analysis with real-world testing to help you make better buying decisions and achieve the skin you deserve.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We are committed to world-class, original beauty journalism. Every review is developed through rigorous testing, research, and interviews with dermatologists, cosmetic chemists, and skincare professionals—combined with decades of collective product and industry experience.
                </p>
              </div>
            </div>

            {/* Editorial Principles */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <FileCheck className="w-8 h-8 text-brand-600" />
                <h2 className="text-2xl font-bold">Our Editorial Principles</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-brand-200">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-brand-100 rounded-full p-2">
                        <Ban className="w-5 h-5 text-brand-600" />
                      </div>
                      <h3 className="font-semibold text-lg">No Paid Reviews</h3>
                    </div>
                    <p className="text-muted-foreground">
                      There are absolutely no paid reviews on our website. We do not accept compensation from brands in exchange for favorable coverage. Our ratings are based solely on product performance.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-brand-200">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-brand-100 rounded-full p-2">
                        <Eye className="w-5 h-5 text-brand-600" />
                      </div>
                      <h3 className="font-semibold text-lg">Full Transparency</h3>
                    </div>
                    <p className="text-muted-foreground">
                      We clearly disclose affiliate relationships and how we make money. Our business model never influences our editorial rankings, recommendations, or review conclusions.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-brand-200">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-brand-100 rounded-full p-2">
                        <Users className="w-5 h-5 text-brand-600" />
                      </div>
                      <h3 className="font-semibold text-lg">Editorial Independence</h3>
                    </div>
                    <p className="text-muted-foreground">
                      There is a strict separation between our editorial and business teams. Advertising partnerships and sponsored content never influence our lab results or review opinions.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-brand-200">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-brand-100 rounded-full p-2">
                        <Heart className="w-5 h-5 text-brand-600" />
                      </div>
                      <h3 className="font-semibold text-lg">Reader-First Approach</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Every piece of content is created with your needs in mind. We answer real questions, address genuine concerns, and provide actionable advice you can trust.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Vendor Relationships */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-8 h-8 text-brand-600" />
                <h2 className="text-2xl font-bold">Our Vendor Policies</h2>
              </div>
              <div className="bg-muted rounded-xl p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">No Gifts or Compensation:</strong> Editorial staff cannot accept any compensation or gifts of significant value from vendors, including paid travel or press events. We pay for all our own travel and expenses.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">No Preview Rights:</strong> We give brands the opportunity to address technical concerns during testing, but we never allow vendors to preview reviews before publication or set preconditions on our coverage.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Product Returns:</strong> Products provided for evaluation remain the property of the vendor and are typically returned within 90 days. We occasionally keep products longer for extended testing and comparison updates.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">We Also Purchase Products:</strong> Many products we review are purchased anonymously at retail to ensure we receive the same experience as regular consumers.
                  </p>
                </div>
              </div>
            </div>

            {/* AI Policy */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-8 h-8 text-brand-600" />
                <h2 className="text-2xl font-bold">Our AI Policy</h2>
              </div>
              <Card className="border-accent-gold/50 bg-accent-gold/10">
                <CardContent className="p-6">
                  <p className="text-foreground mb-4">
                    <strong>BestLiftingCream.com does not use artificial intelligence (AI) to create original written content, product testing, or recommendations.</strong>
                  </p>
                  <p className="text-muted-foreground">
                    We are a seasoned editorial team with decades of combined experience in dermatology, cosmetic chemistry, and beauty journalism. We hold ourselves to the highest editorial standards and believe AI cannot replace our experts, whose main mission is to help you find the right skincare products for your unique needs.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact & Corrections */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <ExternalLink className="w-8 h-8 text-brand-600" />
                <h2 className="text-2xl font-bold">Corrections & Feedback</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                We take accuracy seriously. If you spot an error in any of our content, please contact us immediately at <a href="mailto:editorial@bestliftingcream.com" className="text-brand-600 hover:underline">editorial@bestliftingcream.com</a>. We commit to investigating and correcting verified errors within 24 hours, with a clear note explaining what was changed.
              </p>
              <p className="text-muted-foreground">
                We welcome feedback, questions, and suggestions from our readers. Your input helps us continuously improve the quality and usefulness of our reviews.
              </p>
            </div>

          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default EditorialMission;
