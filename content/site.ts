/**
 * Single source of truth for all landing-page content (from .llm/PRD.MD).
 * Values in [BRACKETS] are placeholders still to be defined — TODO preencher.
 */

export const site = {
  brand: "RETIRO TECH",

  // TODO preencher: URL única de inscrição/checkout (Hotmart, Sympla, Stripe, wa.me…)
  ctaUrl: "#investimento",

  seo: {
    title: "RETIRO TECH — Imersão presencial de 1 dia",
    description:
      "Em um dia, você sai com um plano de ação de 90 dias para iniciar o seu faturamento — ou aumentar e bater o seu recorde.",
  },

  nav: [
    { label: "Para quem é", href: "#para-quem-e" },
    { label: "O dia", href: "#o-dia" },
    { label: "Mentor", href: "#mentor" },
  ],

  cta: {
    primary: "Quero minha vaga",
    nav: "Garantir minha vaga",
    invest: "Quero participar",
    secondary: "Ver o que você leva",
  },

  event: {
    format: "Imersão presencial, 1 dia (sábado)",
    modality: "Mentoria / consultoria em grupo",
    deliverable: "Plano de ação de 90 dias",
    location: "[LOCAL / CIDADE]", // TODO preencher
    date: "[DATA]", // TODO preencher
    seats: "[N] vagas", // TODO preencher
  },

  hero: {
    label: "Imersão presencial · 1 sábado",
    headline: "Você bateu no teto.",
    headlineAccent: "Agora é hora de construir o próximo andar.",
    promise: "Em um dia, você sai com um plano de ação de 90 dias.",
    sub: "Para iniciar o seu faturamento — ou aumentar e bater o seu recorde.",
  },

  audience: {
    label: "Para quem é",
    title: "Dois perfis, um mesmo teto.",
    profiles: [
      {
        tag: "Perfil 01",
        name: "CLT estabilizado",
        who: "Desenvolvedores, times de QA e profissionais de tecnologia.",
        range: "R$ 10 a 30 mil/mês",
        rangeLabel: "Faixa salarial",
        points: [
          "Bom tecnicamente e com estabilidade, mas percebeu que bateu no teto da carreira CLT.",
          "Quer empreender, mas não sabe por onde começar sem colocar tudo em risco.",
        ],
        goal: "Iniciar o próprio faturamento.",
      },
      {
        tag: "Perfil 02",
        name: "Freelancer / PJ",
        who: "Já começou a empreender.",
        range: "R$ 15 a 25 mil/mês",
        rangeLabel: "Faturamento travado",
        points: [
          "Faturamento dependente das próprias horas.",
          "Precisa de estrutura, posicionamento e um modelo que escale.",
        ],
        goal: "Chegar a R$ 100 a 200 mil/mês.",
      },
    ],
  },

  value: {
    label: "O que você leva",
    title: "Não é palestra motivacional — é experiência real, sem filtro.",
    pillars: [
      {
        title: "Abertura de empresa na prática",
        text: "CNPJ, regime tributário, contratos e os erros que custam caro no primeiro ano.",
      },
      {
        title: "Desenvolvimento de negócios",
        text: "Como um técnico aprende a vender, precificar e conquistar os primeiros clientes.",
      },
      {
        title: "Casos reais",
        text: "O que funcionou, o que deu errado e o que o mentor faria diferente hoje.",
      },
      {
        title: "Plano de 90 dias",
        text: "Construído durante o dia, aplicado à realidade de cada participante.",
      },
    ],
    planTitle: "Estrutura do seu plano de 90 dias",
    phases: [
      { phase: "Fase 1", period: "Dias 1–30", focus: "Estruturar", actions: "[Ações do primeiro mês]" }, // TODO preencher
      { phase: "Fase 2", period: "Dias 31–60", focus: "Vender", actions: "[Ações do segundo mês]" }, // TODO preencher
      { phase: "Fase 3", period: "Dias 61–90", focus: "Escalar", actions: "[Ações do terceiro mês]" }, // TODO preencher
    ],
  },

  agenda: {
    label: "O dia",
    title: "Um sábado inteiro, do diagnóstico ao plano.",
    // TODO preencher horários
    items: [
      { time: "08:30", block: "Abertura e diagnóstico: onde você está hoje" },
      { time: "[HORÁRIO]", block: "Minha trajetória: o que deu certo, o que deu errado" },
      { time: "[HORÁRIO]", block: "Abrindo a empresa: estrutura, impostos e contratos" },
      { time: "[HORÁRIO]", block: "Almoço e networking" },
      { time: "[HORÁRIO]", block: "Desenvolvimento de negócios: posicionamento, preço e vendas" },
      { time: "[HORÁRIO]", block: "Mão na massa: construindo o seu plano de 90 dias" },
      { time: "[HORÁRIO]", block: "Encerramento e próximos passos" },
    ],
  },

  mentor: {
    label: "O mentor",
    name: "[SEU NOME]", // TODO preencher
    photo: null as string | null, // TODO: caminho em /public, ex. "/mentor.jpg"
    bio: "Mais de 30 anos em tecnologia — do código à gestão executiva, passando por vendas, delivery e abertura de empresa.",
    highlights: ["[Empresas, resultados e momentos da trajetória a destacar]"], // TODO preencher
    stats: [
      { value: "30+", label: "anos em tecnologia" },
      { value: "[N]", label: "[outro número que comprove]" }, // TODO preencher
    ],
  },

  investment: {
    label: "Investimento",
    title: "Garanta sua vaga na próxima turma.",
    price: "[SEU PREÇO]", // TODO preencher
    conditions: "[condições de pagamento]", // TODO preencher
    included: [
      "Imersão presencial de um dia inteiro",
      "Plano de ação de 90 dias, pronto",
      "[Material de apoio / templates]", // TODO preencher
      "[Almoço, coffee break, bônus]", // TODO preencher
    ],
  },

  closing: {
    headline: "O teto é da carreira.",
    headlineAccent: "Não é seu.",
  },

  footer: {
    contacts: [
      { label: "[E-MAIL]", href: "#" }, // TODO preencher, ex. "mailto:contato@..."
      { label: "[INSTAGRAM]", href: "#" }, // TODO preencher
      { label: "[WHATSAPP]", href: "#" }, // TODO preencher
    ],
  },
};

export const isExternal = (href: string) => /^https?:\/\//.test(href);
