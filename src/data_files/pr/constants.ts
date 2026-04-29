import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "Sotomayor Consulting International",
  tagline: "Sotomayor Consulting International | Assessoria Global para Patrimônio e Negócios",
  description: "Ajudamos você a construir, proteger e expandir seu patrimônio internacionalmente. Oferecemos soluções integrais para o crescimento do seu negócio.",
  description_short: "Ajudamos você a construir, proteger e expandir seu patrimônio internacionalmente.",
  url: "https://sotomayorconsulting.com",
  author: "Sotomayor Consulting International",
  inLanguage: "pt-BR"
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "pt-BR",
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
  locale: "pt_BR",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: Assessoria Global para Patrimônio e Negócios`,
  description: "Ajudamos você a construir, proteger e expandir seu patrimônio internacionalmente. Oferecemos soluções integrais para o crescimento do seu negócio.",
  image: ogImageSrc,
};