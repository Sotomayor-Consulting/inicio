/* Dados de LLC*/
export const dataLLC = {
  categoria: "LLC",
  titulo: "Abertura de Empresa nos EUA",
  descripcion:
    "Acompanhamos você na criação da sua Limited Liability Company (LLC) nos Estados Unidos e fornecemos todos os serviços subsequentes que você pode precisar. Com nosso serviço de incorporação, guiamos você em cada etapa do processo. Nossa equipe de especialistas está pronta para oferecer soluções personalizadas.",

  /* Features */
  titulofeatures: "O que nossos planos podem incluir?",
  descripcionfeatures: "Tudo o que você precisa para lançar sua empresa nos EUA.",

  /* Tarjeta Features */

  TarjetasFeatures: [
    {
      icono: "mingcute:document-2-line",
      titulo: "Estrutura Legal Completa",
      descripcion: "Documentos fundacionais da sua empresa",
      lista: [
        "Artigos de Organização (documento oficial do estado)",
        "Acordo Operacional (regras internas de funcionamento)",
      ],
    },
    {
      icono: "mingcute:safe-shield-2-fill",
      titulo: "Identificação Fiscal e Conformidade",
      descripcion: "Procedimentos fiscais essenciais",
      lista: [
        "EIN (número de identificação fiscal federal)",
        "Pedido de Isenção BE-13 ao BEA",
        "Necessário para contas bancárias e contratos",
      ],
    },
    {
      icono: "mingcute:location-line",
      titulo: "Endereço e Agente Registrado",
      descripcion: "Presença legal nos EUA",
      lista: [
        "Endereço comercial para correspondência oficial",
        "Agente Registrado incluído no primeiro ano",
        "Renovação anual: $200 USD",
      ],
    },
  ],

  /* Pricing */

  titulopricing: "Incporpore sua LLC rapidamente",
  descripcionpricing:
    "Escolha o plano que melhor se adapta ao seu negócio e comece a operar nos EUA com suporte legal e tributário.",
  planes: [
    {
      categoria: "normal",
      titulo: "Plano Básico",
      descripcion: "Incorpore sua LLC com o essencial para operar legalmente.",
      precio: "350",
      boton: "Obtenha o pacote básico",
      icono: "mingcute:check-fill",
      lista: [
        "Incorporação da LLC perante o Estado.",
        "Obtenção do EIN (Número de Identificação Tributária).",
        "Agente Residente por um ano.",
      ],
      link: "https://www.cognitoforms.com/SotomayorConsultingInternational/RegistroPlanesDeIncorporaci%C3%B3n?entry=%7B%22PlanDeServicio%22:%2211-66%22%7D",
    },
    {
      categoria: "popular",
      titulo: "Plano Business",
      descripcion:
        "Estratégia fiscal e legal completa para sua LLC. Ideal para fazer as coisas certas desde o início.",
      precio: "950",
      boton: "Obtenha o plano Business",
      icono: "mingcute:star-fill",
      anadido:
        "Os benefícios do Plano Básico mais os benefícios do plano padrão, mais:",
      lista: [
        "Planejamento e design jurídico-tributário.",
        "Acompanhamento bancário (Mercury ou Relay + Stripe).",
        "EIN acelerado.",
      ],
      link: "https://www.cognitoforms.com/SotomayorConsultingInternational/RegistroPlanesDeIncorporaci%C3%B3n?entry=%7B%22PlanDeServicio%22:%2211-67%22%7D",
    },
    {
      categoria: "normal",
      titulo: "Plano Padrão",
      descripcion: "Inclui suporte legal e documentos-chave para operar.",
      precio: "600",
      boton: "Obtenha o plano padrão",
      icono: "mingcute:check-fill",
      anadido: "Os benefícios do Plano Básico mais:",
      lista: [
        "Elaboração do Acordo Operacional.",
        "Consultas ilimitadas por um ano.",
        "Pedido de Isenção BE-13",
      ],
      link: "https://www.cognitoforms.com/SotomayorConsultingInternational/RegistroPlanesDeIncorporaci%C3%B3n?entry=%7B%22PlanDeServicio%22:%2211-101%22%7D",
    },
    {
      categoria: "normal",
      titulo: "Plano Design - upgrade",
      descripcion:
        "Planejamento estratégico e design da LLC, ideal para quem quer ir passo a passo.",
      precio: "350",
      boton: "Obtenha o plano design/upgrade",
      icono: "mingcute:check-fill",
      lista: ["Planejamento e design de LLC"],
      link: "https://www.cognitoforms.com/SotomayorConsultingInternational/RegistroPlanesDeIncorporaci%C3%B3n?entry=%7B%22PlanDeServicio%22%3A%2211-224%22%7D",
    },
  ],
};
/* Dados de LLC*/

