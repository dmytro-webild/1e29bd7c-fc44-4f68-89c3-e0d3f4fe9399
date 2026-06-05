"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FeatureBorderGlow from '@/components/sections/feature/featureBorderGlow/FeatureBorderGlow';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import { BarChart, Book, Building, CheckSquare, FileText, Wallet } from "lucide-react";

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

  <div id="services-list" data-section="services-list">
      <FeatureBorderGlow
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          icon: FileText,
          title: "GST Filing",
          description: "Seamless GST registration, return filing, and compliance to keep your business on track.",
        },
        {
          icon: Wallet,
          title: "Income Tax Returns",
          description: "Expert preparation and filing of income tax returns for individuals and businesses, ensuring maximum benefits.",
        },
        {
          icon: CheckSquare,
          title: "Auditing Services",
          description: "Thorough and impartial auditing to ensure financial transparency and regulatory adherence.",
        },
        {
          icon: Building,
          title: "Company Registration",
          description: "Hassle-free assistance with company formation, LLP registration, and other corporate compliances.",
        },
        {
          icon: Book,
          title: "Bookkeeping",
          description: "Accurate and up-to-date record-keeping services to provide clear insights into your financial health.",
        },
        {
          icon: BarChart,
          title: "Tax Planning",
          description: "Strategic tax planning to minimize liabilities and optimize your financial structure for future growth.",
        },
      ]}
      title="Our Comprehensive Accounting Services"
      description="From meticulous bookkeeping to strategic tax planning, we cover all your financial needs with expertise and precision."
    />
  </div>

  <div id="service-packages" data-section="service-packages">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "package-1",
          name: "Startup Essentials Package",
          price: "Custom",
          imageSrc: "http://img.b2bpic.net/free-photo/place-work-place-work-coffee-desk-simple-tools_53876-16152.jpg",
          imageAlt: "Startup business financial plan documents",
        },
        {
          id: "package-2",
          name: "Annual Compliance Suite",
          price: "Custom",
          imageSrc: "http://img.b2bpic.net/free-photo/young-businessman-working-from-his-office_181624-25579.jpg",
          imageAlt: "Tax compliance forms stack",
        },
        {
          id: "package-3",
          name: "Advanced Tax Optimization",
          price: "Custom",
          imageSrc: "http://img.b2bpic.net/free-photo/half-closed-laptop-with-neon-chart-desk-night-shift_169016-69173.jpg",
          imageAlt: "Advanced financial planning on a laptop",
        },
        {
          id: "package-4",
          name: "New Business Registration",
          price: "Custom",
          imageSrc: "http://img.b2bpic.net/free-photo/business-people-discussing-charts-graphs-table-meeting_23-2147923334.jpg",
          imageAlt: "Business registration documents with a pen",
        },
        {
          id: "package-5",
          name: "Bookkeeping & Payroll",
          price: "Custom",
          imageSrc: "http://img.b2bpic.net/free-photo/workplace-with-cup-coffee-technological-devices_1232-475.jpg",
          imageAlt: "Bookkeeping ledger and accounting software",
        },
        {
          id: "package-6",
          name: "Forensic Audit & Review",
          price: "Custom",
          imageSrc: "http://img.b2bpic.net/free-photo/mature-person-signing-contract-with-insurance-agency-banker_482257-94936.jpg",
          imageAlt: "Audit report with magnifying glass over documents",
        },
      ]}
      title="Explore Our Specialized Financial Packages"
      description="Tailored solutions designed to meet the distinct requirements of businesses and individuals, offering comprehensive support."
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
