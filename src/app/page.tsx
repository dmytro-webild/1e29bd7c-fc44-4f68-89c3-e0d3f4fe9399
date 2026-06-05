"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import { Briefcase, CheckCircle, LineChart, Shield, Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="mediumLarge"
        sizing="large"
        background="blurBottom"
        cardStyle="gradient-mesh"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",
          id: "/",
        },
        {
          name: "Services",
          id: "/services",
        },
        {
          name: "About",
          id: "/about",
        },
        {
          name: "Contact",
          id: "/contact",
        },
      ]}
      brandName="Gupta Subodh Manas & Co."
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplit
      background={{
        variant: "radial-gradient",
      }}
      imagePosition="right"
      title="Your Trusted Financial Partner in Rewari"
      description="Gupta Subodh Manas & Co. offers expert chartered accountancy services for businesses and individuals. With 9 years of experience and GST verification, we ensure financial compliance and strategic growth."
      buttons={[
        {
          text: "Our Services",
          href: "/services",
        },
        {
          text: "Contact Us",
          href: "/contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/serious-young-businessman-showing-presentation-pc-tablet_1262-18054.jpg"
      imageAlt="Professional Indian accountant assisting a client in an office"
      mediaAnimation="slide-up"
      fixedMediaHeight={true}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/smiling-mature-businessman-using-digital-tablet-caf_23-2147955292.jpg",
          alt: "Experienced Financial Advisor",
        },
        {
          src: "http://img.b2bpic.net/free-photo/frustrated-mature-entrepreneur-office_1398-1456.jpg",
          alt: "Dedicated Tax Professional",
        },
        {
          src: "http://img.b2bpic.net/free-photo/architect-woman-her-office-with-blueprints-front-her-working-new-projects-architecture-design_482257-33133.jpg",
          alt: "Skilled Accounting Expert",
        },
        {
          src: "http://img.b2bpic.net/free-photo/executive-showing-his-work-digital-tablet_1098-1742.jpg",
          alt: "Trustworthy Business Consultant",
        },
        {
          src: "http://img.b2bpic.net/free-photo/woman-sitting-her-workplace_23-2148327029.jpg",
          alt: "Proactive Financial Planner",
        },
      ]}
      avatarText="Join 500+ satisfied clients!"
      marqueeItems={[
        {
          type: "text-icon",
          text: "GST Compliant",
          icon: CheckCircle,
        },
        {
          type: "text-icon",
          text: "Tax Savings",
          icon: Sparkles,
        },
        {
          type: "text-icon",
          text: "Auditing Excellence",
          icon: Shield,
        },
        {
          type: "text-icon",
          text: "Growth Strategies",
          icon: LineChart,
        },
        {
          type: "text-icon",
          text: "Trusted Partnership",
          icon: Briefcase,
        },
      ]}
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardEleven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      metrics={[
        {
          id: "years",
          value: "9+",
          title: "Years in Business",
          description: "Trusted experience serving clients across various sectors.",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-man-signing-contract-while-being-with-his-wife-meeting-with-financial-advisor_637285-1134.jpg",
        },
        {
          id: "clients",
          value: "500+",
          title: "Satisfied Clients",
          description: "Our growing client base reflects our dedication and service quality.",
          imageSrc: "http://img.b2bpic.net/free-photo/joyous-coworkers-having-fun-vibrant-office-while-reviewing-financial-graphs_482257-126650.jpg",
        },
        {
          id: "gst",
          value: "GST Verified",
          title: "Compliance Experts",
          description: "Ensuring seamless GST processes and adherence to all regulations.",
          imageSrc: "http://img.b2bpic.net/free-photo/afro-american-caucasian-cheerful-businessmen-handshaking_1163-5309.jpg",
        },
      ]}
      title="Building Trust Through Expertise and Dedication"
      description="Our commitment to excellence translates into tangible results and long-lasting client relationships."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Client Success Co.",
        "Innovate Finance",
        "Apex Solutions",
        "Global Tax Advisors",
        "Business Growth Partners",
        "Financial Compliance Hub",
        "Strategic Consulting Group",
      ]}
      title="Our Valued Network of Associates"
      description="We collaborate with leading organizations and regulatory bodies to provide comprehensive financial solutions."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={true}
      testimonial="Gupta Subodh Manas & Co. transformed our business finances. Their expertise in GST and tax planning saved us significant time and money, allowing us to focus on growth."
      rating={5}
      author="Priya Sharma, CEO of Tech Innovations"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/successful-man-pointing-camera-with-finger_1262-3118.jpg",
          alt: "Priya Sharma",
        },
        {
          src: "http://img.b2bpic.net/free-photo/elegant-indian-macho-man-model-suit-pink-tie-posed-winter-day_627829-1596.jpg",
          alt: "Ramesh Kumar",
        },
        {
          src: "http://img.b2bpic.net/free-photo/happy-businesswoman-smiling-looking-camera-successful-confident-grey-haired-manager-sitting-office-room-workplace-business-management-concept_74855-7343.jpg",
          alt: "Anjali Singh",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-businessman-working-from-his-office-concept-hard-work_181624-33428.jpg",
          alt: "Vikramjeet Das",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-man-with-confident-look_114579-78889.jpg",
          alt: "Rahul Mehta",
        },
      ]}
      ratingAnimation="slide-up"
      avatarsAnimation="opacity"
    />
  </div>

  <div id="contact-cta" data-section="contact-cta">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient",
      }}
      tag="Connect with Us"
      title="Ready to Optimize Your Financial Future?"
      description="Let our experienced team guide you through complex financial landscapes with clarity and precision. Schedule a consultation today."
      buttons={[
        {
          text: "Schedule a Consultation",
          href: "/contact",
        },
        {
          text: "View All Services",
          href: "/services",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "GST Filing",
              href: "/services#gst-filing",
            },
            {
              label: "Income Tax",
              href: "/services#income-tax",
            },
            {
              label: "Auditing",
              href: "/services#auditing",
            },
            {
              label: "Tax Planning",
              href: "/services#tax-planning",
            },
          ],
        },
        {
          items: [
            {
              label: "About Us",
              href: "/about",
            },
            {
              label: "Our Team",
              href: "/about#team",
            },
            {
              label: "Testimonials",
              href: "/#testimonials",
            },
            {
              label: "Contact Us",
              href: "/contact",
            },
          ],
        },
        {
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
            {
              label: "Disclaimer",
              href: "#",
            },
          ],
        },
      ]}
      logoText="Gupta Subodh Manas & Co."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
