"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import BlogCardThree from '@/components/sections/blog/BlogCardThree';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';

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

  <div id="contact-details" data-section="contact-details">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "faq-1",
          title: "How can I book an appointment?",
          content: "You can book an appointment by calling us at +91 98960 11005 or by filling out the contact form on our website.",
        },
        {
          id: "faq-2",
          title: "What documents should I bring for a consultation?",
          content: "For your first consultation, please bring any relevant financial statements, previous tax returns, and identification documents.",
        },
        {
          id: "faq-3",
          title: "Do you offer virtual consultations?  ",
          content: "Yes, we offer virtual consultations for clients who prefer remote assistance. Please contact us to schedule one.",
        },
        {
          id: "faq-4",
          title: "What types of businesses do you serve?",
          content: "We serve a wide range of businesses, including startups, SMEs, and established corporations across various industries.",
        },
        {
          id: "faq-5",
          title: "What are your office hours?",
          content: "Our office hours are Monday to Friday, 9:00 AM to 6:00 PM. We are closed on weekends and public holidays.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/email-network-communication-perforated-paper-letter_53876-14278.jpg"
      imageAlt="Map illustration of Rewari, Haryana location"
      mediaAnimation="opacity"
      mediaPosition="right"
      title="Get in Touch with Our Experts"
      description="We are here to assist you with all your financial inquiries and needs. Reach out to us via phone, email, or visit our office. \n\n**Address:** 48 Bhargava Complex, Bus Stand, opposite Axis Bank, Rewari, Haryana 123401\n**Phone:** +91 98960 11005"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="financial-insights" data-section="financial-insights">
      <BlogCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      title="Latest Financial Insights & Updates"
      description="Stay informed with our expert articles on GST, income tax, and strategic financial planning to navigate the economic landscape."
      blogs={[
        {
          id: "blog-1",
          category: "Taxation",
          title: "Understanding the Latest GST Amendments",
          excerpt: "Stay updated with the recent changes in GST laws and how they impact your business operations and compliance.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-senior-man-using-digital-tablet_23-2147859738.jpg",
          imageAlt: "Person reading financial news on a tablet",
          authorName: "Gupta Subodh Manas & Co.",
          authorAvatar: "http://img.b2bpic.net/free-photo/beautiful-hispanic-woman-wearing-casual-clothes-glasses-happy-face-smiling-with-crossed-arms-looking-camera-positive-person_839833-11768.jpg",
          date: "July 15, 2024",
        },
        {
          id: "blog-2",
          category: "Income Tax",
          title: "Tips for Efficient Income Tax Return Filing",
          excerpt: "Learn practical strategies to simplify your income tax return filing process and avoid common errors.",
          imageSrc: "http://img.b2bpic.net/free-photo/men-with-suit-analyzing-results-some-papers-while-writting-laptop_1232-1166.jpg",
          imageAlt: "Tax planning strategy documents on a desk",
          authorName: "Gupta Subodh Manas & Co.",
          authorAvatar: "http://img.b2bpic.net/free-photo/cartoon-man-wearing-glasses_23-2151136784.jpg",
          date: "July 10, 2024",
        },
        {
          id: "blog-3",
          category: "Business Setup",
          title: "Navigating Company Registration in India",
          excerpt: "A comprehensive guide to the steps involved in registering a new company or LLP in India for aspiring entrepreneurs.",
          imageSrc: "http://img.b2bpic.net/free-photo/business-man-woman-sitting-desk-talking-about-reports-finance_23-2147923430.jpg",
          imageAlt: "Company registration documents with a pen",
          authorName: "Gupta Subodh Manas & Co.",
          authorAvatar: "http://img.b2bpic.net/free-photo/3d-cartoon-style-character_23-2151034043.jpg",
          date: "July 05, 2024",
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
