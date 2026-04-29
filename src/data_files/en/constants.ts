import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "Sotomayor Consulting International",
  tagline: "Sotomayor Consulting International | Global Advisory for Assets and Business",
  description: "We help you build, protect, and expand your assets internationally. We offer comprehensive solutions for your business growth.",
  description_short: "We help you build, protect, and expand your assets internationally.",
  url: "https://sotomayorconsulting.com",
  author: "Sotomayor Consulting International",
  inLanguage: "en-US"
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: Global Advisory for Assets and Business`,
  description: "We help you build, protect, and expand your assets internationally. We offer comprehensive solutions for your business growth.",
  image: ogImageSrc,
};