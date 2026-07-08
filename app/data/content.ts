export type Lang = "en" | "fr" | "de" | "es" | "pt" | "it" | "ar" | "no";

export const languages = [
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
  { code: "de", label: "DE" },
  { code: "es", label: "ES" },
  { code: "pt", label: "PT" },
  { code: "it", label: "IT" },
  { code: "ar", label: "AR" },
  { code: "no", label: "NO" },
] as const;

const en = {
    brand: "Invisible Mobile",
    phoneDataLabel: "GLOBAL DATA",
    phoneNetworkText: "Connected across supported networks",
    phoneAiLabel: "INVISIBLE AI",
    phoneAiText: "Your connectivity is ready. Nothing to configure.",
    chipNetworkLabel: "Network",
    chipNetworkValue: "5G Ready",
    chipAiLabel: "AI action",
    chipAiValue: "Auto setup",
    marquee: "ONE ESIM ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â· ONE ACCOUNT ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â· AI OPERATOR ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â· GLOBAL CONNECTIVITY ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â· INSTANT ACTIVATION ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â· ZERO COMPLEXITY ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â·",
    platformEyebrow: "Platform",
    aiEyebrow: "AI Operator",
    appEyebrow: "Application",
    appReadyText: "Ready now.",
    coverageEyebrow: "Global mobility",
    securityEyebrow: "Security",
    comparisonEyebrow: "Comparison",
    pricingEyebrow: "Pricing",
    pricingNote: "Wholesale validation required",
    faqEyebrow: "FAQ",
    footerTagline: "AI-powered global mobile connectivity.",
    nav: ["Platform", "AI", "App", "Coverage", "Security", "Pricing", "FAQ"],
    heroKicker: "AI-powered global mobile operator",
    heroTitle: "One eSIM. One AI. Connected everywhere.",
    heroSubtitle:
      "Invisible Mobile is a next-generation mobile platform where users install one eSIM once, then let AI manage connectivity, travel, usage, support and account actions.",
    primaryCta: "Request early access",
    secondaryCta: "Watch experience",
    heroStats: ["184 countries ready", "60-second activation", "AI support 24/7"],
    platformTitle: "A mobile operator designed to feel invisible.",
    platformText:
      "No country-by-country shopping, no repeated QR codes, no roaming confusion. One account controls the full connectivity experience.",
    aiTitle: "The operator becomes conversational.",
    aiText:
      "Users ask simple questions. The AI checks context, explains coverage, prepares travel, helps with setup and guides next actions.",
    appTitle: "A premium mobile app with almost no menus.",
    appText:
      "The interface focuses on what matters: connection, remaining data, destination readiness and AI assistance.",
    coverageTitle: "Built for people moving across the world.",
    coverageText:
      "For travelers, founders, students, remote workers and international teams who need mobile internet without friction.",
    securityTitle: "Security and trust by design.",
    securityText:
      "Identity, payments, account access and usage controls are designed to be protected from the beginning.",
    comparisonTitle: "Traditional telecom complexity, removed.",
    pricingTitle: "Simple pricing after wholesale validation.",
    faqTitle: "Questions before launch.",
    finalTitle: "Install once. Go anywhere.",
    finalText: "The future mobile operator is simple, intelligent and global.",
    cards: [
      ["Persistent eSIM", "Install once and keep the same digital mobile profile."],
      ["AI Operator", "Support, setup and usage become conversational."],
      ["Global-first", "Designed for international connectivity from day one."],
      ["Smart account", "One place for plan, usage, devices, billing and support."],
      ["Fast activation", "Built around instant onboarding and digital delivery."],
      ["Secure layer", "Identity, payment and account security built in."],
    ],
    aiMessages: [
      ["User", "I am flying to Japan tomorrow. Am I covered?"],
      ["Invisible AI", "Yes. Your eSIM is ready for supported networks. No new QR code required."],
      ["User", "Why is my connection slow?"],
      ["Invisible AI", "I checked your usage and network state. I can guide the fastest fix."],
    ],
    appCards: [
      ["Connected", "Global eSIM active"],
      ["Data", "42.8 GB available"],
      ["Travel", "Next destination ready"],
    ],
    people: [
      ["International founders", "Stay connected between meetings, airports and countries."],
      ["Remote workers", "One account for work, travel and daily mobile internet."],
      ["Global families", "Simple connectivity for people living across borders."],
    ],
    securityItems: ["Identity verification", "Secure payment", "Protected account", "Privacy controls"],
    comparison: {
      oldTitle: "Traditional operator",
      newTitle: "Invisible Mobile",
      old: ["Physical SIM friction", "Roaming rules", "Support queues", "Complex plans"],
      next: ["One eSIM", "AI assistance", "Simple actions", "Global-first account"],
    },
    plans: [
      ["One", "Essential mobile connectivity for light global usage."],
      ["Global", "Designed for international users and regular travelers."],
      ["Ultra", "For heavier usage, remote work and frequent mobility."],
    ],
    faq: [
      ["Is Invisible Mobile a classic telecom operator?", "It is designed as an AI-first mobile connectivity platform powered by eSIM infrastructure partners."],
      ["Will users need a physical SIM?", "No. The product vision is based on digital eSIM activation for compatible devices."],
      ["Will one eSIM work everywhere?", "The goal is one persistent eSIM across supported destinations, depending on partner capabilities."],
      ["Are the prices final?", "No. Final pricing must be confirmed after wholesale data costs and partner terms are validated."],
    ],
    footer: {
      description: "AI-powered global mobile connectivity platform.",
      columns: [
        ["Product", "Platform", "AI Operator", "App", "Coverage"],
        ["Company", "About", "Partners", "Press", "Contact"],
        ["Legal", "Privacy", "Terms", "Security", "Cookies"],
      ],
    },
};

const fr = {
    brand: "Invisible Mobile",
    phoneDataLabel: "DATA MONDIALE",
    phoneNetworkText: "ConnectÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â© aux rÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©seaux compatibles",
    phoneAiLabel: "IA INVISIBLE",
    phoneAiText: "Votre connectivitÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â© est prÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Âªte. Rien ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â  configurer.",
    chipNetworkLabel: "RÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©seau",
    chipNetworkValue: "5G prÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Âªte",
    chipAiLabel: "Action IA",
    chipAiValue: "Configuration auto",
    marquee: "UNE ESIM ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â· UN COMPTE ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â· OPÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â°RATEUR IA ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â· CONNECTIVITÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â° MONDIALE ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â· ACTIVATION INSTANTANÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â°E ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â· ZÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â°RO COMPLEXITÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â° ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â·",
    platformEyebrow: "Plateforme",
    aiEyebrow: "OpÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©rateur IA",
    appEyebrow: "Application",
    appReadyText: "PrÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Âªt maintenant.",
    coverageEyebrow: "MobilitÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â© mondiale",
    securityEyebrow: "SÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©curitÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©",
    comparisonEyebrow: "Comparaison",
    pricingEyebrow: "Prix",
    pricingNote: "Validation wholesale requise",
    faqEyebrow: "FAQ",
    footerTagline: "ConnectivitÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â© mobile mondiale pilotÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©e par IA.",
    nav: ["Plateforme", "IA", "Application", "Couverture", "SÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©curitÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©", "Prix", "FAQ"],
    heroKicker: "OpÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©rateur mobile mondial pilotÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â© par IA",
    heroTitle: "Une eSIM. Une IA. ConnectÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â© partout.",
    heroSubtitle:
      "Invisible Mobile est une plateforme mobile nouvelle gÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©nÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©ration oÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¹ lÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€šÃ‚Â¢utilisateur installe une eSIM une seule fois, puis lÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€šÃ‚Â¢IA gÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¨re la connectivitÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©, les voyages, lÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€šÃ‚Â¢usage, le support et le compte.",
    primaryCta: "Demander un accÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¨s",
    secondaryCta: "Voir lÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€šÃ‚Â¢expÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©rience",
    heroStats: ["184 pays prÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Âªts", "Activation en 60 secondes", "Support IA 24/7"],
    platformTitle: "Un opÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©rateur mobile conÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â§u pour devenir invisible.",
    platformText:
      "Plus besoin dÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€šÃ‚Â¢acheter pays par pays, de scanner plusieurs QR codes ou de comprendre le roaming. Un seul compte pilote toute lÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€šÃ‚Â¢expÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©rience.",
    aiTitle: "LÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€šÃ‚Â¢opÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©rateur devient conversationnel.",
    aiText:
      "LÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€šÃ‚Â¢utilisateur pose une question simple. LÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€šÃ‚Â¢IA vÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©rifie le contexte, explique la couverture, prÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©pare le voyage, aide ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â  configurer et guide lÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€šÃ‚Â¢action suivante.",
    appTitle: "Une application premium avec presque aucun menu.",
    appText:
      "LÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€šÃ‚Â¢interface montre uniquement lÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€šÃ‚Â¢essentiel : connexion, data restante, destination prÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Âªte et assistance IA.",
    coverageTitle: "PensÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â© pour les personnes qui bougent dans le monde.",
    coverageText:
      "Pour voyageurs, fondateurs, ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©tudiants, travailleurs ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â  distance et ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©quipes internationales qui veulent Internet mobile sans friction.",
    securityTitle: "SÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©curitÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â© et confiance dÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¨s la conception.",
    securityText:
      "IdentitÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©, paiements, accÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¨s au compte et contrÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â´les dÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€šÃ‚Â¢usage sont pensÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©s pour ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Âªtre protÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©gÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©s dÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¨s le dÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©part.",
    comparisonTitle: "La complexitÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â© tÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©lÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©com traditionnelle, supprimÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©e.",
    pricingTitle: "Des prix simples aprÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¨s validation wholesale.",
    faqTitle: "Questions avant lancement.",
    finalTitle: "Installez une fois. Allez partout.",
    finalText: "Le futur opÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©rateur mobile est simple, intelligent et mondial.",
    cards: [
      ["eSIM persistante", "Installation unique et mÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Âªme profil mobile numÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©rique."],
      ["OpÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©rateur IA", "Support, configuration et usage deviennent conversationnels."],
      ["PensÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â© mondial", "ConÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â§u pour la connectivitÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â© internationale dÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¨s le dÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©part."],
      ["Compte intelligent", "Un seul espace pour forfait, usage, appareils, paiement et support."],
      ["Activation rapide", "Onboarding instantanÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â© et livraison digitale."],
      ["Couche sÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©curisÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©e", "IdentitÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©, paiement et sÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©curitÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â© du compte intÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©grÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©s."],
    ],
    aiMessages: [
      ["Utilisateur", "Je pars au Japon demain. Suis-je couvert ?"],
      ["Invisible AI", "Oui. Votre eSIM est prÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Âªte pour les rÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©seaux compatibles. Aucun nouveau QR code requis."],
      ["Utilisateur", "Pourquoi ma connexion est lente ?"],
      ["Invisible AI", "JÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€šÃ‚Â¢ai vÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©rifiÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â© votre usage et lÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©tat rÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©seau. Je peux vous guider vers la solution la plus rapide."],
    ],
    appCards: [
      ["ConnectÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©", "eSIM mondiale active"],
      ["Data", "42,8 Go disponibles"],
      ["Voyage", "Prochaine destination prÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Âªte"],
    ],
    people: [
      ["Fondateurs internationaux", "Restez connectÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â© entre rÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©unions, aÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©roports et pays."],
      ["Travailleurs ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â  distance", "Un seul compte pour travail, voyage et Internet mobile."],
      ["Familles mondiales", "Une connectivitÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â© simple pour les personnes entre plusieurs pays."],
    ],
    securityItems: ["VÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©rification dÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€šÃ‚Â¢identitÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©", "Paiement sÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©curisÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©", "Compte protÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©gÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©", "ContrÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â´les de confidentialitÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©"],
    comparison: {
      oldTitle: "OpÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©rateur classique",
      newTitle: "Invisible Mobile",
      old: ["Friction SIM physique", "RÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¨gles roaming", "Files support", "Forfaits complexes"],
      next: ["Une eSIM", "Assistance IA", "Actions simples", "Compte mondial"],
    },
    plans: [
      ["One", "ConnectivitÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â© essentielle pour usage mondial lÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©ger."],
      ["Global", "Pour utilisateurs internationaux et voyageurs rÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©guliers."],
      ["Ultra", "Pour usage plus ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©levÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©, tÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©lÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©travail et mobilitÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â© frÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©quente."],
    ],
    faq: [
      ["Invisible Mobile est-il un opÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©rateur classique ?", "CÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€šÃ‚Â¢est une plateforme de connectivitÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â© mobile pilotÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©e par IA et alimentÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©e par des partenaires dÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€šÃ‚Â¢infrastructure eSIM."],
      ["Faut-il une SIM physique ?", "Non. La vision produit repose sur lÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€šÃ‚Â¢activation eSIM digitale pour appareils compatibles."],
      ["Une seule eSIM fonctionnera-t-elle partout ?", "LÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€šÃ‚Â¢objectif est une eSIM persistante dans les destinations compatibles, selon les capacitÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©s des partenaires."],
      ["Les prix sont-ils dÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©finitifs ?", "Non. Les prix finaux seront confirmÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©s aprÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¨s validation des coÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â»ts wholesale et des conditions partenaires."],
    ],
    footer: {
      description: "Plateforme mondiale de connectivitÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â© mobile pilotÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©e par IA.",
      columns: [
        ["Produit", "Plateforme", "OpÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©rateur IA", "Application", "Couverture"],
        ["Entreprise", "ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ propos", "Partenaires", "Presse", "Contact"],
        ["LÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©gal", "ConfidentialitÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©", "Conditions", "SÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©curitÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©", "Cookies"],
      ],
    },
};

