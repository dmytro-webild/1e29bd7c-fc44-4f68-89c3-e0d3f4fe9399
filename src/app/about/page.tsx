"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import TeamCardSix from '@/components/sections/team/TeamCardSix';

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

  <div id="about-firm" data-section="about-firm">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="About Gupta Subodh Manas & Co."
      description="Established 9 years ago in Rewari, Haryana, Gupta Subodh Manas & Co. stands as a trusted name in chartered accountancy. We are committed to fostering financial health and growth for every client, grounded in integrity and expertise."
      metrics={[
        {
          value: "9+",
          title: "Years of Experience",
        },
        {
          value: "100%",
          title: "Client Satisfaction",
        },
        {
          value: "Local",
          title: "Expertise",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/teamwork-developing-new-project-together_1098-21664.jpg"
      imageAlt="Professional accountants collaborating in a modern office"
      mediaAnimation="slide-up"
      metricsAnimation="slide-up"
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardSix
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      members={[
        {
          id: "member-1",
          name: "Subodh Manas",
          role: "Founder & Senior CA",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-businesswoman-touching-her-face_1098-3321.jpg",
          imageAlt: "Subodh Manas, Founder and Senior CA",
        },
        {
          id: "member-2",
          name: "Ananya Gupta",
          role: "Tax Consultant",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-pretty-woman-holding-document-cafe_1262-1145.jpg",
          imageAlt: "Ananya Gupta, Tax Consultant",
        },
        {
          id: "member-3",
          name: "Rahul Verma",
          role: "Auditing Specialist",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-middle-aged-business-leader-window_1262-5674.jpg",
          imageAlt: "Rahul Verma, Auditing Specialist",
        },
      ]}
      title="Meet Our Expert Team"
      description="Our highly qualified and dedicated professionals are committed to providing personalized and effective financial solutions tailored to your needs."
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
