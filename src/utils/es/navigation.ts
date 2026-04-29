// An array of links for navigation bar
const navBarLinks = [
  { name: "Inicio", url: "/inicio/" },
  { name: "Planes", url: "/inicio/#precios" },
  { name: "Servicios", url: "/inicio/services" },
  { name: "Nosotros", url: "/inicio/about" },
  { name: "Contactos", url: "/inicio/contact" },
  { name: "Soporte", url: "/inicio/support"},
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

const mensajes = {
  banco:
    "Sotomayor Consulting International no es un banco, entidad financiera ni presta servicios de crédito directo. Somos una empresa de consultoría que brinda asesoría y acompañamiento en constitución de empresas, apertura de cuentas, trámites y servicios tecnológicos.",
  experiencia: "",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
  mensajes,
};