/* Dados de banking*/
export const dataBanking = {
  categoria: "Banking",
  titulo: "Banking e cobranças para sua empresa nos EUA",
  descripcion:
    "Conecte sua empresa à infraestrutura financeira mais robusta do mundo e cobre clientes globais de forma segura e eficiente.",

  /* Features */
  titulofeatures: "O que nossos planos podem incluir?",
  descripcionfeatures: "Tudo o que você precisa para lançar sua empresa nos EUA.",

  /* Tarjeta Features */

  TarjetasFeatures: [
    {
      pocision: "left",
      svg: "mercury",
      icono: "mingcute:check-circle-fill",
      titulo: "Conta bancária empresarial no Mercury Bank",
      titulo2: "Abertura de conta Mercury",
      descripcion:
        "Mercury é uma plataforma bancária digital projetada para empresas modernas. Permite gerenciar seu dinheiro nos EUA 100% online, com segurança e sem atrito, ideal para empresas internacionais e não residentes.",
      precio: "200",
      boton: "Fale com um assessor",
      lista: [
        "Conta bancária nos EUA em nome da sua empresa",
        "Sem agências físicas, gestão 100% digital",
        "Transferências ACH e Wire",
        "Integração com Stripe e QuickBooks",
        "Dashboard moderno e fácil de usar",
      ],
      link: "https://wa.link/trimy6",
    },
    {
      pocision: "right",
      svg: "stripe",
      icono: "mingcute:check-circle-fill",
      titulo: "Processador de pagamentos com Stripe",
      titulo2: "Ativação do Stripe",
      descripcion:
        "Stripe é uma das plataformas de pagamento mais utilizadas em todo o mundo. Permite que sua empresa receba com cartão de crédito e débito de clientes de qualquer parte do mundo de forma rápida, segura e profissional.",
      precio: "200",
      boton: "Fale com um assessor",
      lista: [
        "Cobranças com cartões internacionais",
        "Pagamentos recorrentes e assinaturas",
        "Faturamento automático",
        "Alta taxa de aprovação de pagamentos",
        "Integração com sites e plataformas digitais",
      ],
      link: "https://wa.link/vq453r",
    },
    {
      pocision: "left",
      svg: "relay",
      icono: "mingcute:check-circle-fill",
      titulo: "Processador de pagamentos com Relay",
      titulo2: "Ativação do Relay",
      descripcion:
        "Relay é uma plataforma de pagamentos que permite que sua empresa receba com cartão de crédito e débito de clientes de qualquer parte do mundo de forma rápida, segura e profissional.",
      precio: "200",
      boton: "Fale com um assessor",
      lista: [
        "Até 20 contas correntes separadas em uma plataforma",
        "Cartões de débito individuais para cada conta",
        "Controle de gastos por equipe/departamento",
        "Aprovações para transferências ACH e pagamentos",
        "Integração com QuickBooks, Gusto e ferramentas de folha de pagamento",
      ],
      link: "https://wa.link/a2589f",
    },
  ],

  /* Pricing */
};

/* Dados de banking */

/* Dados de contabilidade*/

