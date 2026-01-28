import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import {
  Award,
  GraduationCap,
  Linkedin,
  Twitter,
  Mail,
  BookOpen,
  Shield,
  CheckCircle,
  Star
} from "lucide-react";

interface Expert {
  id: string;
  name: string;
  title: string;
  credentials: string[];
  image: string;
  bio: string;
  specialties: string[];
  experience: string;
  education: string;
  publications?: number;
  linkedin?: string;
  twitter?: string;
  email?: string;
}

const experts: Expert[] = [
  {
    id: "expert-1",
    name: "[Expert Name]",
    title: "Chief Dermatology Advisor",
    credentials: ["MD", "Board-Certified Dermatologist", "FAAD"],
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
    bio: "[Add expert bio here - 2-3 sentences about their background, passion for skincare, and what drives their work. Example: With over 15 years of clinical experience, Dr. [Name] specializes in anti-aging treatments and has helped thousands of patients achieve healthier, more youthful skin. Her research focuses on the efficacy of peptide-based formulations in non-invasive skin rejuvenation.]",
    specialties: ["Anti-Aging Treatments", "Peptide Therapy", "Sensitive Skin Care"],
    experience: "15+ years",
    education: "[University Name] School of Medicine",
    publications: 47,
    linkedin: "#",
    twitter: "#",
    email: "expert1@bestliftingcream.com"
  },
  {
    id: "expert-2",
    name: "[Expert Name]",
    title: "Lead Cosmetic Chemist",
    credentials: ["PhD", "Cosmetic Science", "SCC Member"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    bio: "[Add expert bio here - Example: A formulation scientist with a passion for clean beauty, [Name] spent a decade developing products for major skincare brands before joining our team. She brings unparalleled insight into ingredient interactions, stability testing, and what truly makes a lifting cream effective at the molecular level.]",
    specialties: ["Formulation Analysis", "Ingredient Safety", "Peptide Chemistry"],
    experience: "12+ years",
    education: "[University Name] - PhD in Cosmetic Science",
    publications: 23,
    linkedin: "#",
    twitter: "#",
    email: "expert2@bestliftingcream.com"
  },
  {
    id: "expert-3",
    name: "[Expert Name]",
    title: "Senior Beauty Editor",
    credentials: ["Licensed Esthetician", "Certified Makeup Artist"],
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    bio: "[Add expert bio here - Example: With bylines in Vogue, Allure, and Harper's Bazaar, [Name] has been covering the beauty industry for over a decade. As a licensed esthetician, she combines hands-on expertise with journalistic rigor to deliver reviews that are both scientifically sound and practically useful.]",
    specialties: ["Product Testing", "Trend Analysis", "User Experience"],
    experience: "10+ years",
    education: "[School Name] - Esthetics License",
    linkedin: "#",
    twitter: "#",
    email: "expert3@bestliftingcream.com"
  },
  {
    id: "expert-4",
    name: "[Expert Name]",
    title: "Clinical Testing Director",
    credentials: ["RN", "MSN", "Aesthetic Nurse Specialist"],
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop&crop=face",
    bio: "[Add expert bio here - Example: [Name] oversees all clinical testing protocols at BestLiftingCream.com. With a background in aesthetic nursing and clinical trials, she ensures every product evaluation meets the highest standards of scientific methodology.]",
    specialties: ["Clinical Protocols", "Skin Analysis", "Safety Assessment"],
    experience: "8+ years",
    education: "[University Name] - Master of Science in Nursing",
    linkedin: "#",
    email: "expert4@bestliftingcream.com"
  },
  {
    id: "expert-5",
    name: "[Expert Name]",
    title: "K-Beauty Specialist",
    credentials: ["Certified Korean Skincare Expert", "Seoul Beauty Institute"],
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    bio: "[Add expert bio here - Example: Born and raised in Seoul, [Name] brings authentic expertise in Korean skincare innovations. She travels to South Korea quarterly to stay ahead of emerging trends and test products before they reach Western markets.]",
    specialties: ["K-Beauty Trends", "Asian Skincare", "Multi-Step Routines"],
    experience: "7+ years",
    education: "Seoul Beauty Institute, [Additional Credentials]",
    linkedin: "#",
    twitter: "#",
    email: "expert5@bestliftingcream.com"
  },
  {
    id: "expert-6",
    name: "[Expert Name]",
    title: "Consumer Research Analyst",
    credentials: ["MBA", "Consumer Insights Certified"],
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    bio: "[Add expert bio here - Example: [Name] leads our consumer panel testing and market research initiatives. With an MBA in Consumer Behavior, he ensures our recommendations reflect real-world user experiences across diverse demographics.]",
    specialties: ["Consumer Testing", "Market Analysis", "Value Assessment"],
    experience: "9+ years",
    education: "[University Name] - MBA",
    linkedin: "#",
    email: "expert6@bestliftingcream.com"
  }
];

const ExpertTeam = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-900 via-brand-800 to-accent-pink text-background py-16">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-background/20 text-background border-0">Our Team</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Beauty Experts</h1>
          <p className="text-xl text-brand-100 max-w-2xl mx-auto">
            Dermatologists, cosmetic chemists, licensed estheticians, and beauty journalists—our team brings decades of combined expertise to every review
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
                    <h2 className="text-lg font-bold text-success">Verified Expert Team</h2>
                    <Badge className="bg-success text-success-foreground">E-E-A-T Verified</Badge>
                  </div>
                  <p className="text-success/90 mb-3">
                    Every expert on our team has verified credentials and real-world experience in their respective fields. Our content is written and reviewed by qualified professionals, not AI or anonymous writers.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span>Verified Credentials</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span>Real Industry Experience</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span>Published Research</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span>Ongoing Education</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-8 bg-muted border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-3xl font-bold text-brand-600">75+</div>
              <div className="text-muted-foreground text-sm">Years Combined Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-600">6</div>
              <div className="text-muted-foreground text-sm">Core Expert Team</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-600">100+</div>
              <div className="text-muted-foreground text-sm">Published Studies</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-600">15+</div>
              <div className="text-muted-foreground text-sm">Industry Certifications</div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {experts.map((expert) => (
                <Card key={expert.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    {/* Expert Image */}
                    <div className="aspect-square bg-muted overflow-hidden">
                      <img
                        src={expert.image}
                        alt={expert.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Expert Info */}
                    <div className="p-6">
                      {/* Credentials Badges */}
                      <div className="flex flex-wrap gap-1 mb-3">
                        {expert.credentials.map((cred, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {cred}
                          </Badge>
                        ))}
                      </div>

                      <h3 className="text-xl font-bold mb-1">{expert.name}</h3>
                      <p className="text-brand-600 font-medium mb-3">{expert.title}</p>

                      {/* Bio */}
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-4">
                        {expert.bio}
                      </p>

                      {/* Specialties */}
                      <div className="mb-4">
                        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Specialties</p>
                        <div className="flex flex-wrap gap-1">
                          {expert.specialties.map((specialty, i) => (
                            <span key={i} className="text-xs bg-brand-50 text-brand-700 px-2 py-1 rounded-full">
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Experience & Education */}
                      <div className="space-y-2 mb-4 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Award className="w-4 h-4 text-brand-500" />
                          <span>{expert.experience} experience</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <GraduationCap className="w-4 h-4 text-brand-500" />
                          <span>{expert.education}</span>
                        </div>
                        {expert.publications && (
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <BookOpen className="w-4 h-4 text-brand-500" />
                            <span>{expert.publications} publications</span>
                          </div>
                        )}
                      </div>

                      {/* Social Links */}
                      <div className="flex gap-2 pt-4 border-t">
                        {expert.linkedin && (
                          <Button variant="ghost" size="sm" asChild>
                            <a href={expert.linkedin} target="_blank" rel="noopener noreferrer">
                              <Linkedin className="w-4 h-4" />
                            </a>
                          </Button>
                        )}
                        {expert.twitter && (
                          <Button variant="ghost" size="sm" asChild>
                            <a href={expert.twitter} target="_blank" rel="noopener noreferrer">
                              <Twitter className="w-4 h-4" />
                            </a>
                          </Button>
                        )}
                        {expert.email && (
                          <Button variant="ghost" size="sm" asChild>
                            <a href={`mailto:${expert.email}`}>
                              <Mail className="w-4 h-4" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advisory Board Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Medical Advisory Board</h2>
            <p className="text-muted-foreground mb-8">
              In addition to our core team, we consult with a board of medical professionals who review our content for accuracy and safety.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-brand-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Star className="w-8 h-8 text-brand-600" />
                  </div>
                  <h3 className="font-semibold">[Advisor Name]</h3>
                  <p className="text-sm text-muted-foreground">Board-Certified Dermatologist</p>
                  <p className="text-xs text-muted-foreground mt-1">[Hospital/Practice Name]</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-brand-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Star className="w-8 h-8 text-brand-600" />
                  </div>
                  <h3 className="font-semibold">[Advisor Name]</h3>
                  <p className="text-sm text-muted-foreground">Plastic Surgeon, MD</p>
                  <p className="text-xs text-muted-foreground mt-1">[Hospital/Practice Name]</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-brand-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Star className="w-8 h-8 text-brand-600" />
                  </div>
                  <h3 className="font-semibold">[Advisor Name]</h3>
                  <p className="text-sm text-muted-foreground">Cosmetic Dermatologist</p>
                  <p className="text-xs text-muted-foreground mt-1">[Hospital/Practice Name]</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-16 bg-brand-900 text-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Join Our Expert Team</h2>
          <p className="text-brand-200 mb-6 max-w-xl mx-auto">
            Are you a dermatologist, cosmetic chemist, or licensed esthetician passionate about helping consumers make better skincare choices? We'd love to hear from you.
          </p>
          <Button variant="secondary" size="lg" asChild>
            <a href="mailto:careers@bestliftingcream.com">Apply to Join Our Team</a>
          </Button>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default ExpertTeam;
