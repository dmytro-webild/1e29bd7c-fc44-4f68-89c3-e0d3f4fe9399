import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Manrope } from "next/font/google";
import { DM_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'Gupta Subodh Manas & Co. | Chartered Accountants in Rewari',
  description: 'Expert GST filing, income tax returns, auditing, and tax planning services in Rewari, Haryana. 9 years of trusted financial partnership.',
  keywords: ["chartered accountant, Rewari, Haryana, GST filing, income tax, auditing, company registration, bookkeeping, tax planning, financial services"],
  openGraph: {
    "title": "Gupta Subodh Manas & Co. | Chartered Accountants in Rewari",
    "description": "Expert GST filing, income tax returns, auditing, and tax planning services in Rewari, Haryana. 9 years of trusted financial partnership.",
    "url": "/",
    "siteName": "Gupta Subodh Manas & Co.",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/serious-young-businessman-showing-presentation-pc-tablet_1262-18054.jpg",
        "alt": "Professional Indian accountant assisting a client"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Gupta Subodh Manas & Co. | Chartered Accountants in Rewari",
    "description": "Expert GST filing, income tax returns, auditing, and tax planning services in Rewari, Haryana. 9 years of trusted financial partnership.",
    "images": [
      "http://img.b2bpic.net/free-photo/serious-young-businessman-showing-presentation-pc-tablet_1262-18054.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"]
});
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${manrope.variable} ${dmSans.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
