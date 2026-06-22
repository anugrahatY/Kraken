
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Code2,
  Mail,
  TrendingDown,
  AlertCircle,
  BarChart3,
  Zap,
  ArrowRight,
  Check,
} from "lucide-react";
import { Container } from "@/components/zippystarter/container";
import { ProcessFlow } from "@/components/landing/process-flow";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/landing/navbar";
import { HeroSection } from "@/components/landing/hero";
import { FeaturesSection } from "@/components/landing/features";
import { PricingSection } from "@/components/landing/pricing";
import FAQSection from "@/components/landing/faq";
import { Footer } from "@/components/landing/footer";
import ContactUs from "@/components/landing/contactUs";
// import { HowItWorksSection } from "@/components/landing/how-it-works";
export default function Home() {

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ProcessFlow />
      <FeaturesSection />
      <PricingSection />
      <ContactUs />
      <FAQSection />
      <Footer />
    </div>
  );
}
