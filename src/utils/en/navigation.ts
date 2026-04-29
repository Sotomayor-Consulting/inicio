// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/inicio/en" },
  { name: "Pricing", url: "/inicio/en/#precios" },
  { name: "Services", url: "/inicio/services" },
  //{ name: "Precios", url: "/precios" },
  { name: "About Us", url: "/inicio/en/about" },
  { name: "Contact", url: "/inicio/en/contact" },
  { name: "Support", url: "/inicio/en/support"},
  { name: "Blog", url: "/inicio/en/blog" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Policies",
    links: [
      { name: "Privacy policies", url: "/inicio/en/politicas" },
      { name: "Terms and conditions", url: "/inicio/en/terminos" },
    ],
  },
  {
    section: "Company",
    links: [
      { name: "Services", url: "/inicio/en/politicas" },
      { name: "Blog", url: "/inicio/en/blog" },
      { name: "Contact us", url: "/inicio/en/contact" },
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
