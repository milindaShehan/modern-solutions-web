import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Modern Equipment and Solutions Pvt Ltd",
  description:
    "Modern Equipment and Solutions Pvt Ltd offers innovative business digitalization, event management, software solutions, digital marketing, and more.",
  author: "MSIC Labs",
  viewport: "width=device-width, initial-scale=1.0",
  keywords:
    "business digitalization, event management, software solutions, digital marketing, Sri Lanka,Modern Equipment and Solutions,Equipment, Business Solutions Sri Lanka, Innovative Business Technology, Event Management Services, Software Development for Businesses, Tailored Digital Solutions, Professional Digital Marketing, Corporate Branding Services, Custom Business Automation, 24/7 Customer Support Solutions, Recruitment Services Sri Lanka, Promotional Campaign Strategies, Online Marketing Experts, Enterprise Software Sri Lanka, Business Growth Strategies, Optimized Business Processes, Customized IT Solutions, Technology-driven Business Services, Cutting-edge Digital Transformation, Branding and Marketing Solutions, Affordable Business Digitalization Services in Sri Lanka",
  robots: "index, follow",
  openGraph: {
    title: "Modern Equipment and Solutions Pvt Ltd",
    description:
      "Providing exceptional services in business digitalization, event management, software solutions, and more.",
    url: "https://www.modernsolutions.lk",
    image: "/LOGOModern.png",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@modern_equip",
    title: "Modern Equipment and Solutions Pvt Ltd",
    description:
      "Exceptional services in business digitalization, event management, and software solutions.",
    image: "/LOGOModern.png", 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <meta name="author" content={metadata.author} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="robots" content={metadata.robots} />

        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:image" content={metadata.openGraph.image} />
        <meta property="og:type" content={metadata.openGraph.type} />

        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.image} />

        <title>{metadata.title}</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
