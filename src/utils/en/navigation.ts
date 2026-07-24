// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/en" },
  { name: "Pricing", url: "/en/#precios" },
  { name: "Services", url: "/services" },
  //{ name: "Precios", url: "/precios" },
  { name: "About Us", url: "/en/about" },
  { name: "Contact", url: "/en/contact" },
  { name: "Support", url: "/en/support"},
  { name: "Blog", url: "/en/blog" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Policies",
    links: [
      { name: "Privacy policies", url: "/en/politicas" },
      { name: "Terms and conditions", url: "/en/terminos" },
    ],
  },
  {
    section: "Company",
    links: [
      { name: "Services", url: "/en/politicas" },
      { name: "Blog", url: "/en/blog" },
      { name: "Contact us", url: "/en/contact" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/",
  x: "https://twitter.com/",
  github: "https://github.com/mearashadowfax/ScrewFast",
  google: "https://www.google.com/",
  slack: "https://slack.com/",
};

const mensajes = {
  banco:
    "Sotomayor Consulting International is not a bank, financial institution, nor does it provide direct credit services. We are a consulting firm that offers advice and support in company formation, account opening, procedures, and technological services.",
  experiencia: "",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
  mensajes,
};
