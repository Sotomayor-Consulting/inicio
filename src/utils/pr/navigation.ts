// An array of links for navigation bar
const navBarLinks = [
  { name: "Início", url: "/inicio/pr" },
  { name: "Preços", url: "/inicio/pr/#precios" },
  { name: "Serviços", url: "/inicio/pr/services" },
  { name: "Sobre nós", url: "/inicio/pr/about" },
  { name: "Contatos", url: "/inicio/pr/contact" },
  { name: "Suporte", url: "/inicio/pr/support"},
  { name: "Blog", url: "/inicio/pr/blog" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Políticas",
    links: [
      { name: "Políticas de privacidade", url: "/inicio/pr/politicas" },
      { name: "Termos e condições", url: "/inicio/pr/terminos" },
    ],
  },
  {
    section: "Empresa",
    links: [
      { name: "Serviços", url: "/inicio/pr/services" },
      { name: "Blog", url: "/inicio/pr/blog" },
      { name: "Contate-nos", url: "/inicio/pr/contact" },
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
    "Sotomayor Consulting International não é um banco, instituição financeira nem presta serviços de crédito direto. Somos uma empresa de consultoria que oferece assessoria e acompanhamento na constituição de empresas, abertura de contas, trâmites e serviços tecnológicos.",
  experiencia: "",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
  mensajes,
};
