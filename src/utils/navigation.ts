// An array of links for navigation bar
const navBarLinks = [
  { name: "Inicio", url: "/inicio/" },
  
  { name: "Services", url: "/inicio/services" },
  { name: "Contactos", url: "/inicio/contact" },
  { name: "Blog", url: "/inicio/blog" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Políticas",
    links: [
      { name: "Políticas de privacidad", url: "/inicio/politicas" },
      { name: "Términos y condiciones", url: "/inicio/terminos" },
    ],
  },
  {
    section: "Compañía",
    links: [
      { name: "Servicios", url: "/inicio/services" },
      { name: "Blog", url: "/inicio/blog" },
      { name: "Contáctanos", url: "/inicio/contact" },
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

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};