export const dataContabilidad = {
  categoria: "contabilidade",
  titulo: "Contabilidade para sua empresa.",
  descripcion:
    "Mantenha sua empresa em conformidade com as regulamentações fiscais estadounidenses. Nossos contadores especializados preparam suas declarações e orientam você em estratégias de otimização tributária.",

  /* Features */
  titulofeatures: "O que nosso serviço de contabilidade inclui?",

  /* Tarjeta Features */

  TarjetasFeatures: [
    {
      estado: "active",
      icono: "ant-design:file-protect-outlined",
      titulo: "Declarações Fiscais",
      descripcion: "Formulário 5472, 1120 e relatórios estaduais necessários",
      imagen:
        "https://images.unsplash.com/photo-1764231467848-dc20e066cde2?q=80&w=706&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      estado: "inactive",
      icono: "ant-design:folder-open-filled",
      titulo: "Contabilidade Mensal",
      descripcion: "Registro de transações e livros atualizados.",
      imagen:
        "https://images.unsplash.com/photo-1764231467896-73f0ef4438aa?q=80&w=666&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      estado: "inactive",
      icono: "ant-design:schedule-outlined",
      titulo: "Relatórios Financeiros",
      descripcion: "Análise trimestral da saúde do seu negócio.",
      imagen:
        "https://images.unsplash.com/photo-1518976024611-28bf4b48222e?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      estado: "inactive",
      icono: "mingcute:safe-shield-2-fill",
      titulo: "Representação junto ao IRS",
      descripcion: "Representamos você perante o IRS se necessário.",
      imagen:
        "https://images.unsplash.com/photo-1567449303183-ae0d6ed1498e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ],

  tablapr: [
    {
      descripcion: "Formulário 1120 Informativo",
      cantidad: "1",
      valor: "200,00",
      total: "200,00",
    },
    {
      descripcion: "Formulário 5472",
      cantidad: "1",
      valor: "150,00",
      total: "150,00",
    },
  ],

  tablacondicional: [
    {
      data: "inputsformsa",
      descripcion: "Formulário 1120 Informativo",
      cantidad: "1",
      valor: "200,00",
      total: "200,00",
    },
    {
      data: "inputsformsa",
      descripcion: "Formulário 5472",
      cantidad: "1",
      valor: "150,00",
      total: "150,00",
    },
  ],
};

/* Dados de contabilidade*/

/* Dados de itin*/

export const dataitin = {
  categoria: "itin",
  titulo: "Processamento de ITIN",
  descripcion:
    "Obtenha seu ITIN de forma segura sem enviar documentos físicos. Acompanhamos todo o processo junto ao IRS.",

  /* Features */
  titulofeatures: "O que é o ITIN?",
  descripcionfeatures:
    "O ITIN (Individual Taxpayer Identification Number) é um número emitido pelo IRS para pessoas que não se qualificam para um Social Security Number, mas que precisam cumprir obrigações fiscais nos Estados Unidos.",

  /* Tarjeta Features */

  listaitin: [
    "Permite declarar impostos pessoais nos EUA",
    "Requisito para socios ou membros de LLCs",
    "Facilita a conformidade fiscal perante o IRS",
    "Processo seguro, orientado e sem envio de passaporte físico",
  ],

  titulopricingitin: "Custo do processamento de ITIN",
  precioitin: "400",
  tiempoitin: "Tempo estimado",
  tiempoitin2: "2 a 3 meses",
};

/* Dados de itin*/

/* Dados de serviços legais*/

export const dataLegales = {
  categoria: "legais",
  titulo: "Serviços Legais",
  descripcion:
    "Preparamos todos os documentos legais que sua empresa precisa para operar corretamente nos Estados Unidos. Acordo Operacional, resoluções corporativas, emendas e muito mais.",

  listadelegales: [
    {
      icono: "mingcute:document-2-line",
      titulo: "OPERATING AGREEMENT",
      descripcion:
        "Documento legal fundamental que estabelece a estrutura, regras de operação e distribuição de lucros da sua LLC.",
      pregunta: "Por que preciso de um Acordo Operacional?",
      respuesta:
        "Protege sua responsabilidade limitada, define claramente os papéis de cada membro e evita conflitos futuros. É essencial para o funcionamento interno e proteção legal da sua empresa.",
    },
    {
      icono: "mingcute:file-certificate-line",
      titulo: "W-9",
      descripcion:
        "Formulário do IRS necessário para relatar informações fiscais e receber pagamentos de clientes estadounidenses.",
      pregunta: "Quando preciso do formulário W-9?",
      respuesta:
        "É obrigatório quando você trabalha com clientes estadounidenses ou empresas que pagarão mais de $600 por ano. Sem este formulário, seus clientes podem reter 30% dos seus pagamentos.",
    },
    {
      icono: "mingcute:shield-shape-line",
      titulo: "BE-13 (PEDIDO DE ISENÇÃO)",
      descripcion:
        "Pedido de isenção junto ao Escritório de Análise Econômica (BEA) dos EUA que permite a investimentos estrangeiros qualificados não apresentar o relatório completo do BE-12, evitando cargas administrativas desnecessárias.",
      pregunta: "O que acontece se eu não apresentar o Pedido de Isenção BE-13?",
      respuesta:
        "Não apresentar o BE-13 quando exigido pode resultar em multas de até US$ 4.603 por infração (ajustadas pela inflação), além de sanções civis e a obrigação de apresentar relatórios retroativos completos. O BEA exige este formulário para investimentos estrangeiros diretos qualificados.",
    },
    {
      icono: "mingcute:seal-line",
      titulo: "APOSTILAMENTO",
      descripcion:
        "Legalização de documentos para uso internacional através da Apostila de Haia, válida em mais de 100 países.",
      pregunta: "Que documentos preciso apostilar?",
      respuesta:
        "Geralmente é necessário para Acordo Operacional, certificados de boa situação e documentos de constituição quando você precisa abrir contas bancárias ou realizar procedimentos fora dos Estados Unidos.",
    },
    {
      icono: "mingcute:building-2-line",
      titulo: "DBA (DOING BUSINESS AS)",
      descripcion:
        "Registro de nome comercial que permite operar sua empresa sob um nome diferente do nome legal registrado.",
      pregunta: "Quando devo registrar um DBA?",
      respuesta:
        "Quando você quer operar sob um nome diferente do nome legal da sua LLC, precisa abrir uma conta bancária com o nome comercial ou está criando uma linha de produtos com marca própria.",
    },
    {
      icono: "mingcute:paper-line",
      titulo: "RESELLER CERTIFICATE",
      descripcion:
        "Certificado de isenção de impostos para compras atacadistas destinadas à revenda comercial.",
      pregunta: "Quanto posso economizar com o Reseller Certificate?",
      respuesta:
        "Você pode evitar pagar o imposto de vendas nas suas compras de inventário, o que representa uma economia média de 6-10% em cada compra. É essencial para negócios de revenda ou dropshipping.",
    },
    {
      icono: "mingcute:file-star-line",
      titulo: "D-U-N-S NUMBER",
      descripcion:
        "Identificador empresarial emitido pela Dun & Bradstreet, necessário para construir histórico de crédito e acessar financiamento e contratos corporativos.",
      pregunta: "Por que preciso de um número D-U-N-S?",
      respuesta:
        "É obrigatório para trabalhar com grandes corporações, acessar programas de desenvolvedores da Apple, vender para o governo federal e construir seu histórico de crédito empresarial nos EUA.",
    },
    {
      icono: "mingcute:laurel-wreath-line",
      titulo: "CERTIFICATE OF GOOD STANDING",
      descripcion:
        "Certificado oficial emitido pelo estado que confirma que a empresa está ativa, em dia com suas obrigações e autorizada a operar legalmente.",
      pregunta: "Quando preciso do Certificate of Good Standing?",
      respuesta:
        "Geralmente é solicitado por bancos para abrir contas, clientes corporativos para contratos, e quando você precisa apostilar documentos ou fazer negócios com o governo.",
    },
  ],
};

/* Dados de serviços legais*/

/* Dados de desenvolvimento web*/
import imagenweb1 from "src/images/imagen-web-1.png";
import imagenweb2 from "src/images/imagen-web-2.png";
import imagenweb3 from "src/images/imagen-web-3.png";
import imagenweb4 from "src/images/imagen-web-4.png";
export const dataWeb = {
  categoria: "paginas-web",
  titulo: "Desenvolvimento Web",
  descripcion:
    "Sites profissionais, modernos e otimizados para converter visitantes em clientes.",

  features: [
    {
      estado: "ativo",
      icono: "mingcute:device-line",
      titulo: "Design 100% Responsivo",
      descripcion:
        "Visualização perfeita em celulares, tablets e computadores.",
      image: imagenweb1,
    },
    {
      estado: "inativo",
      icono: "mingcute:code-line",
      titulo: "Otimização SEO Básica",
      descripcion:
        "Meta tags, estrutura de títulos e velocidade de carregamento otimizada.",
      image: imagenweb2,
    },
    {
      estado: "inativo",
      icono: "mingcute:web-fill",
      titulo: "Estrutura Corporativa",
      descripcion: "Home, Serviços, Sobre, Contato e Políticas.",
      image: imagenweb3,
    },
    {
      estado: "inativo",
      icono: "mingcute:earth-2-line",
      titulo: "Hospedagem e Domínio",
      descripcion: "Gestão completa do primeiro ano de hospedagem e domínio.",
      image: imagenweb4,
    },
  ],

  preciostitulo: "Desenvolvimento de página web",
  preciossubtitulo: "Investimento único",
  precio: "350",
  link: "https://wa.link/0k0sf6",

  listamini: [
    {
      icono: "mingcute:refresh-2-fill",
      titulo: "Custo Recorrente",
      descripcion: "Domínio e Hospedagem: $85 USD / ano",
    },
    {
      icono: "mingcute:time-line",
      titulo: "Tempo estimado",
      descripcion: "2 semanas",
    },
  ],
};

/* Dados de desenvolvimento web*/

/* Dados de Partner de odoo*/
import videoOdoo1 from "src/images/video_homepage.webm";
import imagen2 from "@images/Captura de pantalla 2026-02-11 124947.png";
import imagen3 from "@images/capacitacionOdoo.webp";
import imagen4 from "@images/imagenodoo.gif";
export const dataOdoo = {
  categoria: "partner-odoo",
  titulo: "Software empresarial",
  descripcion: "Gerencie todo o seu negócio a partir de um único software",

  features: [
    {
      estado: "ativo",
      icono: "mingcute:classify-2-line",
      titulo: "Aplicações empresariais",
      descripcion:
        "Cada aplicação simplifica um processo e empodera mais pessoas.",
      image: videoOdoo1,
      tipo: "video",
    },
    {
      estado: "inativo",
      icono: "mingcute:brush-3-line",
      titulo: "Personalização sem limites",
      descripcion:
        "Aplicações adicionais com boa infraestrutura e serviços profissionais.",
      image: imagen2,
      tipo: "imagen",
      features2: [
        {
          titulo: "Personalização orientada ao que você precisa",
          descripcion:
            "Usamos o aplicativo Studio da Odoo para automatizar ações, personalizar telas e elaborar seus próprios relatórios e webhooks.",
          lista: [
            "Configuração básica para o modelo de negócio",
            "Personalização de telas e visualizações",
            "Configuração e conexão com outras plataformas",
          ],
        },
      ],
    },
    {
      estado: "inativo",
      icono: "mingcute:mind-map-line",
      titulo: "Consultoria em implementação",
      descripcion:
        "Analisamos suas necessidades, seu modelo de negócio e definimos o roteiro.",
      image: imagen3,
      tipo: "imagen",
      features2: [
        {
          titulo: "Consultoria em implementação e uso",
          descripcion:
            "Acompanhamos todo o processo de adoção da Odoo. Analisamos suas necessidades, definimos o roteiro e orientamos com boas práticas para maximizar a escalabilidade.",
          lista: [
            "Análise de processos e diagnóstico",
            "Plano de implementação personalizado",
            "Recomendações de boas práticas",
            "Acompanhamento pós-implementação",
          ],
        },
      ],
    },
    {
      estado: "inativo",
      icono: "mingcute:earth-2-line",
      titulo: "Capacitação",
      descripcion: "Capacitação do uso da Odoo para sua equipe",
      image: imagen4,
      tipo: "imagen",
      features2: [
        {
          titulo: "Capacitação para equipes especializadas",
          descripcion:
            "Treinamos sua equipe para que dominem a Odoo e a integrem eficazmente no dia a dia. Desenvolvemos workshops sob medida según o perfil de cada equipe.",
          lista: [
            "Workshops práticos in-company",
            "Material didático e guias de uso",
            "Capacitação em módulos específicos",
          ],
        },
      ],
    },
  ],

  tituloForm: "Agende uma consulta conosco",
  descripcionForm:
    "Descubra como transformar a Odoo no motor digital do seu negócio. Guiamos você passo a passo para que aproveite ao máximo cada módulo sem complicações.",
  preguntaForm: "Como podemos ajudar você?",
  listaForm: [
    "Personalizamos a Odoo para suas necessidades.",
    "Criamos a rota de implementação ideal según seu modelo de negócio",
    "Capacitamos sua equipe para usar a Odoo com confiança e autonomia",
  ],
};

/* Dados de Partner de odoo*/