export const content = {
  en,
  fr,
  no: {
    ...en,
    nav: ["Plattform", "KI", "App", "Dekning", "Sikkerhet", "Priser", "FAQ"],
    heroKicker: "Global mobiloperatør drevet av KI",
    heroTitle: "Én eSIM. Én KI. Tilkoblet overalt.",
    heroSubtitle: "Invisible Mobile er en neste generasjons mobilplattform der brukerne installerer én eSIM én gang og lar KI håndtere tilkobling, reiser, bruk, støtte og kontohandlinger.",
    primaryCta: "Be om tidlig tilgang",
    secondaryCta: "Se opplevelsen",
    heroStats: ["184 land tilgjengelige", "Aktivering på 60 sekunder", "KI-støtte 24/7"],
    phoneDataLabel: "GLOBALE DATA",
    phoneNetworkText: "Tilkoblet støttede nettverk",
    phoneAiLabel: "INVISIBLE KI",
    phoneAiText: "Tilkoblingen din er klar. Ingenting å konfigurere.",
    chipNetworkLabel: "Nettverk",
    chipNetworkValue: "5G klar",
    chipAiLabel: "KI-handling",
    chipAiValue: "Automatisk oppsett",
    marquee: "ÉN ESIM · ÉN KONTO · KI-OPERATØR · GLOBAL TILKOBLING · ØYEBLIKKELIG AKTIVERING · NULL KOMPLEKSITET ·",
    platformEyebrow: "Plattform",
    platformTitle: "En mobiloperatør designet for å føles usynlig.",
    platformText: "Ingen kjøp land for land, ingen gjentatte QR-koder og ingen forvirring rundt roaming. Én konto styrer hele tilkoblingsopplevelsen.",
    aiEyebrow: "KI-operatør",
    aiTitle: "Operatøren blir samtalebasert.",
    aiText: "Brukerne stiller enkle spørsmål. KI sjekker konteksten, forklarer dekningen, forbereder reiser, hjelper med oppsettet og veileder neste handling.",
    appEyebrow: "Applikasjon",
    appTitle: "En førsteklasses mobilapp med nesten ingen menyer.",
    appText: "Grensesnittet fokuserer på det som betyr noe: tilkobling, gjenværende data, reisemålets beredskap og KI-assistanse.",
    appReadyText: "Klar nå.",
    coverageEyebrow: "Global mobilitet",
    coverageTitle: "Bygget for mennesker som beveger seg rundt i verden.",
    coverageText: "For reisende, gründere, studenter, fjernarbeidere og internasjonale team som trenger mobilt internett uten problemer.",
    securityEyebrow: "Sikkerhet",
    securityTitle: "Sikkerhet og tillit gjennom hele designet.",
    securityText: "Identitet, betalinger, kontotilgang og brukskontroller er designet for å være beskyttet fra starten.",
    comparisonEyebrow: "Sammenligning",
    comparisonTitle: "Tradisjonell telekomkompleksitet, fjernet.",
    pricingEyebrow: "Priser",
    pricingTitle: "Enkle priser etter validering av grossistvilkår.",
    pricingNote: "Validering av grossistvilkår kreves",
    faqEyebrow: "FAQ",
    faqTitle: "Spørsmål før lansering.",
    finalTitle: "Installer én gang. Reis hvor som helst.",
    finalText: "Fremtidens mobiloperatør er enkel, intelligent og global.",
    footerTagline: "Global mobiltilkobling drevet av KI.",
    cards: [
      ["Permanent eSIM", "Installer én gang og behold den samme digitale mobilprofilen."],
      ["KI-operatør", "Støtte, oppsett og bruk blir samtalebasert."],
      ["Global fra starten", "Designet for internasjonal tilkobling fra første dag."],
      ["Smart konto", "Ett sted for abonnement, bruk, enheter, fakturering og støtte."],
      ["Rask aktivering", "Bygget for øyeblikkelig onboarding og digital levering."],
      ["Sikkert lag", "Identitet, betaling og kontosikkerhet er integrert."]
    ],
    aiMessages: [
      ["Bruker", "Jeg flyr til Japan i morgen. Har jeg dekning?"],
      ["Invisible AI", "Ja. eSIM-kortet ditt er klart for støttede nettverk. Ingen ny QR-kode er nødvendig."],
      ["Bruker", "Hvorfor er tilkoblingen min treg?"],
      ["Invisible AI", "Jeg har sjekket bruken din og nettverksstatusen. Jeg kan veilede deg til den raskeste løsningen."]
    ],
    appCards: [
      ["Tilkoblet", "Global eSIM aktiv"],
      ["Data", "42,8 GB tilgjengelig"],
      ["Reise", "Neste reisemål klart"]
    ],
    people: [
      ["Internasjonale gründere", "Hold deg tilkoblet mellom møter, flyplasser og land."],
      ["Fjernarbeidere", "Én konto for arbeid, reiser og daglig mobilt internett."],
      ["Globale familier", "Enkel tilkobling for mennesker som lever på tvers av landegrenser."]
    ],
    securityItems: ["Identitetsverifisering", "Sikker betaling", "Beskyttet konto", "Personvernkontroller"],
    comparison: {
      oldTitle: "Tradisjonell operatør",
      newTitle: "Invisible Mobile",
      old: ["Problemer med fysisk SIM", "Roamingregler", "Supportkøer", "Komplekse abonnementer"],
      next: ["Én eSIM", "KI-assistanse", "Enkle handlinger", "Global konto"]
    },
    plans: [
      ["One", "Grunnleggende mobiltilkobling for lett global bruk."],
      ["Global", "Designet for internasjonale brukere og regelmessige reisende."],
      ["Ultra", "For høyere bruk, fjernarbeid og hyppig mobilitet."]
    ],
    faq: [
      ["Er Invisible Mobile en tradisjonell mobiloperatør?", "Den er designet som en KI-fokusert mobil tilkoblingsplattform drevet av eSIM-infrastrukturpartnere."],
      ["Trenger brukerne et fysisk SIM-kort?", "Nei. Produktvisjonen er basert på digital eSIM-aktivering for kompatible enheter."],
      ["Vil én eSIM fungere overalt?", "Målet er én permanent eSIM på støttede destinasjoner, avhengig av partnernes kapasitet."],
      ["Er prisene endelige?", "Nei. Endelige priser må bekreftes etter validering av grossistkostnader for data og partnervilkår."]
    ],
    footer: {
      description: "Global mobil tilkoblingsplattform drevet av KI.",
      columns: [
        ["Produkt", "Plattform", "KI-operatør", "App", "Dekning"],
        ["Selskap", "Om oss", "Partnere", "Presse", "Kontakt"],
        ["Juridisk", "Personvern", "Vilkår", "Sikkerhet", "Informasjonskapsler"]
      ]
    }
  },  ar: {
    ...en,
    nav: ["Ø§Ù„Ù…Ù†ØµØ©", "Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ", "Ø§Ù„ØªØ·Ø¨ÙŠÙ‚", "Ø§Ù„ØªØºØ·ÙŠØ©", "Ø§Ù„Ø£Ù…Ø§Ù†", "Ø§Ù„Ø£Ø³Ø¹Ø§Ø±", "Ø§Ù„Ø£Ø³Ø¦Ù„Ø© Ø§Ù„Ø´Ø§Ø¦Ø¹Ø©"],
    heroKicker: "Ù…Ø´ØºÙ„ Ø§ØªØµØ§Ù„Ø§Øª Ø¹Ø§Ù„Ù…ÙŠ Ù…Ø¯Ø¹ÙˆÙ… Ø¨Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ",
    heroTitle: "Ø´Ø±ÙŠØ­Ø© eSIM ÙˆØ§Ø­Ø¯Ø©. Ø°ÙƒØ§Ø¡ Ø§ØµØ·Ù†Ø§Ø¹ÙŠ ÙˆØ§Ø­Ø¯. Ø§ØªØµØ§Ù„ ÙÙŠ ÙƒÙ„ Ù…ÙƒØ§Ù†.",
    heroSubtitle: "Invisible Mobile Ù‡ÙŠ Ù…Ù†ØµØ© Ø§ØªØµØ§Ù„Ø§Øª Ù…ØªÙ†Ù‚Ù„Ø© Ù…Ù† Ø§Ù„Ø¬ÙŠÙ„ Ø§Ù„Ø¬Ø¯ÙŠØ¯ØŒ ÙŠÙ‚ÙˆÙ… ÙÙŠÙ‡Ø§ Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù… Ø¨ØªØ«Ø¨ÙŠØª Ø´Ø±ÙŠØ­Ø© eSIM Ù…Ø±Ø© ÙˆØ§Ø­Ø¯Ø©ØŒ Ø«Ù… ÙŠØªÙˆÙ„Ù‰ Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ Ø¥Ø¯Ø§Ø±Ø© Ø§Ù„Ø§ØªØµØ§Ù„ ÙˆØ§Ù„Ø³ÙØ± ÙˆØ§Ù„Ø§Ø³ØªØ®Ø¯Ø§Ù… ÙˆØ§Ù„Ø¯Ø¹Ù… ÙˆØ¥Ø¬Ø±Ø§Ø¡Ø§Øª Ø§Ù„Ø­Ø³Ø§Ø¨.",
    primaryCta: "Ø§Ø·Ù„Ø¨ Ø§Ù„ÙˆØµÙˆÙ„ Ø§Ù„Ù…Ø¨ÙƒØ±",
    secondaryCta: "Ø´Ø§Ù‡Ø¯ Ø§Ù„ØªØ¬Ø±Ø¨Ø©",
    heroStats: ["Ù…ØªØ§Ø­ ÙÙŠ 184 Ø¯ÙˆÙ„Ø©", "ØªÙØ¹ÙŠÙ„ Ø®Ù„Ø§Ù„ 60 Ø«Ø§Ù†ÙŠØ©", "Ø¯Ø¹Ù… Ø¨Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ Ø¹Ù„Ù‰ Ù…Ø¯Ø§Ø± Ø§Ù„Ø³Ø§Ø¹Ø©"],
    phoneDataLabel: "Ø¨ÙŠØ§Ù†Ø§Øª Ø¹Ø§Ù„Ù…ÙŠØ©",
    phoneNetworkText: "Ù…ØªØµÙ„ Ø¨Ø§Ù„Ø´Ø¨ÙƒØ§Øª Ø§Ù„Ù…Ø¯Ø¹ÙˆÙ…Ø©",
    phoneAiLabel: "Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ INVISIBLE",
    phoneAiText: "Ø§ØªØµØ§Ù„Ùƒ Ø¬Ø§Ù‡Ø². Ù„Ø§ Ø­Ø§Ø¬Ø© Ø¥Ù„Ù‰ Ø£ÙŠ Ø¥Ø¹Ø¯Ø§Ø¯.",
    chipNetworkLabel: "Ø§Ù„Ø´Ø¨ÙƒØ©",
    chipNetworkValue: "Ø¬Ø§Ù‡Ø² Ù„Ø´Ø¨ÙƒØ© 5G",
    chipAiLabel: "Ø¥Ø¬Ø±Ø§Ø¡ Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ",
    chipAiValue: "Ø¥Ø¹Ø¯Ø§Ø¯ ØªÙ„Ù‚Ø§Ø¦ÙŠ",
    marquee: "Ø´Ø±ÙŠØ­Ø© ESIM ÙˆØ§Ø­Ø¯Ø© Â· Ø­Ø³Ø§Ø¨ ÙˆØ§Ø­Ø¯ Â· Ù…Ø´ØºÙ„ Ø¨Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ Â· Ø§ØªØµØ§Ù„ Ø¹Ø§Ù„Ù…ÙŠ Â· ØªÙØ¹ÙŠÙ„ ÙÙˆØ±ÙŠ Â· Ø¨Ø¯ÙˆÙ† ØªØ¹Ù‚ÙŠØ¯ Â·",
    platformEyebrow: "Ø§Ù„Ù…Ù†ØµØ©",
    platformTitle: "Ù…Ø´ØºÙ„ Ø§ØªØµØ§Ù„Ø§Øª Ù…ØµÙ…Ù… Ù„ÙŠØ¹Ù…Ù„ Ø¨Ø´ÙƒÙ„ ØºÙŠØ± Ù…Ø±Ø¦ÙŠ.",
    platformText: "Ù„Ø§ Ø­Ø§Ø¬Ø© Ù„Ø´Ø±Ø§Ø¡ Ø¨Ø§Ù‚Ø§Øª Ù„ÙƒÙ„ Ø¯ÙˆÙ„Ø©ØŒ ÙˆÙ„Ø§ Ù„Ù…Ø³Ø­ Ø±Ù…ÙˆØ² QR Ø¨Ø´ÙƒÙ„ Ù…ØªÙƒØ±Ø±ØŒ ÙˆÙ„Ø§ Ù„ØªØ¹Ù‚ÙŠØ¯Ø§Øª Ø§Ù„ØªØ¬ÙˆØ§Ù„. Ø­Ø³Ø§Ø¨ ÙˆØ§Ø­Ø¯ ÙŠØ¯ÙŠØ± ØªØ¬Ø±Ø¨Ø© Ø§Ù„Ø§ØªØµØ§Ù„ Ø¨Ø§Ù„ÙƒØ§Ù…Ù„.",
    aiEyebrow: "Ù…Ø´ØºÙ„ Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ",
    aiTitle: "Ù…Ø´ØºÙ„ Ø§Ù„Ø§ØªØµØ§Ù„Ø§Øª ÙŠØµØ¨Ø­ ØªÙØ§Ø¹Ù„ÙŠØ§Ù‹.",
    aiText: "ÙŠØ·Ø±Ø­ Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù…ÙˆÙ† Ø£Ø³Ø¦Ù„Ø© Ø¨Ø³ÙŠØ·Ø©. ÙŠØªØ­Ù‚Ù‚ Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ Ù…Ù† Ø§Ù„Ø³ÙŠØ§Ù‚ØŒ ÙˆÙŠØ´Ø±Ø­ Ø§Ù„ØªØºØ·ÙŠØ©ØŒ ÙˆÙŠØ¬Ù‡Ø² Ø§Ù„Ø³ÙØ±ØŒ ÙˆÙŠØ³Ø§Ø¹Ø¯ ÙÙŠ Ø§Ù„Ø¥Ø¹Ø¯Ø§Ø¯ØŒ ÙˆÙŠÙˆØ¬Ù‡ Ø¥Ù„Ù‰ Ø§Ù„Ø®Ø·ÙˆØ§Øª Ø§Ù„ØªØ§Ù„ÙŠØ©.",
    appEyebrow: "Ø§Ù„ØªØ·Ø¨ÙŠÙ‚",
    appTitle: "ØªØ·Ø¨ÙŠÙ‚ Ù‡Ø§ØªÙ Ù…ØªÙ…ÙŠØ² Ù…Ø¹ Ø£Ù‚Ù„ Ø¹Ø¯Ø¯ Ù…Ù…ÙƒÙ† Ù…Ù† Ø§Ù„Ù‚ÙˆØ§Ø¦Ù….",
    appText: "ØªØ±ÙƒØ² Ø§Ù„ÙˆØ§Ø¬Ù‡Ø© Ø¹Ù„Ù‰ Ù…Ø§ ÙŠÙ‡Ù…: Ø§Ù„Ø§ØªØµØ§Ù„ØŒ ÙˆØ§Ù„Ø¨ÙŠØ§Ù†Ø§Øª Ø§Ù„Ù…ØªØ¨Ù‚ÙŠØ©ØŒ ÙˆØ§Ù„Ø§Ø³ØªØ¹Ø¯Ø§Ø¯ Ù„Ù„ÙˆØ¬Ù‡Ø©ØŒ ÙˆØ§Ù„Ù…Ø³Ø§Ø¹Ø¯Ø© Ø¨Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ.",
    appReadyText: "Ø¬Ø§Ù‡Ø² Ø§Ù„Ø¢Ù†.",
    coverageEyebrow: "Ø§Ù„ØªÙ†Ù‚Ù„ Ø§Ù„Ø¹Ø§Ù„Ù…ÙŠ",
    coverageTitle: "Ù…ØµÙ…Ù… Ù„Ù„Ø£Ø´Ø®Ø§Øµ Ø§Ù„Ø°ÙŠÙ† ÙŠØªÙ†Ù‚Ù„ÙˆÙ† Ø­ÙˆÙ„ Ø§Ù„Ø¹Ø§Ù„Ù….",
    coverageText: "Ù„Ù„Ù…Ø³Ø§ÙØ±ÙŠÙ† ÙˆØ±ÙˆØ§Ø¯ Ø§Ù„Ø£Ø¹Ù…Ø§Ù„ ÙˆØ§Ù„Ø·Ù„Ø§Ø¨ ÙˆØ§Ù„Ø¹Ø§Ù…Ù„ÙŠÙ† Ø¹Ù† Ø¨ÙØ¹Ø¯ ÙˆØ§Ù„ÙØ±Ù‚ Ø§Ù„Ø¯ÙˆÙ„ÙŠØ© Ø§Ù„Ø°ÙŠÙ† ÙŠØ­ØªØ§Ø¬ÙˆÙ† Ø¥Ù„Ù‰ Ø¥Ù†ØªØ±Ù†Øª Ù…ØªÙ†Ù‚Ù„ Ø¯ÙˆÙ† ØªØ¹Ù‚ÙŠØ¯.",
    securityEyebrow: "Ø§Ù„Ø£Ù…Ø§Ù†",
    securityTitle: "Ø§Ù„Ø£Ù…Ø§Ù† ÙˆØ§Ù„Ø«Ù‚Ø© Ù…Ù†Ø° Ù…Ø±Ø­Ù„Ø© Ø§Ù„ØªØµÙ…ÙŠÙ….",
    securityText: "ØªÙ… ØªØµÙ…ÙŠÙ… Ø§Ù„Ù‡ÙˆÙŠØ© ÙˆØ§Ù„Ù…Ø¯ÙÙˆØ¹Ø§Øª ÙˆØ§Ù„ÙˆØµÙˆÙ„ Ø¥Ù„Ù‰ Ø§Ù„Ø­Ø³Ø§Ø¨ ÙˆØ¶ÙˆØ§Ø¨Ø· Ø§Ù„Ø§Ø³ØªØ®Ø¯Ø§Ù… Ù„ØªÙƒÙˆÙ† Ù…Ø­Ù…ÙŠØ© Ù…Ù†Ø° Ø§Ù„Ø¨Ø¯Ø§ÙŠØ©.",
    comparisonEyebrow: "Ø§Ù„Ù…Ù‚Ø§Ø±Ù†Ø©",
    comparisonTitle: "Ø¥Ø²Ø§Ù„Ø© ØªØ¹Ù‚ÙŠØ¯Ø§Øª Ø§Ù„Ø§ØªØµØ§Ù„Ø§Øª Ø§Ù„ØªÙ‚Ù„ÙŠØ¯ÙŠØ©.",
    pricingEyebrow: "Ø§Ù„Ø£Ø³Ø¹Ø§Ø±",
    pricingTitle: "Ø£Ø³Ø¹Ø§Ø± Ø¨Ø³ÙŠØ·Ø© Ø¨Ø¹Ø¯ Ø§Ù„ØªØ­Ù‚Ù‚ Ù…Ù† Ø´Ø±ÙˆØ· Ø§Ù„Ø¨ÙŠØ¹ Ø¨Ø§Ù„Ø¬Ù…Ù„Ø©.",
    pricingNote: "ÙŠÙ„Ø²Ù… Ø§Ù„ØªØ­Ù‚Ù‚ Ù…Ù† Ø´Ø±ÙˆØ· Ø§Ù„Ø¨ÙŠØ¹ Ø¨Ø§Ù„Ø¬Ù…Ù„Ø©",
    faqEyebrow: "Ø§Ù„Ø£Ø³Ø¦Ù„Ø© Ø§Ù„Ø´Ø§Ø¦Ø¹Ø©",
    faqTitle: "Ø£Ø³Ø¦Ù„Ø© Ù‚Ø¨Ù„ Ø§Ù„Ø¥Ø·Ù„Ø§Ù‚.",
    finalTitle: "Ø«Ø¨Ù‘Øª Ù…Ø±Ø© ÙˆØ§Ø­Ø¯Ø©. ÙˆØ§Ù†Ø·Ù„Ù‚ Ø¥Ù„Ù‰ Ø£ÙŠ Ù…ÙƒØ§Ù†.",
    finalText: "Ù…Ø´ØºÙ„ Ø§Ù„Ø§ØªØµØ§Ù„Ø§Øª Ø§Ù„Ù…Ø³ØªÙ‚Ø¨Ù„ÙŠ Ø¨Ø³ÙŠØ· ÙˆØ°ÙƒÙŠ ÙˆØ¹Ø§Ù„Ù…ÙŠ.",
    footerTagline: "Ø§ØªØµØ§Ù„ Ù…ØªÙ†Ù‚Ù„ Ø¹Ø§Ù„Ù…ÙŠ Ù…Ø¯Ø¹ÙˆÙ… Ø¨Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ.",
    cards: [
      ["Ø´Ø±ÙŠØ­Ø© eSIM Ø¯Ø§Ø¦Ù…Ø©", "Ø«Ø¨Ù‘ØªÙ‡Ø§ Ù…Ø±Ø© ÙˆØ§Ø­Ø¯Ø© ÙˆØ§Ø­ØªÙØ¸ Ø¨Ù†ÙØ³ Ù…Ù„Ù Ø§Ù„Ø§ØªØµØ§Ù„ Ø§Ù„Ø±Ù‚Ù…ÙŠ."],
      ["Ù…Ø´ØºÙ„ Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ", "ÙŠØµØ¨Ø­ Ø§Ù„Ø¯Ø¹Ù… ÙˆØ§Ù„Ø¥Ø¹Ø¯Ø§Ø¯ ÙˆØ§Ù„Ø§Ø³ØªØ®Ø¯Ø§Ù… ØªØ¬Ø±Ø¨Ø© ØªÙØ§Ø¹Ù„ÙŠØ©."],
      ["Ø¹Ø§Ù„Ù…ÙŠ Ù…Ù†Ø° Ø§Ù„Ø¨Ø¯Ø§ÙŠØ©", "Ù…ØµÙ…Ù… Ù„Ù„Ø§ØªØµØ§Ù„ Ø§Ù„Ø¯ÙˆÙ„ÙŠ Ù…Ù†Ø° Ø§Ù„ÙŠÙˆÙ… Ø§Ù„Ø£ÙˆÙ„."],
      ["Ø­Ø³Ø§Ø¨ Ø°ÙƒÙŠ", "Ù…ÙƒØ§Ù† ÙˆØ§Ø­Ø¯ Ù„Ø¥Ø¯Ø§Ø±Ø© Ø§Ù„Ø¨Ø§Ù‚Ø© ÙˆØ§Ù„Ø§Ø³ØªØ®Ø¯Ø§Ù… ÙˆØ§Ù„Ø£Ø¬Ù‡Ø²Ø© ÙˆØ§Ù„ÙÙˆØ§ØªÙŠØ± ÙˆØ§Ù„Ø¯Ø¹Ù…."],
      ["ØªÙØ¹ÙŠÙ„ Ø³Ø±ÙŠØ¹", "Ù…ØµÙ…Ù… Ù„Ù„ØªØ³Ø¬ÙŠÙ„ Ø§Ù„ÙÙˆØ±ÙŠ ÙˆØ§Ù„ØªØ³Ù„ÙŠÙ… Ø§Ù„Ø±Ù‚Ù…ÙŠ."],
      ["Ø·Ø¨Ù‚Ø© Ø¢Ù…Ù†Ø©", "Ø­Ù…Ø§ÙŠØ© Ø§Ù„Ù‡ÙˆÙŠØ© ÙˆØ§Ù„Ù…Ø¯ÙÙˆØ¹Ø§Øª ÙˆØ§Ù„Ø­Ø³Ø§Ø¨ Ù…Ø¯Ù…Ø¬Ø© ÙÙŠ Ø§Ù„Ù†Ø¸Ø§Ù…."]
    ],
    aiMessages: [
      ["Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù…", "Ø³Ø£Ø³Ø§ÙØ± Ø¥Ù„Ù‰ Ø§Ù„ÙŠØ§Ø¨Ø§Ù† ØºØ¯Ø§Ù‹. Ù‡Ù„ Ù„Ø¯ÙŠ ØªØºØ·ÙŠØ©ØŸ"],
      ["Invisible AI", "Ù†Ø¹Ù…. Ø´Ø±ÙŠØ­Ø© eSIM Ø§Ù„Ø®Ø§ØµØ© Ø¨Ùƒ Ø¬Ø§Ù‡Ø²Ø© Ù„Ù„Ø´Ø¨ÙƒØ§Øª Ø§Ù„Ù…Ø¯Ø¹ÙˆÙ…Ø©. Ù„Ø§ ØªØ­ØªØ§Ø¬ Ø¥Ù„Ù‰ Ø±Ù…Ø² QR Ø¬Ø¯ÙŠØ¯."],
      ["Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù…", "Ù„Ù…Ø§Ø°Ø§ Ø§ØªØµØ§Ù„ÙŠ Ø¨Ø·ÙŠØ¡ØŸ"],
      ["Invisible AI", "ØªØ­Ù‚Ù‚Øª Ù…Ù† Ø§Ø³ØªØ®Ø¯Ø§Ù…Ùƒ ÙˆØ­Ø§Ù„Ø© Ø§Ù„Ø´Ø¨ÙƒØ©. ÙŠÙ…ÙƒÙ†Ù†ÙŠ Ø¥Ø±Ø´Ø§Ø¯Ùƒ Ø¥Ù„Ù‰ Ø£Ø³Ø±Ø¹ Ø­Ù„."]
    ],
    appCards: [
      ["Ù…ØªØµÙ„", "Ø´Ø±ÙŠØ­Ø© eSIM Ø§Ù„Ø¹Ø§Ù„Ù…ÙŠØ© Ù†Ø´Ø·Ø©"],
      ["Ø§Ù„Ø¨ÙŠØ§Ù†Ø§Øª", "42.8 Ø¬ÙŠØ¬Ø§Ø¨Ø§ÙŠØª Ù…ØªØ§Ø­Ø©"],
      ["Ø§Ù„Ø³ÙØ±", "Ø§Ù„ÙˆØ¬Ù‡Ø© Ø§Ù„ØªØ§Ù„ÙŠØ© Ø¬Ø§Ù‡Ø²Ø©"]
    ],
    people: [
      ["Ø±ÙˆØ§Ø¯ Ø§Ù„Ø£Ø¹Ù…Ø§Ù„ Ø§Ù„Ø¯ÙˆÙ„ÙŠÙˆÙ†", "Ø§Ø¨Ù‚ Ø¹Ù„Ù‰ Ø§ØªØµØ§Ù„ Ø¨ÙŠÙ† Ø§Ù„Ø§Ø¬ØªÙ…Ø§Ø¹Ø§Øª ÙˆØ§Ù„Ù…Ø·Ø§Ø±Ø§Øª ÙˆØ§Ù„Ø¯ÙˆÙ„."],
      ["Ø§Ù„Ø¹Ø§Ù…Ù„ÙˆÙ† Ø¹Ù† Ø¨ÙØ¹Ø¯", "Ø­Ø³Ø§Ø¨ ÙˆØ§Ø­Ø¯ Ù„Ù„Ø¹Ù…Ù„ ÙˆØ§Ù„Ø³ÙØ± ÙˆØ§Ù„Ø¥Ù†ØªØ±Ù†Øª Ø§Ù„Ù…ØªÙ†Ù‚Ù„ Ø§Ù„ÙŠÙˆÙ…ÙŠ."],
      ["Ø§Ù„Ø¹Ø§Ø¦Ù„Ø§Øª Ø§Ù„Ø¹Ø§Ù„Ù…ÙŠØ©", "Ø§ØªØµØ§Ù„ Ø¨Ø³ÙŠØ· Ù„Ù„Ø£Ø´Ø®Ø§Øµ Ø§Ù„Ø°ÙŠÙ† ÙŠØ¹ÙŠØ´ÙˆÙ† Ø¨ÙŠÙ† Ø¯ÙˆÙ„ Ù…Ø®ØªÙ„ÙØ©."]
    ],
    securityItems: ["Ø§Ù„ØªØ­Ù‚Ù‚ Ù…Ù† Ø§Ù„Ù‡ÙˆÙŠØ©", "Ø¯ÙØ¹ Ø¢Ù…Ù†", "Ø­Ø³Ø§Ø¨ Ù…Ø­Ù…ÙŠ", "Ø¶ÙˆØ§Ø¨Ø· Ø§Ù„Ø®ØµÙˆØµÙŠØ©"],
    comparison: {
      oldTitle: "Ù…Ø´ØºÙ„ ØªÙ‚Ù„ÙŠØ¯ÙŠ",
      newTitle: "Invisible Mobile",
      old: ["ØªØ¹Ù‚ÙŠØ¯Ø§Øª Ø§Ù„Ø´Ø±ÙŠØ­Ø© Ø§Ù„ØªÙ‚Ù„ÙŠØ¯ÙŠØ©", "Ù‚ÙˆØ§Ø¹Ø¯ Ø§Ù„ØªØ¬ÙˆØ§Ù„", "Ø§Ù†ØªØ¸Ø§Ø± Ø§Ù„Ø¯Ø¹Ù…", "Ø¨Ø§Ù‚Ø§Øª Ù…Ø¹Ù‚Ø¯Ø©"],
      next: ["Ø´Ø±ÙŠØ­Ø© eSIM ÙˆØ§Ø­Ø¯Ø©", "Ù…Ø³Ø§Ø¹Ø¯Ø© Ø¨Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ", "Ø¥Ø¬Ø±Ø§Ø¡Ø§Øª Ø¨Ø³ÙŠØ·Ø©", "Ø­Ø³Ø§Ø¨ Ø¹Ø§Ù„Ù…ÙŠ"]
    },
    plans: [
      ["One", "Ø§ØªØµØ§Ù„ Ù…ØªÙ†Ù‚Ù„ Ø£Ø³Ø§Ø³ÙŠ Ù„Ù„Ø§Ø³ØªØ®Ø¯Ø§Ù… Ø§Ù„Ø¹Ø§Ù„Ù…ÙŠ Ø§Ù„Ø®ÙÙŠÙ."],
      ["Global", "Ù…ØµÙ…Ù… Ù„Ù„Ù…Ø³ØªØ®Ø¯Ù…ÙŠÙ† Ø§Ù„Ø¯ÙˆÙ„ÙŠÙŠÙ† ÙˆØ§Ù„Ù…Ø³Ø§ÙØ±ÙŠÙ† Ø¨Ø´ÙƒÙ„ Ù…Ù†ØªØ¸Ù…."],
      ["Ultra", "Ù„Ù„Ø§Ø³ØªØ®Ø¯Ø§Ù… Ø§Ù„Ù…ÙƒØ«Ù ÙˆØ§Ù„Ø¹Ù…Ù„ Ø¹Ù† Ø¨ÙØ¹Ø¯ ÙˆØ§Ù„ØªÙ†Ù‚Ù„ Ø§Ù„Ù…ØªÙƒØ±Ø±."]
    ],
    faq: [
      ["Ù‡Ù„ Invisible Mobile Ù…Ø´ØºÙ„ Ø§ØªØµØ§Ù„Ø§Øª ØªÙ‚Ù„ÙŠØ¯ÙŠØŸ", "ØªÙ… ØªØµÙ…ÙŠÙ…Ù‡ ÙƒÙ…Ù†ØµØ© Ø§ØªØµØ§Ù„ Ù…ØªÙ†Ù‚Ù„ ØªØ¹ØªÙ…Ø¯ Ø¹Ù„Ù‰ Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ ÙˆØªØ¹Ù…Ù„ Ù…Ù† Ø®Ù„Ø§Ù„ Ø´Ø±ÙƒØ§Ø¡ Ø§Ù„Ø¨Ù†ÙŠØ© Ø§Ù„ØªØ­ØªÙŠØ© Ù„Ø´Ø¨ÙƒØ§Øª eSIM."],
      ["Ù‡Ù„ Ø³ÙŠØ­ØªØ§Ø¬ Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù…ÙˆÙ† Ø¥Ù„Ù‰ Ø´Ø±ÙŠØ­Ø© SIM ÙØ¹Ù„ÙŠØ©ØŸ", "Ù„Ø§. ØªØ¹ØªÙ…Ø¯ Ø±Ø¤ÙŠØ© Ø§Ù„Ù…Ù†ØªØ¬ Ø¹Ù„Ù‰ Ø§Ù„ØªÙØ¹ÙŠÙ„ Ø§Ù„Ø±Ù‚Ù…ÙŠ Ù„Ø´Ø±ÙŠØ­Ø© eSIM Ø¹Ù„Ù‰ Ø§Ù„Ø£Ø¬Ù‡Ø²Ø© Ø§Ù„Ù…ØªÙˆØ§ÙÙ‚Ø©."],
      ["Ù‡Ù„ Ø³ØªØ¹Ù…Ù„ Ø´Ø±ÙŠØ­Ø© eSIM ÙˆØ§Ø­Ø¯Ø© ÙÙŠ ÙƒÙ„ Ù…ÙƒØ§Ù†ØŸ", "Ø§Ù„Ù‡Ø¯Ù Ù‡Ùˆ ØªÙˆÙÙŠØ± Ø´Ø±ÙŠØ­Ø© eSIM Ø¯Ø§Ø¦Ù…Ø© ÙÙŠ Ø§Ù„ÙˆØ¬Ù‡Ø§Øª Ø§Ù„Ù…Ø¯Ø¹ÙˆÙ…Ø©ØŒ ÙˆÙÙ‚Ø§Ù‹ Ù„Ù‚Ø¯Ø±Ø§Øª Ø§Ù„Ø´Ø±ÙƒØ§Ø¡."],
      ["Ù‡Ù„ Ø§Ù„Ø£Ø³Ø¹Ø§Ø± Ù†Ù‡Ø§Ø¦ÙŠØ©ØŸ", "Ù„Ø§. Ø³ÙŠØªÙ… ØªØ£ÙƒÙŠØ¯ Ø§Ù„Ø£Ø³Ø¹Ø§Ø± Ø§Ù„Ù†Ù‡Ø§Ø¦ÙŠØ© Ø¨Ø¹Ø¯ Ø§Ù„ØªØ­Ù‚Ù‚ Ù…Ù† ØªÙƒØ§Ù„ÙŠÙ Ø¨ÙŠØ§Ù†Ø§Øª Ø§Ù„Ø¨ÙŠØ¹ Ø¨Ø§Ù„Ø¬Ù…Ù„Ø© ÙˆØ´Ø±ÙˆØ· Ø§Ù„Ø´Ø±ÙƒØ§Ø¡."]
    ],
    footer: {
      description: "Ù…Ù†ØµØ© Ø¹Ø§Ù„Ù…ÙŠØ© Ù„Ù„Ø§ØªØµØ§Ù„ Ø§Ù„Ù…ØªÙ†Ù‚Ù„ Ù…Ø¯Ø¹ÙˆÙ…Ø© Ø¨Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ.",
      columns: [
        ["Ø§Ù„Ù…Ù†ØªØ¬", "Ø§Ù„Ù…Ù†ØµØ©", "Ù…Ø´ØºÙ„ Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ", "Ø§Ù„ØªØ·Ø¨ÙŠÙ‚", "Ø§Ù„ØªØºØ·ÙŠØ©"],
        ["Ø§Ù„Ø´Ø±ÙƒØ©", "Ù…Ù† Ù†Ø­Ù†", "Ø§Ù„Ø´Ø±ÙƒØ§Ø¡", "Ø§Ù„ØµØ­Ø§ÙØ©", "Ø§ØªØµÙ„ Ø¨Ù†Ø§"],
        ["Ù‚Ø§Ù†ÙˆÙ†ÙŠ", "Ø§Ù„Ø®ØµÙˆØµÙŠØ©", "Ø§Ù„Ø´Ø±ÙˆØ·", "Ø§Ù„Ø£Ù…Ø§Ù†", "Ù…Ù„ÙØ§Øª ØªØ¹Ø±ÙŠÙ Ø§Ù„Ø§Ø±ØªØ¨Ø§Ø·"]
      ]
    }
  },  it: {
    ...en,
    nav: ["Piattaforma", "IA", "App", "Copertura", "Sicurezza", "Prezzi", "FAQ"],
    heroKicker: "Operatore mobile globale basato sullÃ¢â‚¬â„¢IA",
    heroTitle: "Una eSIM. Una IA. Connesso ovunque.",
    heroSubtitle: "Invisible Mobile ÃƒÂ¨ una piattaforma mobile di nuova generazione in cui gli utenti installano una eSIM una sola volta e lasciano che lÃ¢â‚¬â„¢IA gestisca connettivitÃƒÂ , viaggi, utilizzo, assistenza e operazioni dellÃ¢â‚¬â„¢account.",
    primaryCta: "Richiedi accesso anticipato",
    secondaryCta: "Guarda lÃ¢â‚¬â„¢esperienza",
    heroStats: ["184 paesi disponibili", "Attivazione in 60 secondi", "Assistenza IA 24/7"],
    phoneDataLabel: "DATI GLOBALI",
    phoneNetworkText: "Connesso alle reti supportate",
    phoneAiLabel: "IA INVISIBILE",
    phoneAiText: "La tua connettivitÃƒÂ  ÃƒÂ¨ pronta. Nulla da configurare.",
    chipNetworkLabel: "Rete",
    chipNetworkValue: "5G pronto",
    chipAiLabel: "Azione IA",
    chipAiValue: "Configurazione automatica",
    marquee: "UNA ESIM Ã‚Â· UN ACCOUNT Ã‚Â· OPERATORE IA Ã‚Â· CONNETTIVITÃƒâ‚¬ GLOBALE Ã‚Â· ATTIVAZIONE ISTANTANEA Ã‚Â· ZERO COMPLESSITÃƒâ‚¬ Ã‚Â·",
    platformEyebrow: "Piattaforma",
    platformTitle: "Un operatore mobile progettato per diventare invisibile.",
    platformText: "Nessun acquisto paese per paese, nessun codice QR ripetuto e nessuna confusione sul roaming. Un unico account controlla lÃ¢â‚¬â„¢intera esperienza di connettivitÃƒÂ .",
    aiEyebrow: "Operatore IA",
    aiTitle: "LÃ¢â‚¬â„¢operatore diventa conversazionale.",
    aiText: "Gli utenti fanno domande semplici. LÃ¢â‚¬â„¢IA controlla il contesto, spiega la copertura, prepara i viaggi, aiuta con la configurazione e guida le azioni successive.",
    appEyebrow: "Applicazione",
    appTitle: "UnÃ¢â‚¬â„¢app mobile premium con pochissimi menu.",
    appText: "LÃ¢â‚¬â„¢interfaccia si concentra su ciÃƒÂ² che conta: connessione, dati rimanenti, preparazione della destinazione e assistenza IA.",
    appReadyText: "Pronto ora.",
    coverageEyebrow: "MobilitÃƒÂ  globale",
    coverageTitle: "Creato per le persone che si muovono nel mondo.",
    coverageText: "Per viaggiatori, fondatori, studenti, lavoratori da remoto e team internazionali che hanno bisogno di internet mobile senza complicazioni.",
    securityEyebrow: "Sicurezza",
    securityTitle: "Sicurezza e fiducia fin dalla progettazione.",
    securityText: "IdentitÃƒÂ , pagamenti, accesso allÃ¢â‚¬â„¢account e controlli di utilizzo sono progettati per essere protetti fin dallÃ¢â‚¬â„¢inizio.",
    comparisonEyebrow: "Confronto",
    comparisonTitle: "La complessitÃƒÂ  delle telecomunicazioni tradizionali, eliminata.",
    pricingEyebrow: "Prezzi",
    pricingTitle: "Prezzi semplici dopo la validazione wholesale.",
    pricingNote: "Validazione wholesale richiesta",
    faqEyebrow: "FAQ",
    faqTitle: "Domande prima del lancio.",
    finalTitle: "Installa una volta. Vai ovunque.",
    finalText: "LÃ¢â‚¬â„¢operatore mobile del futuro ÃƒÂ¨ semplice, intelligente e globale.",
    footerTagline: "ConnettivitÃƒÂ  mobile globale basata sullÃ¢â‚¬â„¢IA.",
    cards: [
      ["eSIM persistente", "Installa una volta e mantieni lo stesso profilo mobile digitale."],
      ["Operatore IA", "Assistenza, configurazione e utilizzo diventano conversazionali."],
      ["Globale fin dallÃ¢â‚¬â„¢inizio", "Progettato per la connettivitÃƒÂ  internazionale fin dal primo giorno."],
      ["Account intelligente", "Un unico spazio per piano, utilizzo, dispositivi, fatturazione e assistenza."],
      ["Attivazione rapida", "Progettato per un onboarding istantaneo e una distribuzione digitale."],
      ["Livello sicuro", "IdentitÃƒÂ , pagamenti e sicurezza dellÃ¢â‚¬â„¢account integrati."]
    ],
    aiMessages: [
      ["Utente", "Domani volo in Giappone. Ho copertura?"],
      ["Invisible AI", "SÃƒÂ¬. La tua eSIM ÃƒÂ¨ pronta per le reti supportate. Non ÃƒÂ¨ necessario un nuovo codice QR."],
      ["Utente", "PerchÃƒÂ© la mia connessione ÃƒÂ¨ lenta?"],
      ["Invisible AI", "Ho controllato il tuo utilizzo e lo stato della rete. Posso guidarti verso la soluzione piÃƒÂ¹ rapida."]
    ],
    appCards: [
      ["Connesso", "eSIM globale attiva"],
      ["Dati", "42,8 GB disponibili"],
      ["Viaggio", "Prossima destinazione pronta"]
    ],
    people: [
      ["Fondatori internazionali", "Rimani connesso tra riunioni, aeroporti e paesi."],
      ["Lavoratori da remoto", "Un unico account per lavoro, viaggi e internet mobile quotidiano."],
      ["Famiglie globali", "ConnettivitÃƒÂ  semplice per le persone che vivono tra paesi diversi."]
    ],
    securityItems: ["Verifica dellÃ¢â‚¬â„¢identitÃƒÂ ", "Pagamento sicuro", "Account protetto", "Controlli della privacy"],
    comparison: {
      oldTitle: "Operatore tradizionale",
      newTitle: "Invisible Mobile",
      old: ["Limiti della SIM fisica", "Regole di roaming", "Code dellÃ¢â‚¬â„¢assistenza", "Piani complessi"],
      next: ["Una eSIM", "Assistenza IA", "Azioni semplici", "Account globale"]
    },
    plans: [
      ["One", "ConnettivitÃƒÂ  mobile essenziale per un utilizzo globale leggero."],
      ["Global", "Progettato per utenti internazionali e viaggiatori frequenti."],
      ["Ultra", "Per un utilizzo piÃƒÂ¹ intenso, lavoro da remoto e mobilitÃƒÂ  frequente."]
    ],
    faq: [
      ["Invisible Mobile ÃƒÂ¨ un operatore di telecomunicazioni tradizionale?", "ÃƒË† progettato come una piattaforma di connettivitÃƒÂ  mobile basata sullÃ¢â‚¬â„¢IA e supportata da partner di infrastruttura eSIM."],
      ["Gli utenti avranno bisogno di una SIM fisica?", "No. La visione del prodotto si basa sullÃ¢â‚¬â„¢attivazione digitale della eSIM per dispositivi compatibili."],
      ["Una sola eSIM funzionerÃƒÂ  ovunque?", "LÃ¢â‚¬â„¢obiettivo ÃƒÂ¨ offrire una eSIM persistente nelle destinazioni supportate, in base alle capacitÃƒÂ  dei partner."],
      ["I prezzi sono definitivi?", "No. I prezzi finali saranno confermati dopo la validazione dei costi wholesale dei dati e delle condizioni dei partner."]
    ],
    footer: {
      description: "Piattaforma globale di connettivitÃƒÂ  mobile basata sullÃ¢â‚¬â„¢IA.",
      columns: [
        ["Prodotto", "Piattaforma", "Operatore IA", "App", "Copertura"],
        ["Azienda", "Chi siamo", "Partner", "Stampa", "Contatti"],
        ["Legale", "Privacy", "Termini", "Sicurezza", "Cookie"]
      ]
    }
  },  pt: {
    ...en,
    nav: ["Plataforma", "IA", "App", "Cobertura", "SeguranÃƒÆ’Ã‚Â§a", "PreÃƒÆ’Ã‚Â§os", "FAQ"],
    heroKicker: "Operador mÃƒÆ’Ã‚Â³vel global impulsionado por IA",
    heroTitle: "Um eSIM. Uma IA. Conectado em todos os lugares.",
    heroSubtitle: "Invisible Mobile ÃƒÆ’Ã‚Â© uma plataforma mÃƒÆ’Ã‚Â³vel de nova geraÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â£o onde os utilizadores instalam um eSIM uma ÃƒÆ’Ã‚Âºnica vez e deixam a IA gerir a conectividade, as viagens, a utilizaÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â£o, o suporte e as aÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Âµes da conta.",
    primaryCta: "Solicitar acesso antecipado",
    secondaryCta: "Ver a experiÃƒÆ’Ã‚Âªncia",
    heroStats: ["184 paÃƒÆ’Ã‚Â­ses disponÃƒÆ’Ã‚Â­veis", "AtivaÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â£o em 60 segundos", "Suporte IA 24/7"],
    phoneDataLabel: "DADOS GLOBAIS",
    phoneNetworkText: "Conectado a redes compatÃƒÆ’Ã‚Â­veis",
    phoneAiLabel: "IA INVISÃƒÆ’Ã‚ÂVEL",
    phoneAiText: "A sua conectividade estÃƒÆ’Ã‚Â¡ pronta. Nada para configurar.",
    chipNetworkLabel: "Rede",
    chipNetworkValue: "5G pronto",
    chipAiLabel: "AÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â£o IA",
    chipAiValue: "ConfiguraÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â£o automÃƒÆ’Ã‚Â¡tica",
    marquee: "UM ESIM Ãƒâ€šÃ‚Â· UMA CONTA Ãƒâ€šÃ‚Â· OPERADOR IA Ãƒâ€šÃ‚Â· CONECTIVIDADE GLOBAL Ãƒâ€šÃ‚Â· ATIVAÃƒÆ’Ã¢â‚¬Â¡ÃƒÆ’Ã†â€™O INSTANTÃƒÆ’Ã¢â‚¬Å¡NEA Ãƒâ€šÃ‚Â· ZERO COMPLEXIDADE Ãƒâ€šÃ‚Â·",
    platformEyebrow: "Plataforma",
    platformTitle: "Um operador mÃƒÆ’Ã‚Â³vel concebido para parecer invisÃƒÆ’Ã‚Â­vel.",
    platformText: "Sem compras paÃƒÆ’Ã‚Â­s por paÃƒÆ’Ã‚Â­s, sem cÃƒÆ’Ã‚Â³digos QR repetidos e sem confusÃƒÆ’Ã‚Â£o com roaming. Uma ÃƒÆ’Ã‚Âºnica conta controla toda a experiÃƒÆ’Ã‚Âªncia de conectividade.",
    aiEyebrow: "Operador IA",
    aiTitle: "O operador torna-se conversacional.",
    aiText: "Os utilizadores fazem perguntas simples. A IA verifica o contexto, explica a cobertura, prepara viagens, ajuda na configuraÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â£o e orienta as prÃƒÆ’Ã‚Â³ximas aÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Âµes.",
    appEyebrow: "AplicaÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â£o",
    appTitle: "Uma aplicaÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â£o mÃƒÆ’Ã‚Â³vel premium com quase nenhum menu.",
    appText: "A interface concentra-se no essencial: ligaÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â£o, dados restantes, preparaÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â£o do destino e assistÃƒÆ’Ã‚Âªncia de IA.",
    appReadyText: "Pronto agora.",
    coverageEyebrow: "Mobilidade global",
    coverageTitle: "Criado para pessoas que se deslocam pelo mundo.",
    coverageText: "Para viajantes, fundadores, estudantes, trabalhadores remotos e equipas internacionais que precisam de internet mÃƒÆ’Ã‚Â³vel sem complicaÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Âµes.",
    securityEyebrow: "SeguranÃƒÆ’Ã‚Â§a",
    securityTitle: "SeguranÃƒÆ’Ã‚Â§a e confianÃƒÆ’Ã‚Â§a desde a conceÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â£o.",
    securityText: "A identidade, os pagamentos, o acesso ÃƒÆ’Ã‚Â  conta e os controlos de utilizaÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â£o sÃƒÆ’Ã‚Â£o concebidos para estarem protegidos desde o inÃƒÆ’Ã‚Â­cio.",
    comparisonEyebrow: "ComparaÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â£o",
    comparisonTitle: "A complexidade tradicional das telecomunicaÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Âµes, eliminada.",
    pricingEyebrow: "PreÃƒÆ’Ã‚Â§os",
    pricingTitle: "PreÃƒÆ’Ã‚Â§os simples apÃƒÆ’Ã‚Â³s a validaÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â£o grossista.",
    pricingNote: "ValidaÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â£o grossista necessÃƒÆ’Ã‚Â¡ria",
    faqEyebrow: "FAQ",
    faqTitle: "Perguntas antes do lanÃƒÆ’Ã‚Â§amento.",
    finalTitle: "Instale uma vez. VÃƒÆ’Ã‚Â¡ para qualquer lugar.",
    finalText: "O operador mÃƒÆ’Ã‚Â³vel do futuro ÃƒÆ’Ã‚Â© simples, inteligente e global.",
    footerTagline: "Conectividade mÃƒÆ’Ã‚Â³vel global impulsionada por IA.",
    cards: [
      ["eSIM persistente", "Instale uma vez e mantenha o mesmo perfil mÃƒÆ’Ã‚Â³vel digital."],
      ["Operador IA", "O suporte, a configuraÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â£o e a utilizaÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â£o tornam-se conversacionais."],
      ["Global desde o inÃƒÆ’Ã‚Â­cio", "Concebido para conectividade internacional desde o primeiro dia."],
      ["Conta inteligente", "Um ÃƒÆ’Ã‚Âºnico espaÃƒÆ’Ã‚Â§o para plano, utilizaÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â£o, dispositivos, faturaÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â£o e suporte."],
      ["AtivaÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â£o rÃƒÆ’Ã‚Â¡pida", "Concebido para integraÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â£o instantÃƒÆ’Ã‚Â¢nea e entrega digital."],
      ["Camada segura", "Identidade, pagamentos e seguranÃƒÆ’Ã‚Â§a da conta integrados."]
    ],
    aiMessages: [
      ["Utilizador", "Vou viajar para o JapÃƒÆ’Ã‚Â£o amanhÃƒÆ’Ã‚Â£. Tenho cobertura?"],
      ["Invisible AI", "Sim. O seu eSIM estÃƒÆ’Ã‚Â¡ pronto para redes compatÃƒÆ’Ã‚Â­veis. NÃƒÆ’Ã‚Â£o ÃƒÆ’Ã‚Â© necessÃƒÆ’Ã‚Â¡rio um novo cÃƒÆ’Ã‚Â³digo QR."],
      ["Utilizador", "Porque ÃƒÆ’Ã‚Â© que a minha ligaÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â£o estÃƒÆ’Ã‚Â¡ lenta?"],
      ["Invisible AI", "Verifiquei a sua utilizaÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â£o e o estado da rede. Posso orientÃƒÆ’Ã‚Â¡-lo para a soluÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â£o mais rÃƒÆ’Ã‚Â¡pida."]
    ],
    appCards: [
      ["Conectado", "eSIM global ativo"],
      ["Dados", "42,8 GB disponÃƒÆ’Ã‚Â­veis"],
      ["Viagem", "PrÃƒÆ’Ã‚Â³ximo destino pronto"]
    ],
    people: [
      ["Fundadores internacionais", "Mantenha-se conectado entre reuniÃƒÆ’Ã‚Âµes, aeroportos e paÃƒÆ’Ã‚Â­ses."],
      ["Trabalhadores remotos", "Uma ÃƒÆ’Ã‚Âºnica conta para trabalho, viagens e internet mÃƒÆ’Ã‚Â³vel diÃƒÆ’Ã‚Â¡ria."],
      ["FamÃƒÆ’Ã‚Â­lias globais", "Conectividade simples para pessoas que vivem entre diferentes paÃƒÆ’Ã‚Â­ses."]
    ],
    securityItems: ["VerificaÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â£o de identidade", "Pagamento seguro", "Conta protegida", "Controlos de privacidade"],
    comparison: {
      oldTitle: "Operador tradicional",
      newTitle: "Invisible Mobile",
      old: ["LimitaÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Âµes do SIM fÃƒÆ’Ã‚Â­sico", "Regras de roaming", "Filas de suporte", "Planos complexos"],
      next: ["Um eSIM", "AssistÃƒÆ’Ã‚Âªncia IA", "AÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Âµes simples", "Conta global"]
    },
    plans: [
      ["One", "Conectividade mÃƒÆ’Ã‚Â³vel essencial para utilizaÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â£o global moderada."],
      ["Global", "Concebido para utilizadores internacionais e viajantes frequentes."],
      ["Ultra", "Para utilizaÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â£o intensiva, trabalho remoto e mobilidade frequente."]
    ],
    faq: [
      ["O Invisible Mobile ÃƒÆ’Ã‚Â© um operador de telecomunicaÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Âµes tradicional?", "Foi concebido como uma plataforma de conectividade mÃƒÆ’Ã‚Â³vel centrada em IA e suportada por parceiros de infraestrutura eSIM."],
      ["Os utilizadores precisarÃƒÆ’Ã‚Â£o de um SIM fÃƒÆ’Ã‚Â­sico?", "NÃƒÆ’Ã‚Â£o. A visÃƒÆ’Ã‚Â£o do produto baseia-se na ativaÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â£o digital de eSIM para dispositivos compatÃƒÆ’Ã‚Â­veis."],
      ["Um ÃƒÆ’Ã‚Âºnico eSIM funcionarÃƒÆ’Ã‚Â¡ em todos os lugares?", "O objetivo ÃƒÆ’Ã‚Â© oferecer um eSIM persistente nos destinos compatÃƒÆ’Ã‚Â­veis, dependendo das capacidades dos parceiros."],
      ["Os preÃƒÆ’Ã‚Â§os sÃƒÆ’Ã‚Â£o definitivos?", "NÃƒÆ’Ã‚Â£o. Os preÃƒÆ’Ã‚Â§os finais serÃƒÆ’Ã‚Â£o confirmados apÃƒÆ’Ã‚Â³s a validaÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â£o dos custos grossistas de dados e das condiÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Âµes dos parceiros."]
    ],
    footer: {
      description: "Plataforma global de conectividade mÃƒÆ’Ã‚Â³vel impulsionada por IA.",
      columns: [
        ["Produto", "Plataforma", "Operador IA", "App", "Cobertura"],
        ["Empresa", "Sobre nÃƒÆ’Ã‚Â³s", "Parceiros", "Imprensa", "Contacto"],
        ["Legal", "Privacidade", "Termos", "SeguranÃƒÆ’Ã‚Â§a", "Cookies"]
      ]
    }
  },  es: {
    ...en,
    nav: ["Plataforma", "IA", "App", "Cobertura", "Seguridad", "Precios", "FAQ"],
    heroKicker: "Operador mÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³vil global impulsado por IA",
    heroTitle: "Una eSIM. Una IA. Conectado en todas partes.",
    heroSubtitle: "Invisible Mobile es una plataforma mÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³vil de nueva generaciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n donde los usuarios instalan una eSIM una sola vez y dejan que la IA gestione la conectividad, los viajes, el uso, el soporte y las acciones de la cuenta.",
    primaryCta: "Solicitar acceso anticipado",
    secondaryCta: "Ver la experiencia",
    heroStats: ["184 paÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­ses disponibles", "ActivaciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n en 60 segundos", "Soporte IA 24/7"],
    phoneDataLabel: "DATOS GLOBALES",
    phoneNetworkText: "Conectado a redes compatibles",
    phoneAiLabel: "IA INVISIBLE",
    phoneAiText: "Tu conectividad estÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¡ lista. Nada que configurar.",
    chipNetworkLabel: "Red",
    chipNetworkValue: "5G listo",
    chipAiLabel: "AcciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n IA",
    chipAiValue: "ConfiguraciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n automÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¡tica",
    marquee: "UNA ESIM ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â· UNA CUENTA ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â· OPERADOR IA ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â· CONECTIVIDAD GLOBAL ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â· ACTIVACIÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œN INSTANTÃƒÆ’Ã†â€™Ãƒâ€šÃ‚ÂNEA ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â· CERO COMPLEJIDAD ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â·",
    platformEyebrow: "Plataforma",
    platformTitle: "Un operador mÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³vil diseÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â±ado para sentirse invisible.",
    platformText: "Sin comprar paÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­s por paÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­s, sin repetir cÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³digos QR y sin confusiÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n con el roaming. Una sola cuenta controla toda la experiencia de conectividad.",
    aiEyebrow: "Operador IA",
    aiTitle: "El operador se vuelve conversacional.",
    aiText: "Los usuarios hacen preguntas sencillas. La IA comprueba el contexto, explica la cobertura, prepara los viajes, ayuda con la configuraciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n y guÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­a las siguientes acciones.",
    appEyebrow: "AplicaciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n",
    appTitle: "Una aplicaciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n mÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³vil premium con casi ningÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Âºn menÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Âº.",
    appText: "La interfaz se centra en lo esencial: conexiÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n, datos restantes, preparaciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n del destino y asistencia de IA.",
    appReadyText: "Listo ahora.",
    coverageEyebrow: "Movilidad global",
    coverageTitle: "Creado para personas que se mueven por el mundo.",
    coverageText: "Para viajeros, fundadores, estudiantes, trabajadores remotos y equipos internacionales que necesitan internet mÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³vil sin complicaciones.",
    securityEyebrow: "Seguridad",
    securityTitle: "Seguridad y confianza desde el diseÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â±o.",
    securityText: "La identidad, los pagos, el acceso a la cuenta y los controles de uso estÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¡n diseÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â±ados para estar protegidos desde el principio.",
    comparisonEyebrow: "ComparaciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n",
    comparisonTitle: "La complejidad tradicional de las telecomunicaciones, eliminada.",
    pricingEyebrow: "Precios",
    pricingTitle: "Precios sencillos despuÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â©s de la validaciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n mayorista.",
    pricingNote: "ValidaciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n mayorista requerida",
    faqEyebrow: "FAQ",
    faqTitle: "Preguntas antes del lanzamiento.",
    finalTitle: "Instala una vez. Ve a cualquier lugar.",
    finalText: "El operador mÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³vil del futuro es simple, inteligente y global.",
    footerTagline: "Conectividad mÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³vil global impulsada por IA.",
    cards: [
      ["eSIM persistente", "InstÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¡lala una vez y conserva el mismo perfil mÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³vil digital."],
      ["Operador IA", "El soporte, la configuraciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n y el uso se vuelven conversacionales."],
      ["Global desde el inicio", "DiseÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â±ado para la conectividad internacional desde el primer dÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­a."],
      ["Cuenta inteligente", "Un solo lugar para el plan, el uso, los dispositivos, la facturaciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n y el soporte."],
      ["ActivaciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n rÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¡pida", "DiseÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â±ado para una incorporaciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n instantÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¡nea y una entrega digital."],
      ["Capa segura", "Identidad, pagos y seguridad de la cuenta integrados."]
    ],
    aiMessages: [
      ["Usuario", "Vuelo a JapÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n maÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â±ana. ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¿Tengo cobertura?"],
      ["Invisible AI", "SÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­. Tu eSIM estÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¡ lista para las redes compatibles. No necesitas un nuevo cÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³digo QR."],
      ["Usuario", "ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¿Por quÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â© mi conexiÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n es lenta?"],
      ["Invisible AI", "He comprobado tu uso y el estado de la red. Puedo guiarte hacia la soluciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n mÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¡s rÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¡pida."]
    ],
    appCards: [
      ["Conectado", "eSIM global activa"],
      ["Datos", "42,8 GB disponibles"],
      ["Viaje", "PrÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³ximo destino listo"]
    ],
    people: [
      ["Fundadores internacionales", "Mantente conectado entre reuniones, aeropuertos y paÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­ses."],
      ["Trabajadores remotos", "Una sola cuenta para el trabajo, los viajes y el internet mÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³vil diario."],
      ["Familias globales", "Conectividad sencilla para personas que viven entre diferentes paÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­ses."]
    ],
    securityItems: ["VerificaciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n de identidad", "Pago seguro", "Cuenta protegida", "Controles de privacidad"],
    comparison: {
      oldTitle: "Operador tradicional",
      newTitle: "Invisible Mobile",
      old: ["FricciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n de la SIM fÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­sica", "Reglas de roaming", "Colas de soporte", "Planes complejos"],
      next: ["Una eSIM", "Asistencia IA", "Acciones sencillas", "Cuenta global"]
    },
    plans: [
      ["One", "Conectividad mÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³vil esencial para un uso global ligero."],
      ["Global", "DiseÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â±ado para usuarios internacionales y viajeros frecuentes."],
      ["Ultra", "Para un uso mÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¡s intensivo, trabajo remoto y movilidad frecuente."]
    ],
    faq: [
      ["ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¿Invisible Mobile es un operador de telecomunicaciones clÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¡sico?", "EstÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¡ diseÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â±ado como una plataforma de conectividad mÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³vil centrada en la IA e impulsada por socios de infraestructura eSIM."],
      ["ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¿Los usuarios necesitarÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¡n una SIM fÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­sica?", "No. La visiÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n del producto se basa en la activaciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n digital de eSIM para dispositivos compatibles."],
      ["ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¿Una sola eSIM funcionarÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¡ en todas partes?", "El objetivo es ofrecer una eSIM persistente en los destinos compatibles, segÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Âºn las capacidades de los socios."],
      ["ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¿Los precios son definitivos?", "No. Los precios finales deben confirmarse despuÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â©s de validar los costes de datos mayoristas y las condiciones de los socios."]
    ],
    footer: {
      description: "Plataforma global de conectividad mÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³vil impulsada por IA.",
      columns: [
        ["Producto", "Plataforma", "Operador IA", "App", "Cobertura"],
        ["Empresa", "Acerca de", "Socios", "Prensa", "Contacto"],
        ["Legal", "Privacidad", "Condiciones", "Seguridad", "Cookies"]
      ]
    }
  },  de: {
    ...en,
    nav: ["Plattform", "KI", "App", "Abdeckung", "Sicherheit", "Preise", "FAQ"],
    heroKicker: "KI-gestÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¼tzter globaler Mobilfunkanbieter",
    heroTitle: "Eine eSIM. Eine KI. ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â¦ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œberall verbunden.",
    heroSubtitle: "Invisible Mobile ist eine mobile Plattform der nÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¤chsten Generation, bei der Nutzer eine eSIM einmal installieren und die KI KonnektivitÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¤t, Reisen, Nutzung, Support und Kontoverwaltung ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¼bernimmt.",
    primaryCta: "FrÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¼hen Zugang anfragen",
    secondaryCta: "Erlebnis ansehen",
    heroStats: ["184 LÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¤nder bereit", "Aktivierung in 60 Sekunden", "KI-Support 24/7"],
    phoneDataLabel: "GLOBALE DATEN",
    phoneNetworkText: "Mit unterstÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¼tzten Netzwerken verbunden",
    phoneAiLabel: "INVISIBLE KI",
    phoneAiText: "Ihre Verbindung ist bereit. Nichts zu konfigurieren.",
    chipNetworkLabel: "Netzwerk",
    chipNetworkValue: "5G bereit",
    chipAiLabel: "KI-Aktion",
    chipAiValue: "Automatische Einrichtung",
    marquee: "EINE ESIM ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â· EIN KONTO ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â· KI-OPERATOR ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â· GLOBALE KONNEKTIVITÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¾T ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â· SOFORTIGE AKTIVIERUNG ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â· NULL KOMPLEXITÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¾T ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â·",
    platformEyebrow: "Plattform",
    aiEyebrow: "KI-Operator",
    appEyebrow: "Anwendung",
    appReadyText: "Jetzt bereit.",
    coverageEyebrow: "Globale MobilitÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¤t",
    securityEyebrow: "Sicherheit",
    comparisonEyebrow: "Vergleich",
    pricingEyebrow: "Preise",
    pricingNote: "Wholesale-Validierung erforderlich",
    faqEyebrow: "FAQ",
    footerTagline: "KI-gestÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¼tzte globale mobile KonnektivitÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¤t.",
  },
} as const;
