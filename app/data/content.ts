export type Lang = "en" | "fr" | "de" | "es" | "pt" | "it" | "ar" | "no" | "zh";

export const languages = [
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
  { code: "de", label: "DE" },
  { code: "es", label: "ES" },
  { code: "pt", label: "PT" },
  { code: "it", label: "IT" },
  { code: "ar", label: "AR" },
  { code: "no", label: "NO" },
  { code: "zh", label: "中文" },
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
    marquee: "ONE ESIM ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â· ONE ACCOUNT ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â· AI OPERATOR ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â· GLOBAL CONNECTIVITY ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â· INSTANT ACTIVATION ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â· ZERO COMPLEXITY ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â·",
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
    phoneNetworkText: "ConnectÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â© aux rÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©seaux compatibles",
    phoneAiLabel: "IA INVISIBLE",
    phoneAiText: "Votre connectivitÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â© est prÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Âªte. Rien ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â  configurer.",
    chipNetworkLabel: "RÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©seau",
    chipNetworkValue: "5G prÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Âªte",
    chipAiLabel: "Action IA",
    chipAiValue: "Configuration auto",
    marquee: "UNE ESIM ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â· UN COMPTE ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â· OPÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â°RATEUR IA ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â· CONNECTIVITÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â° MONDIALE ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â· ACTIVATION INSTANTANÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â°E ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â· ZÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â°RO COMPLEXITÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â° ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â·",
    platformEyebrow: "Plateforme",
    aiEyebrow: "OpÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©rateur IA",
    appEyebrow: "Application",
    appReadyText: "PrÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Âªt maintenant.",
    coverageEyebrow: "MobilitÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â© mondiale",
    securityEyebrow: "SÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©curitÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©",
    comparisonEyebrow: "Comparaison",
    pricingEyebrow: "Prix",
    pricingNote: "Validation wholesale requise",
    faqEyebrow: "FAQ",
    footerTagline: "ConnectivitÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â© mobile mondiale pilotÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©e par IA.",
    nav: ["Plateforme", "IA", "Application", "Couverture", "SÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©curitÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©", "Prix", "FAQ"],
    heroKicker: "OpÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©rateur mobile mondial pilotÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â© par IA",
    heroTitle: "Une eSIM. Une IA. ConnectÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â© partout.",
    heroSubtitle:
      "Invisible Mobile est une plateforme mobile nouvelle gÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©nÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©ration oÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¹ lÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¾ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢utilisateur installe une eSIM une seule fois, puis lÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¾ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢IA gÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¨re la connectivitÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©, les voyages, lÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¾ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢usage, le support et le compte.",
    primaryCta: "Demander un accÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¨s",
    secondaryCta: "Voir lÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¾ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢expÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©rience",
    heroStats: ["184 pays prÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Âªts", "Activation en 60 secondes", "Support IA 24/7"],
    platformTitle: "Un opÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©rateur mobile conÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â§u pour devenir invisible.",
    platformText:
      "Plus besoin dÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¾ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢acheter pays par pays, de scanner plusieurs QR codes ou de comprendre le roaming. Un seul compte pilote toute lÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¾ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢expÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©rience.",
    aiTitle: "LÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¾ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢opÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©rateur devient conversationnel.",
    aiText:
      "LÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¾ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢utilisateur pose une question simple. LÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¾ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢IA vÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©rifie le contexte, explique la couverture, prÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©pare le voyage, aide ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â  configurer et guide lÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¾ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢action suivante.",
    appTitle: "Une application premium avec presque aucun menu.",
    appText:
      "LÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¾ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢interface montre uniquement lÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¾ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢essentiel : connexion, data restante, destination prÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Âªte et assistance IA.",
    coverageTitle: "PensÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â© pour les personnes qui bougent dans le monde.",
    coverageText:
      "Pour voyageurs, fondateurs, ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©tudiants, travailleurs ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â  distance et ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©quipes internationales qui veulent Internet mobile sans friction.",
    securityTitle: "SÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©curitÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â© et confiance dÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¨s la conception.",
    securityText:
      "IdentitÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©, paiements, accÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¨s au compte et contrÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â´les dÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¾ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢usage sont pensÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©s pour ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Âªtre protÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©gÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©s dÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¨s le dÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©part.",
    comparisonTitle: "La complexitÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â© tÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©lÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©com traditionnelle, supprimÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©e.",
    pricingTitle: "Des prix simples aprÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¨s validation wholesale.",
    faqTitle: "Questions avant lancement.",
    finalTitle: "Installez une fois. Allez partout.",
    finalText: "Le futur opÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©rateur mobile est simple, intelligent et mondial.",
    cards: [
      ["eSIM persistante", "Installation unique et mÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Âªme profil mobile numÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©rique."],
      ["OpÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©rateur IA", "Support, configuration et usage deviennent conversationnels."],
      ["PensÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â© mondial", "ConÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â§u pour la connectivitÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â© internationale dÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¨s le dÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©part."],
      ["Compte intelligent", "Un seul espace pour forfait, usage, appareils, paiement et support."],
      ["Activation rapide", "Onboarding instantanÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â© et livraison digitale."],
      ["Couche sÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©curisÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©e", "IdentitÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©, paiement et sÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©curitÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â© du compte intÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©grÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©s."],
    ],
    aiMessages: [
      ["Utilisateur", "Je pars au Japon demain. Suis-je couvert ?"],
      ["Invisible AI", "Oui. Votre eSIM est prÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Âªte pour les rÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©seaux compatibles. Aucun nouveau QR code requis."],
      ["Utilisateur", "Pourquoi ma connexion est lente ?"],
      ["Invisible AI", "JÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¾ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ai vÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©rifiÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â© votre usage et lÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¾ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©tat rÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©seau. Je peux vous guider vers la solution la plus rapide."],
    ],
    appCards: [
      ["ConnectÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©", "eSIM mondiale active"],
      ["Data", "42,8 Go disponibles"],
      ["Voyage", "Prochaine destination prÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Âªte"],
    ],
    people: [
      ["Fondateurs internationaux", "Restez connectÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â© entre rÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©unions, aÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©roports et pays."],
      ["Travailleurs ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â  distance", "Un seul compte pour travail, voyage et Internet mobile."],
      ["Familles mondiales", "Une connectivitÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â© simple pour les personnes entre plusieurs pays."],
    ],
    securityItems: ["VÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©rification dÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¾ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢identitÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©", "Paiement sÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©curisÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©", "Compte protÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©gÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©", "ContrÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â´les de confidentialitÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©"],
    comparison: {
      oldTitle: "OpÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©rateur classique",
      newTitle: "Invisible Mobile",
      old: ["Friction SIM physique", "RÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¨gles roaming", "Files support", "Forfaits complexes"],
      next: ["Une eSIM", "Assistance IA", "Actions simples", "Compte mondial"],
    },
    plans: [
      ["One", "ConnectivitÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â© essentielle pour usage mondial lÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©ger."],
      ["Global", "Pour utilisateurs internationaux et voyageurs rÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©guliers."],
      ["Ultra", "Pour usage plus ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©levÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©, tÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©lÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©travail et mobilitÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â© frÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©quente."],
    ],
    faq: [
      ["Invisible Mobile est-il un opÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©rateur classique ?", "CÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¾ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢est une plateforme de connectivitÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â© mobile pilotÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©e par IA et alimentÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©e par des partenaires dÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¾ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢infrastructure eSIM."],
      ["Faut-il une SIM physique ?", "Non. La vision produit repose sur lÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¾ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢activation eSIM digitale pour appareils compatibles."],
      ["Une seule eSIM fonctionnera-t-elle partout ?", "LÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¾ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢objectif est une eSIM persistante dans les destinations compatibles, selon les capacitÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©s des partenaires."],
      ["Les prix sont-ils dÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©finitifs ?", "Non. Les prix finaux seront confirmÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©s aprÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¨s validation des coÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â»ts wholesale et des conditions partenaires."],
    ],
    footer: {
      description: "Plateforme mondiale de connectivitÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â© mobile pilotÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©e par IA.",
      columns: [
        ["Produit", "Plateforme", "OpÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©rateur IA", "Application", "Couverture"],
        ["Entreprise", "ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ propos", "Partenaires", "Presse", "Contact"],
        ["LÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©gal", "ConfidentialitÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©", "Conditions", "SÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©curitÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©", "Cookies"],
      ],
    },
};

export const content = {
  en,
  fr,
  zh: {
    ...en,
    nav: ["平台", "人工智能", "应用", "覆盖范围", "安全", "价格", "常见问题"],
    heroKicker: "人工智能驱动的全球移动运营商",
    heroTitle: "一张 eSIM。一个人工智能。随时随地保持连接。",
    heroSubtitle: "Invisible Mobile 是新一代移动连接平台。用户只需安装一次 eSIM，即可让人工智能管理连接、旅行、使用情况、支持服务和账户操作。",
    primaryCta: "申请抢先体验",
    secondaryCta: "查看体验",
    heroStats: ["覆盖 184 个国家", "60 秒快速激活", "全天候人工智能支持"],
    phoneDataLabel: "全球数据",
    phoneNetworkText: "已连接支持的网络",
    phoneAiLabel: "INVISIBLE AI",
    phoneAiText: "您的连接已准备就绪。无需任何配置。",
    chipNetworkLabel: "网络",
    chipNetworkValue: "支持 5G",
    chipAiLabel: "人工智能操作",
    chipAiValue: "自动设置",
    marquee: "一张 ESIM · 一个账户 · 人工智能运营商 · 全球连接 · 即时激活 · 零复杂度 ·",
    platformEyebrow: "平台",
    platformTitle: "一个让连接体验变得无形的移动运营商。",
    platformText: "无需逐个国家购买套餐，无需重复扫描二维码，也无需面对复杂的漫游规则。一个账户即可管理完整的连接体验。",
    aiEyebrow: "人工智能运营商",
    aiTitle: "让移动运营商能够与您对话。",
    aiText: "用户只需提出简单的问题。人工智能会分析情况、解释网络覆盖、准备旅行连接、协助设置并指导下一步操作。",
    appEyebrow: "应用",
    appTitle: "几乎无需菜单的高级移动应用。",
    appText: "界面专注于真正重要的信息：连接状态、剩余数据、目的地准备情况以及人工智能帮助。",
    appReadyText: "现在已准备就绪。",
    coverageEyebrow: "全球移动",
    coverageTitle: "专为在全球移动的人们打造。",
    coverageText: "适用于旅行者、创业者、学生、远程工作者和国际团队，为他们提供简单无障碍的移动互联网体验。",
    securityEyebrow: "安全",
    securityTitle: "从设计之初建立安全与信任。",
    securityText: "身份、支付、账户访问和使用控制从一开始就受到保护。",
    comparisonEyebrow: "比较",
    comparisonTitle: "告别传统电信服务的复杂体验。",
    pricingEyebrow: "价格",
    pricingTitle: "完成批发成本验证后的简单定价。",
    pricingNote: "需要完成批发条件验证",
    faqEyebrow: "常见问题",
    faqTitle: "发布前的常见问题。",
    finalTitle: "安装一次。畅行全球。",
    finalText: "未来的移动运营商应该简单、智能并且全球化。",
    footerTagline: "人工智能驱动的全球移动连接。",
    cards: [
      ["持久 eSIM", "只需安装一次，即可持续使用同一个数字移动配置文件。"],
      ["人工智能运营商", "让支持、设置和使用体验变得可以对话。"],
      ["全球优先", "从第一天开始就为国际连接而设计。"],
      ["智能账户", "在一个地方管理套餐、使用情况、设备、账单和支持。"],
      ["快速激活", "专为即时注册和数字化交付而打造。"],
      ["安全层", "集成身份、支付和账户安全保护。"]
    ],
    aiMessages: [
      ["用户", "我明天要去日本。我有网络覆盖吗？"],
      ["Invisible AI", "有。您的 eSIM 已准备好连接支持的网络。无需新的二维码。"],
      ["用户", "为什么我的连接速度很慢？"],
      ["Invisible AI", "我已经检查了您的使用情况和网络状态。我可以帮助您找到最快的解决方案。"]
    ],
    appCards: [
      ["已连接", "全球 eSIM 已激活"],
      ["数据", "剩余 42.8 GB"],
      ["旅行", "下一个目的地已准备就绪"]
    ],
    people: [
      ["国际创业者", "在会议、机场和不同国家之间始终保持连接。"],
      ["远程工作者", "一个账户即可满足工作、旅行和日常移动互联网需求。"],
      ["全球家庭", "为生活在不同国家之间的人们提供简单的连接体验。"]
    ],
    securityItems: ["身份验证", "安全支付", "账户保护", "隐私控制"],
    comparison: {
      oldTitle: "传统运营商",
      newTitle: "Invisible Mobile",
      old: ["实体 SIM 卡的不便", "复杂的漫游规则", "漫长的客服等待", "复杂的套餐"],
      next: ["一张 eSIM", "人工智能协助", "简单操作", "全球账户"]
    },
    plans: [
      ["One", "适合轻度全球使用的基础移动连接服务。"],
      ["Global", "专为国际用户和经常旅行的人士设计。"],
      ["Ultra", "适合高数据使用、远程工作和频繁移动的用户。"]
    ],
    faq: [
      ["Invisible Mobile 是传统移动运营商吗？", "Invisible Mobile 被设计为人工智能优先的移动连接平台，并通过 eSIM 基础设施合作伙伴提供服务。"],
      ["用户需要实体 SIM 卡吗？", "不需要。产品基于兼容设备的数字 eSIM 激活。"],
      ["一张 eSIM 可以在任何地方使用吗？", "我们的目标是在支持的目的地提供持久 eSIM 服务，具体取决于合作伙伴的网络能力。"],
      ["价格是最终价格吗？", "不是。最终价格将在验证批发数据成本和合作伙伴条件后确定。"]
    ],
    footer: {
      description: "人工智能驱动的全球移动连接平台。",
      columns: [
        ["产品", "平台", "人工智能运营商", "应用", "覆盖范围"],
        ["公司", "关于我们", "合作伙伴", "媒体", "联系我们"],
        ["法律", "隐私", "条款", "安全", "Cookie"]
      ]
    }
  },  no: {
    ...en,
    nav: ["Plattform", "KI", "App", "Dekning", "Sikkerhet", "Priser", "FAQ"],
    heroKicker: "Global mobiloperatÃ¸r drevet av KI",
    heroTitle: "Ã‰n eSIM. Ã‰n KI. Tilkoblet overalt.",
    heroSubtitle: "Invisible Mobile er en neste generasjons mobilplattform der brukerne installerer Ã©n eSIM Ã©n gang og lar KI hÃ¥ndtere tilkobling, reiser, bruk, stÃ¸tte og kontohandlinger.",
    primaryCta: "Be om tidlig tilgang",
    secondaryCta: "Se opplevelsen",
    heroStats: ["184 land tilgjengelige", "Aktivering pÃ¥ 60 sekunder", "KI-stÃ¸tte 24/7"],
    phoneDataLabel: "GLOBALE DATA",
    phoneNetworkText: "Tilkoblet stÃ¸ttede nettverk",
    phoneAiLabel: "INVISIBLE KI",
    phoneAiText: "Tilkoblingen din er klar. Ingenting Ã¥ konfigurere.",
    chipNetworkLabel: "Nettverk",
    chipNetworkValue: "5G klar",
    chipAiLabel: "KI-handling",
    chipAiValue: "Automatisk oppsett",
    marquee: "Ã‰N ESIM Â· Ã‰N KONTO Â· KI-OPERATÃ˜R Â· GLOBAL TILKOBLING Â· Ã˜YEBLIKKELIG AKTIVERING Â· NULL KOMPLEKSITET Â·",
    platformEyebrow: "Plattform",
    platformTitle: "En mobiloperatÃ¸r designet for Ã¥ fÃ¸les usynlig.",
    platformText: "Ingen kjÃ¸p land for land, ingen gjentatte QR-koder og ingen forvirring rundt roaming. Ã‰n konto styrer hele tilkoblingsopplevelsen.",
    aiEyebrow: "KI-operatÃ¸r",
    aiTitle: "OperatÃ¸ren blir samtalebasert.",
    aiText: "Brukerne stiller enkle spÃ¸rsmÃ¥l. KI sjekker konteksten, forklarer dekningen, forbereder reiser, hjelper med oppsettet og veileder neste handling.",
    appEyebrow: "Applikasjon",
    appTitle: "En fÃ¸rsteklasses mobilapp med nesten ingen menyer.",
    appText: "Grensesnittet fokuserer pÃ¥ det som betyr noe: tilkobling, gjenvÃ¦rende data, reisemÃ¥lets beredskap og KI-assistanse.",
    appReadyText: "Klar nÃ¥.",
    coverageEyebrow: "Global mobilitet",
    coverageTitle: "Bygget for mennesker som beveger seg rundt i verden.",
    coverageText: "For reisende, grÃ¼ndere, studenter, fjernarbeidere og internasjonale team som trenger mobilt internett uten problemer.",
    securityEyebrow: "Sikkerhet",
    securityTitle: "Sikkerhet og tillit gjennom hele designet.",
    securityText: "Identitet, betalinger, kontotilgang og brukskontroller er designet for Ã¥ vÃ¦re beskyttet fra starten.",
    comparisonEyebrow: "Sammenligning",
    comparisonTitle: "Tradisjonell telekomkompleksitet, fjernet.",
    pricingEyebrow: "Priser",
    pricingTitle: "Enkle priser etter validering av grossistvilkÃ¥r.",
    pricingNote: "Validering av grossistvilkÃ¥r kreves",
    faqEyebrow: "FAQ",
    faqTitle: "SpÃ¸rsmÃ¥l fÃ¸r lansering.",
    finalTitle: "Installer Ã©n gang. Reis hvor som helst.",
    finalText: "Fremtidens mobiloperatÃ¸r er enkel, intelligent og global.",
    footerTagline: "Global mobiltilkobling drevet av KI.",
    cards: [
      ["Permanent eSIM", "Installer Ã©n gang og behold den samme digitale mobilprofilen."],
      ["KI-operatÃ¸r", "StÃ¸tte, oppsett og bruk blir samtalebasert."],
      ["Global fra starten", "Designet for internasjonal tilkobling fra fÃ¸rste dag."],
      ["Smart konto", "Ett sted for abonnement, bruk, enheter, fakturering og stÃ¸tte."],
      ["Rask aktivering", "Bygget for Ã¸yeblikkelig onboarding og digital levering."],
      ["Sikkert lag", "Identitet, betaling og kontosikkerhet er integrert."]
    ],
    aiMessages: [
      ["Bruker", "Jeg flyr til Japan i morgen. Har jeg dekning?"],
      ["Invisible AI", "Ja. eSIM-kortet ditt er klart for stÃ¸ttede nettverk. Ingen ny QR-kode er nÃ¸dvendig."],
      ["Bruker", "Hvorfor er tilkoblingen min treg?"],
      ["Invisible AI", "Jeg har sjekket bruken din og nettverksstatusen. Jeg kan veilede deg til den raskeste lÃ¸sningen."]
    ],
    appCards: [
      ["Tilkoblet", "Global eSIM aktiv"],
      ["Data", "42,8 GB tilgjengelig"],
      ["Reise", "Neste reisemÃ¥l klart"]
    ],
    people: [
      ["Internasjonale grÃ¼ndere", "Hold deg tilkoblet mellom mÃ¸ter, flyplasser og land."],
      ["Fjernarbeidere", "Ã‰n konto for arbeid, reiser og daglig mobilt internett."],
      ["Globale familier", "Enkel tilkobling for mennesker som lever pÃ¥ tvers av landegrenser."]
    ],
    securityItems: ["Identitetsverifisering", "Sikker betaling", "Beskyttet konto", "Personvernkontroller"],
    comparison: {
      oldTitle: "Tradisjonell operatÃ¸r",
      newTitle: "Invisible Mobile",
      old: ["Problemer med fysisk SIM", "Roamingregler", "SupportkÃ¸er", "Komplekse abonnementer"],
      next: ["Ã‰n eSIM", "KI-assistanse", "Enkle handlinger", "Global konto"]
    },
    plans: [
      ["One", "Grunnleggende mobiltilkobling for lett global bruk."],
      ["Global", "Designet for internasjonale brukere og regelmessige reisende."],
      ["Ultra", "For hÃ¸yere bruk, fjernarbeid og hyppig mobilitet."]
    ],
    faq: [
      ["Er Invisible Mobile en tradisjonell mobiloperatÃ¸r?", "Den er designet som en KI-fokusert mobil tilkoblingsplattform drevet av eSIM-infrastrukturpartnere."],
      ["Trenger brukerne et fysisk SIM-kort?", "Nei. Produktvisjonen er basert pÃ¥ digital eSIM-aktivering for kompatible enheter."],
      ["Vil Ã©n eSIM fungere overalt?", "MÃ¥let er Ã©n permanent eSIM pÃ¥ stÃ¸ttede destinasjoner, avhengig av partnernes kapasitet."],
      ["Er prisene endelige?", "Nei. Endelige priser mÃ¥ bekreftes etter validering av grossistkostnader for data og partnervilkÃ¥r."]
    ],
    footer: {
      description: "Global mobil tilkoblingsplattform drevet av KI.",
      columns: [
        ["Produkt", "Plattform", "KI-operatÃ¸r", "App", "Dekning"],
        ["Selskap", "Om oss", "Partnere", "Presse", "Kontakt"],
        ["Juridisk", "Personvern", "VilkÃ¥r", "Sikkerhet", "Informasjonskapsler"]
      ]
    }
  },  ar: {
    ...en,
    nav: ["Ã˜Â§Ã™â€žÃ™â€¦Ã™â€ Ã˜ÂµÃ˜Â©", "Ã˜Â§Ã™â€žÃ˜Â°Ã™Æ’Ã˜Â§Ã˜Â¡ Ã˜Â§Ã™â€žÃ˜Â§Ã˜ÂµÃ˜Â·Ã™â€ Ã˜Â§Ã˜Â¹Ã™Å ", "Ã˜Â§Ã™â€žÃ˜ÂªÃ˜Â·Ã˜Â¨Ã™Å Ã™â€š", "Ã˜Â§Ã™â€žÃ˜ÂªÃ˜ÂºÃ˜Â·Ã™Å Ã˜Â©", "Ã˜Â§Ã™â€žÃ˜Â£Ã™â€¦Ã˜Â§Ã™â€ ", "Ã˜Â§Ã™â€žÃ˜Â£Ã˜Â³Ã˜Â¹Ã˜Â§Ã˜Â±", "Ã˜Â§Ã™â€žÃ˜Â£Ã˜Â³Ã˜Â¦Ã™â€žÃ˜Â© Ã˜Â§Ã™â€žÃ˜Â´Ã˜Â§Ã˜Â¦Ã˜Â¹Ã˜Â©"],
    heroKicker: "Ã™â€¦Ã˜Â´Ã˜ÂºÃ™â€ž Ã˜Â§Ã˜ÂªÃ˜ÂµÃ˜Â§Ã™â€žÃ˜Â§Ã˜Âª Ã˜Â¹Ã˜Â§Ã™â€žÃ™â€¦Ã™Å  Ã™â€¦Ã˜Â¯Ã˜Â¹Ã™Ë†Ã™â€¦ Ã˜Â¨Ã˜Â§Ã™â€žÃ˜Â°Ã™Æ’Ã˜Â§Ã˜Â¡ Ã˜Â§Ã™â€žÃ˜Â§Ã˜ÂµÃ˜Â·Ã™â€ Ã˜Â§Ã˜Â¹Ã™Å ",
    heroTitle: "Ã˜Â´Ã˜Â±Ã™Å Ã˜Â­Ã˜Â© eSIM Ã™Ë†Ã˜Â§Ã˜Â­Ã˜Â¯Ã˜Â©. Ã˜Â°Ã™Æ’Ã˜Â§Ã˜Â¡ Ã˜Â§Ã˜ÂµÃ˜Â·Ã™â€ Ã˜Â§Ã˜Â¹Ã™Å  Ã™Ë†Ã˜Â§Ã˜Â­Ã˜Â¯. Ã˜Â§Ã˜ÂªÃ˜ÂµÃ˜Â§Ã™â€ž Ã™ÂÃ™Å  Ã™Æ’Ã™â€ž Ã™â€¦Ã™Æ’Ã˜Â§Ã™â€ .",
    heroSubtitle: "Invisible Mobile Ã™â€¡Ã™Å  Ã™â€¦Ã™â€ Ã˜ÂµÃ˜Â© Ã˜Â§Ã˜ÂªÃ˜ÂµÃ˜Â§Ã™â€žÃ˜Â§Ã˜Âª Ã™â€¦Ã˜ÂªÃ™â€ Ã™â€šÃ™â€žÃ˜Â© Ã™â€¦Ã™â€  Ã˜Â§Ã™â€žÃ˜Â¬Ã™Å Ã™â€ž Ã˜Â§Ã™â€žÃ˜Â¬Ã˜Â¯Ã™Å Ã˜Â¯Ã˜Å’ Ã™Å Ã™â€šÃ™Ë†Ã™â€¦ Ã™ÂÃ™Å Ã™â€¡Ã˜Â§ Ã˜Â§Ã™â€žÃ™â€¦Ã˜Â³Ã˜ÂªÃ˜Â®Ã˜Â¯Ã™â€¦ Ã˜Â¨Ã˜ÂªÃ˜Â«Ã˜Â¨Ã™Å Ã˜Âª Ã˜Â´Ã˜Â±Ã™Å Ã˜Â­Ã˜Â© eSIM Ã™â€¦Ã˜Â±Ã˜Â© Ã™Ë†Ã˜Â§Ã˜Â­Ã˜Â¯Ã˜Â©Ã˜Å’ Ã˜Â«Ã™â€¦ Ã™Å Ã˜ÂªÃ™Ë†Ã™â€žÃ™â€° Ã˜Â§Ã™â€žÃ˜Â°Ã™Æ’Ã˜Â§Ã˜Â¡ Ã˜Â§Ã™â€žÃ˜Â§Ã˜ÂµÃ˜Â·Ã™â€ Ã˜Â§Ã˜Â¹Ã™Å  Ã˜Â¥Ã˜Â¯Ã˜Â§Ã˜Â±Ã˜Â© Ã˜Â§Ã™â€žÃ˜Â§Ã˜ÂªÃ˜ÂµÃ˜Â§Ã™â€ž Ã™Ë†Ã˜Â§Ã™â€žÃ˜Â³Ã™ÂÃ˜Â± Ã™Ë†Ã˜Â§Ã™â€žÃ˜Â§Ã˜Â³Ã˜ÂªÃ˜Â®Ã˜Â¯Ã˜Â§Ã™â€¦ Ã™Ë†Ã˜Â§Ã™â€žÃ˜Â¯Ã˜Â¹Ã™â€¦ Ã™Ë†Ã˜Â¥Ã˜Â¬Ã˜Â±Ã˜Â§Ã˜Â¡Ã˜Â§Ã˜Âª Ã˜Â§Ã™â€žÃ˜Â­Ã˜Â³Ã˜Â§Ã˜Â¨.",
    primaryCta: "Ã˜Â§Ã˜Â·Ã™â€žÃ˜Â¨ Ã˜Â§Ã™â€žÃ™Ë†Ã˜ÂµÃ™Ë†Ã™â€ž Ã˜Â§Ã™â€žÃ™â€¦Ã˜Â¨Ã™Æ’Ã˜Â±",
    secondaryCta: "Ã˜Â´Ã˜Â§Ã™â€¡Ã˜Â¯ Ã˜Â§Ã™â€žÃ˜ÂªÃ˜Â¬Ã˜Â±Ã˜Â¨Ã˜Â©",
    heroStats: ["Ã™â€¦Ã˜ÂªÃ˜Â§Ã˜Â­ Ã™ÂÃ™Å  184 Ã˜Â¯Ã™Ë†Ã™â€žÃ˜Â©", "Ã˜ÂªÃ™ÂÃ˜Â¹Ã™Å Ã™â€ž Ã˜Â®Ã™â€žÃ˜Â§Ã™â€ž 60 Ã˜Â«Ã˜Â§Ã™â€ Ã™Å Ã˜Â©", "Ã˜Â¯Ã˜Â¹Ã™â€¦ Ã˜Â¨Ã˜Â§Ã™â€žÃ˜Â°Ã™Æ’Ã˜Â§Ã˜Â¡ Ã˜Â§Ã™â€žÃ˜Â§Ã˜ÂµÃ˜Â·Ã™â€ Ã˜Â§Ã˜Â¹Ã™Å  Ã˜Â¹Ã™â€žÃ™â€° Ã™â€¦Ã˜Â¯Ã˜Â§Ã˜Â± Ã˜Â§Ã™â€žÃ˜Â³Ã˜Â§Ã˜Â¹Ã˜Â©"],
    phoneDataLabel: "Ã˜Â¨Ã™Å Ã˜Â§Ã™â€ Ã˜Â§Ã˜Âª Ã˜Â¹Ã˜Â§Ã™â€žÃ™â€¦Ã™Å Ã˜Â©",
    phoneNetworkText: "Ã™â€¦Ã˜ÂªÃ˜ÂµÃ™â€ž Ã˜Â¨Ã˜Â§Ã™â€žÃ˜Â´Ã˜Â¨Ã™Æ’Ã˜Â§Ã˜Âª Ã˜Â§Ã™â€žÃ™â€¦Ã˜Â¯Ã˜Â¹Ã™Ë†Ã™â€¦Ã˜Â©",
    phoneAiLabel: "Ã˜Â§Ã™â€žÃ˜Â°Ã™Æ’Ã˜Â§Ã˜Â¡ Ã˜Â§Ã™â€žÃ˜Â§Ã˜ÂµÃ˜Â·Ã™â€ Ã˜Â§Ã˜Â¹Ã™Å  INVISIBLE",
    phoneAiText: "Ã˜Â§Ã˜ÂªÃ˜ÂµÃ˜Â§Ã™â€žÃ™Æ’ Ã˜Â¬Ã˜Â§Ã™â€¡Ã˜Â². Ã™â€žÃ˜Â§ Ã˜Â­Ã˜Â§Ã˜Â¬Ã˜Â© Ã˜Â¥Ã™â€žÃ™â€° Ã˜Â£Ã™Å  Ã˜Â¥Ã˜Â¹Ã˜Â¯Ã˜Â§Ã˜Â¯.",
    chipNetworkLabel: "Ã˜Â§Ã™â€žÃ˜Â´Ã˜Â¨Ã™Æ’Ã˜Â©",
    chipNetworkValue: "Ã˜Â¬Ã˜Â§Ã™â€¡Ã˜Â² Ã™â€žÃ˜Â´Ã˜Â¨Ã™Æ’Ã˜Â© 5G",
    chipAiLabel: "Ã˜Â¥Ã˜Â¬Ã˜Â±Ã˜Â§Ã˜Â¡ Ã˜Â§Ã™â€žÃ˜Â°Ã™Æ’Ã˜Â§Ã˜Â¡ Ã˜Â§Ã™â€žÃ˜Â§Ã˜ÂµÃ˜Â·Ã™â€ Ã˜Â§Ã˜Â¹Ã™Å ",
    chipAiValue: "Ã˜Â¥Ã˜Â¹Ã˜Â¯Ã˜Â§Ã˜Â¯ Ã˜ÂªÃ™â€žÃ™â€šÃ˜Â§Ã˜Â¦Ã™Å ",
    marquee: "Ã˜Â´Ã˜Â±Ã™Å Ã˜Â­Ã˜Â© ESIM Ã™Ë†Ã˜Â§Ã˜Â­Ã˜Â¯Ã˜Â© Ã‚Â· Ã˜Â­Ã˜Â³Ã˜Â§Ã˜Â¨ Ã™Ë†Ã˜Â§Ã˜Â­Ã˜Â¯ Ã‚Â· Ã™â€¦Ã˜Â´Ã˜ÂºÃ™â€ž Ã˜Â¨Ã˜Â§Ã™â€žÃ˜Â°Ã™Æ’Ã˜Â§Ã˜Â¡ Ã˜Â§Ã™â€žÃ˜Â§Ã˜ÂµÃ˜Â·Ã™â€ Ã˜Â§Ã˜Â¹Ã™Å  Ã‚Â· Ã˜Â§Ã˜ÂªÃ˜ÂµÃ˜Â§Ã™â€ž Ã˜Â¹Ã˜Â§Ã™â€žÃ™â€¦Ã™Å  Ã‚Â· Ã˜ÂªÃ™ÂÃ˜Â¹Ã™Å Ã™â€ž Ã™ÂÃ™Ë†Ã˜Â±Ã™Å  Ã‚Â· Ã˜Â¨Ã˜Â¯Ã™Ë†Ã™â€  Ã˜ÂªÃ˜Â¹Ã™â€šÃ™Å Ã˜Â¯ Ã‚Â·",
    platformEyebrow: "Ã˜Â§Ã™â€žÃ™â€¦Ã™â€ Ã˜ÂµÃ˜Â©",
    platformTitle: "Ã™â€¦Ã˜Â´Ã˜ÂºÃ™â€ž Ã˜Â§Ã˜ÂªÃ˜ÂµÃ˜Â§Ã™â€žÃ˜Â§Ã˜Âª Ã™â€¦Ã˜ÂµÃ™â€¦Ã™â€¦ Ã™â€žÃ™Å Ã˜Â¹Ã™â€¦Ã™â€ž Ã˜Â¨Ã˜Â´Ã™Æ’Ã™â€ž Ã˜ÂºÃ™Å Ã˜Â± Ã™â€¦Ã˜Â±Ã˜Â¦Ã™Å .",
    platformText: "Ã™â€žÃ˜Â§ Ã˜Â­Ã˜Â§Ã˜Â¬Ã˜Â© Ã™â€žÃ˜Â´Ã˜Â±Ã˜Â§Ã˜Â¡ Ã˜Â¨Ã˜Â§Ã™â€šÃ˜Â§Ã˜Âª Ã™â€žÃ™Æ’Ã™â€ž Ã˜Â¯Ã™Ë†Ã™â€žÃ˜Â©Ã˜Å’ Ã™Ë†Ã™â€žÃ˜Â§ Ã™â€žÃ™â€¦Ã˜Â³Ã˜Â­ Ã˜Â±Ã™â€¦Ã™Ë†Ã˜Â² QR Ã˜Â¨Ã˜Â´Ã™Æ’Ã™â€ž Ã™â€¦Ã˜ÂªÃ™Æ’Ã˜Â±Ã˜Â±Ã˜Å’ Ã™Ë†Ã™â€žÃ˜Â§ Ã™â€žÃ˜ÂªÃ˜Â¹Ã™â€šÃ™Å Ã˜Â¯Ã˜Â§Ã˜Âª Ã˜Â§Ã™â€žÃ˜ÂªÃ˜Â¬Ã™Ë†Ã˜Â§Ã™â€ž. Ã˜Â­Ã˜Â³Ã˜Â§Ã˜Â¨ Ã™Ë†Ã˜Â§Ã˜Â­Ã˜Â¯ Ã™Å Ã˜Â¯Ã™Å Ã˜Â± Ã˜ÂªÃ˜Â¬Ã˜Â±Ã˜Â¨Ã˜Â© Ã˜Â§Ã™â€žÃ˜Â§Ã˜ÂªÃ˜ÂµÃ˜Â§Ã™â€ž Ã˜Â¨Ã˜Â§Ã™â€žÃ™Æ’Ã˜Â§Ã™â€¦Ã™â€ž.",
    aiEyebrow: "Ã™â€¦Ã˜Â´Ã˜ÂºÃ™â€ž Ã˜Â§Ã™â€žÃ˜Â°Ã™Æ’Ã˜Â§Ã˜Â¡ Ã˜Â§Ã™â€žÃ˜Â§Ã˜ÂµÃ˜Â·Ã™â€ Ã˜Â§Ã˜Â¹Ã™Å ",
    aiTitle: "Ã™â€¦Ã˜Â´Ã˜ÂºÃ™â€ž Ã˜Â§Ã™â€žÃ˜Â§Ã˜ÂªÃ˜ÂµÃ˜Â§Ã™â€žÃ˜Â§Ã˜Âª Ã™Å Ã˜ÂµÃ˜Â¨Ã˜Â­ Ã˜ÂªÃ™ÂÃ˜Â§Ã˜Â¹Ã™â€žÃ™Å Ã˜Â§Ã™â€¹.",
    aiText: "Ã™Å Ã˜Â·Ã˜Â±Ã˜Â­ Ã˜Â§Ã™â€žÃ™â€¦Ã˜Â³Ã˜ÂªÃ˜Â®Ã˜Â¯Ã™â€¦Ã™Ë†Ã™â€  Ã˜Â£Ã˜Â³Ã˜Â¦Ã™â€žÃ˜Â© Ã˜Â¨Ã˜Â³Ã™Å Ã˜Â·Ã˜Â©. Ã™Å Ã˜ÂªÃ˜Â­Ã™â€šÃ™â€š Ã˜Â§Ã™â€žÃ˜Â°Ã™Æ’Ã˜Â§Ã˜Â¡ Ã˜Â§Ã™â€žÃ˜Â§Ã˜ÂµÃ˜Â·Ã™â€ Ã˜Â§Ã˜Â¹Ã™Å  Ã™â€¦Ã™â€  Ã˜Â§Ã™â€žÃ˜Â³Ã™Å Ã˜Â§Ã™â€šÃ˜Å’ Ã™Ë†Ã™Å Ã˜Â´Ã˜Â±Ã˜Â­ Ã˜Â§Ã™â€žÃ˜ÂªÃ˜ÂºÃ˜Â·Ã™Å Ã˜Â©Ã˜Å’ Ã™Ë†Ã™Å Ã˜Â¬Ã™â€¡Ã˜Â² Ã˜Â§Ã™â€žÃ˜Â³Ã™ÂÃ˜Â±Ã˜Å’ Ã™Ë†Ã™Å Ã˜Â³Ã˜Â§Ã˜Â¹Ã˜Â¯ Ã™ÂÃ™Å  Ã˜Â§Ã™â€žÃ˜Â¥Ã˜Â¹Ã˜Â¯Ã˜Â§Ã˜Â¯Ã˜Å’ Ã™Ë†Ã™Å Ã™Ë†Ã˜Â¬Ã™â€¡ Ã˜Â¥Ã™â€žÃ™â€° Ã˜Â§Ã™â€žÃ˜Â®Ã˜Â·Ã™Ë†Ã˜Â§Ã˜Âª Ã˜Â§Ã™â€žÃ˜ÂªÃ˜Â§Ã™â€žÃ™Å Ã˜Â©.",
    appEyebrow: "Ã˜Â§Ã™â€žÃ˜ÂªÃ˜Â·Ã˜Â¨Ã™Å Ã™â€š",
    appTitle: "Ã˜ÂªÃ˜Â·Ã˜Â¨Ã™Å Ã™â€š Ã™â€¡Ã˜Â§Ã˜ÂªÃ™Â Ã™â€¦Ã˜ÂªÃ™â€¦Ã™Å Ã˜Â² Ã™â€¦Ã˜Â¹ Ã˜Â£Ã™â€šÃ™â€ž Ã˜Â¹Ã˜Â¯Ã˜Â¯ Ã™â€¦Ã™â€¦Ã™Æ’Ã™â€  Ã™â€¦Ã™â€  Ã˜Â§Ã™â€žÃ™â€šÃ™Ë†Ã˜Â§Ã˜Â¦Ã™â€¦.",
    appText: "Ã˜ÂªÃ˜Â±Ã™Æ’Ã˜Â² Ã˜Â§Ã™â€žÃ™Ë†Ã˜Â§Ã˜Â¬Ã™â€¡Ã˜Â© Ã˜Â¹Ã™â€žÃ™â€° Ã™â€¦Ã˜Â§ Ã™Å Ã™â€¡Ã™â€¦: Ã˜Â§Ã™â€žÃ˜Â§Ã˜ÂªÃ˜ÂµÃ˜Â§Ã™â€žÃ˜Å’ Ã™Ë†Ã˜Â§Ã™â€žÃ˜Â¨Ã™Å Ã˜Â§Ã™â€ Ã˜Â§Ã˜Âª Ã˜Â§Ã™â€žÃ™â€¦Ã˜ÂªÃ˜Â¨Ã™â€šÃ™Å Ã˜Â©Ã˜Å’ Ã™Ë†Ã˜Â§Ã™â€žÃ˜Â§Ã˜Â³Ã˜ÂªÃ˜Â¹Ã˜Â¯Ã˜Â§Ã˜Â¯ Ã™â€žÃ™â€žÃ™Ë†Ã˜Â¬Ã™â€¡Ã˜Â©Ã˜Å’ Ã™Ë†Ã˜Â§Ã™â€žÃ™â€¦Ã˜Â³Ã˜Â§Ã˜Â¹Ã˜Â¯Ã˜Â© Ã˜Â¨Ã˜Â§Ã™â€žÃ˜Â°Ã™Æ’Ã˜Â§Ã˜Â¡ Ã˜Â§Ã™â€žÃ˜Â§Ã˜ÂµÃ˜Â·Ã™â€ Ã˜Â§Ã˜Â¹Ã™Å .",
    appReadyText: "Ã˜Â¬Ã˜Â§Ã™â€¡Ã˜Â² Ã˜Â§Ã™â€žÃ˜Â¢Ã™â€ .",
    coverageEyebrow: "Ã˜Â§Ã™â€žÃ˜ÂªÃ™â€ Ã™â€šÃ™â€ž Ã˜Â§Ã™â€žÃ˜Â¹Ã˜Â§Ã™â€žÃ™â€¦Ã™Å ",
    coverageTitle: "Ã™â€¦Ã˜ÂµÃ™â€¦Ã™â€¦ Ã™â€žÃ™â€žÃ˜Â£Ã˜Â´Ã˜Â®Ã˜Â§Ã˜Âµ Ã˜Â§Ã™â€žÃ˜Â°Ã™Å Ã™â€  Ã™Å Ã˜ÂªÃ™â€ Ã™â€šÃ™â€žÃ™Ë†Ã™â€  Ã˜Â­Ã™Ë†Ã™â€ž Ã˜Â§Ã™â€žÃ˜Â¹Ã˜Â§Ã™â€žÃ™â€¦.",
    coverageText: "Ã™â€žÃ™â€žÃ™â€¦Ã˜Â³Ã˜Â§Ã™ÂÃ˜Â±Ã™Å Ã™â€  Ã™Ë†Ã˜Â±Ã™Ë†Ã˜Â§Ã˜Â¯ Ã˜Â§Ã™â€žÃ˜Â£Ã˜Â¹Ã™â€¦Ã˜Â§Ã™â€ž Ã™Ë†Ã˜Â§Ã™â€žÃ˜Â·Ã™â€žÃ˜Â§Ã˜Â¨ Ã™Ë†Ã˜Â§Ã™â€žÃ˜Â¹Ã˜Â§Ã™â€¦Ã™â€žÃ™Å Ã™â€  Ã˜Â¹Ã™â€  Ã˜Â¨Ã™ÂÃ˜Â¹Ã˜Â¯ Ã™Ë†Ã˜Â§Ã™â€žÃ™ÂÃ˜Â±Ã™â€š Ã˜Â§Ã™â€žÃ˜Â¯Ã™Ë†Ã™â€žÃ™Å Ã˜Â© Ã˜Â§Ã™â€žÃ˜Â°Ã™Å Ã™â€  Ã™Å Ã˜Â­Ã˜ÂªÃ˜Â§Ã˜Â¬Ã™Ë†Ã™â€  Ã˜Â¥Ã™â€žÃ™â€° Ã˜Â¥Ã™â€ Ã˜ÂªÃ˜Â±Ã™â€ Ã˜Âª Ã™â€¦Ã˜ÂªÃ™â€ Ã™â€šÃ™â€ž Ã˜Â¯Ã™Ë†Ã™â€  Ã˜ÂªÃ˜Â¹Ã™â€šÃ™Å Ã˜Â¯.",
    securityEyebrow: "Ã˜Â§Ã™â€žÃ˜Â£Ã™â€¦Ã˜Â§Ã™â€ ",
    securityTitle: "Ã˜Â§Ã™â€žÃ˜Â£Ã™â€¦Ã˜Â§Ã™â€  Ã™Ë†Ã˜Â§Ã™â€žÃ˜Â«Ã™â€šÃ˜Â© Ã™â€¦Ã™â€ Ã˜Â° Ã™â€¦Ã˜Â±Ã˜Â­Ã™â€žÃ˜Â© Ã˜Â§Ã™â€žÃ˜ÂªÃ˜ÂµÃ™â€¦Ã™Å Ã™â€¦.",
    securityText: "Ã˜ÂªÃ™â€¦ Ã˜ÂªÃ˜ÂµÃ™â€¦Ã™Å Ã™â€¦ Ã˜Â§Ã™â€žÃ™â€¡Ã™Ë†Ã™Å Ã˜Â© Ã™Ë†Ã˜Â§Ã™â€žÃ™â€¦Ã˜Â¯Ã™ÂÃ™Ë†Ã˜Â¹Ã˜Â§Ã˜Âª Ã™Ë†Ã˜Â§Ã™â€žÃ™Ë†Ã˜ÂµÃ™Ë†Ã™â€ž Ã˜Â¥Ã™â€žÃ™â€° Ã˜Â§Ã™â€žÃ˜Â­Ã˜Â³Ã˜Â§Ã˜Â¨ Ã™Ë†Ã˜Â¶Ã™Ë†Ã˜Â§Ã˜Â¨Ã˜Â· Ã˜Â§Ã™â€žÃ˜Â§Ã˜Â³Ã˜ÂªÃ˜Â®Ã˜Â¯Ã˜Â§Ã™â€¦ Ã™â€žÃ˜ÂªÃ™Æ’Ã™Ë†Ã™â€  Ã™â€¦Ã˜Â­Ã™â€¦Ã™Å Ã˜Â© Ã™â€¦Ã™â€ Ã˜Â° Ã˜Â§Ã™â€žÃ˜Â¨Ã˜Â¯Ã˜Â§Ã™Å Ã˜Â©.",
    comparisonEyebrow: "Ã˜Â§Ã™â€žÃ™â€¦Ã™â€šÃ˜Â§Ã˜Â±Ã™â€ Ã˜Â©",
    comparisonTitle: "Ã˜Â¥Ã˜Â²Ã˜Â§Ã™â€žÃ˜Â© Ã˜ÂªÃ˜Â¹Ã™â€šÃ™Å Ã˜Â¯Ã˜Â§Ã˜Âª Ã˜Â§Ã™â€žÃ˜Â§Ã˜ÂªÃ˜ÂµÃ˜Â§Ã™â€žÃ˜Â§Ã˜Âª Ã˜Â§Ã™â€žÃ˜ÂªÃ™â€šÃ™â€žÃ™Å Ã˜Â¯Ã™Å Ã˜Â©.",
    pricingEyebrow: "Ã˜Â§Ã™â€žÃ˜Â£Ã˜Â³Ã˜Â¹Ã˜Â§Ã˜Â±",
    pricingTitle: "Ã˜Â£Ã˜Â³Ã˜Â¹Ã˜Â§Ã˜Â± Ã˜Â¨Ã˜Â³Ã™Å Ã˜Â·Ã˜Â© Ã˜Â¨Ã˜Â¹Ã˜Â¯ Ã˜Â§Ã™â€žÃ˜ÂªÃ˜Â­Ã™â€šÃ™â€š Ã™â€¦Ã™â€  Ã˜Â´Ã˜Â±Ã™Ë†Ã˜Â· Ã˜Â§Ã™â€žÃ˜Â¨Ã™Å Ã˜Â¹ Ã˜Â¨Ã˜Â§Ã™â€žÃ˜Â¬Ã™â€¦Ã™â€žÃ˜Â©.",
    pricingNote: "Ã™Å Ã™â€žÃ˜Â²Ã™â€¦ Ã˜Â§Ã™â€žÃ˜ÂªÃ˜Â­Ã™â€šÃ™â€š Ã™â€¦Ã™â€  Ã˜Â´Ã˜Â±Ã™Ë†Ã˜Â· Ã˜Â§Ã™â€žÃ˜Â¨Ã™Å Ã˜Â¹ Ã˜Â¨Ã˜Â§Ã™â€žÃ˜Â¬Ã™â€¦Ã™â€žÃ˜Â©",
    faqEyebrow: "Ã˜Â§Ã™â€žÃ˜Â£Ã˜Â³Ã˜Â¦Ã™â€žÃ˜Â© Ã˜Â§Ã™â€žÃ˜Â´Ã˜Â§Ã˜Â¦Ã˜Â¹Ã˜Â©",
    faqTitle: "Ã˜Â£Ã˜Â³Ã˜Â¦Ã™â€žÃ˜Â© Ã™â€šÃ˜Â¨Ã™â€ž Ã˜Â§Ã™â€žÃ˜Â¥Ã˜Â·Ã™â€žÃ˜Â§Ã™â€š.",
    finalTitle: "Ã˜Â«Ã˜Â¨Ã™â€˜Ã˜Âª Ã™â€¦Ã˜Â±Ã˜Â© Ã™Ë†Ã˜Â§Ã˜Â­Ã˜Â¯Ã˜Â©. Ã™Ë†Ã˜Â§Ã™â€ Ã˜Â·Ã™â€žÃ™â€š Ã˜Â¥Ã™â€žÃ™â€° Ã˜Â£Ã™Å  Ã™â€¦Ã™Æ’Ã˜Â§Ã™â€ .",
    finalText: "Ã™â€¦Ã˜Â´Ã˜ÂºÃ™â€ž Ã˜Â§Ã™â€žÃ˜Â§Ã˜ÂªÃ˜ÂµÃ˜Â§Ã™â€žÃ˜Â§Ã˜Âª Ã˜Â§Ã™â€žÃ™â€¦Ã˜Â³Ã˜ÂªÃ™â€šÃ˜Â¨Ã™â€žÃ™Å  Ã˜Â¨Ã˜Â³Ã™Å Ã˜Â· Ã™Ë†Ã˜Â°Ã™Æ’Ã™Å  Ã™Ë†Ã˜Â¹Ã˜Â§Ã™â€žÃ™â€¦Ã™Å .",
    footerTagline: "Ã˜Â§Ã˜ÂªÃ˜ÂµÃ˜Â§Ã™â€ž Ã™â€¦Ã˜ÂªÃ™â€ Ã™â€šÃ™â€ž Ã˜Â¹Ã˜Â§Ã™â€žÃ™â€¦Ã™Å  Ã™â€¦Ã˜Â¯Ã˜Â¹Ã™Ë†Ã™â€¦ Ã˜Â¨Ã˜Â§Ã™â€žÃ˜Â°Ã™Æ’Ã˜Â§Ã˜Â¡ Ã˜Â§Ã™â€žÃ˜Â§Ã˜ÂµÃ˜Â·Ã™â€ Ã˜Â§Ã˜Â¹Ã™Å .",
    cards: [
      ["Ã˜Â´Ã˜Â±Ã™Å Ã˜Â­Ã˜Â© eSIM Ã˜Â¯Ã˜Â§Ã˜Â¦Ã™â€¦Ã˜Â©", "Ã˜Â«Ã˜Â¨Ã™â€˜Ã˜ÂªÃ™â€¡Ã˜Â§ Ã™â€¦Ã˜Â±Ã˜Â© Ã™Ë†Ã˜Â§Ã˜Â­Ã˜Â¯Ã˜Â© Ã™Ë†Ã˜Â§Ã˜Â­Ã˜ÂªÃ™ÂÃ˜Â¸ Ã˜Â¨Ã™â€ Ã™ÂÃ˜Â³ Ã™â€¦Ã™â€žÃ™Â Ã˜Â§Ã™â€žÃ˜Â§Ã˜ÂªÃ˜ÂµÃ˜Â§Ã™â€ž Ã˜Â§Ã™â€žÃ˜Â±Ã™â€šÃ™â€¦Ã™Å ."],
      ["Ã™â€¦Ã˜Â´Ã˜ÂºÃ™â€ž Ã˜Â§Ã™â€žÃ˜Â°Ã™Æ’Ã˜Â§Ã˜Â¡ Ã˜Â§Ã™â€žÃ˜Â§Ã˜ÂµÃ˜Â·Ã™â€ Ã˜Â§Ã˜Â¹Ã™Å ", "Ã™Å Ã˜ÂµÃ˜Â¨Ã˜Â­ Ã˜Â§Ã™â€žÃ˜Â¯Ã˜Â¹Ã™â€¦ Ã™Ë†Ã˜Â§Ã™â€žÃ˜Â¥Ã˜Â¹Ã˜Â¯Ã˜Â§Ã˜Â¯ Ã™Ë†Ã˜Â§Ã™â€žÃ˜Â§Ã˜Â³Ã˜ÂªÃ˜Â®Ã˜Â¯Ã˜Â§Ã™â€¦ Ã˜ÂªÃ˜Â¬Ã˜Â±Ã˜Â¨Ã˜Â© Ã˜ÂªÃ™ÂÃ˜Â§Ã˜Â¹Ã™â€žÃ™Å Ã˜Â©."],
      ["Ã˜Â¹Ã˜Â§Ã™â€žÃ™â€¦Ã™Å  Ã™â€¦Ã™â€ Ã˜Â° Ã˜Â§Ã™â€žÃ˜Â¨Ã˜Â¯Ã˜Â§Ã™Å Ã˜Â©", "Ã™â€¦Ã˜ÂµÃ™â€¦Ã™â€¦ Ã™â€žÃ™â€žÃ˜Â§Ã˜ÂªÃ˜ÂµÃ˜Â§Ã™â€ž Ã˜Â§Ã™â€žÃ˜Â¯Ã™Ë†Ã™â€žÃ™Å  Ã™â€¦Ã™â€ Ã˜Â° Ã˜Â§Ã™â€žÃ™Å Ã™Ë†Ã™â€¦ Ã˜Â§Ã™â€žÃ˜Â£Ã™Ë†Ã™â€ž."],
      ["Ã˜Â­Ã˜Â³Ã˜Â§Ã˜Â¨ Ã˜Â°Ã™Æ’Ã™Å ", "Ã™â€¦Ã™Æ’Ã˜Â§Ã™â€  Ã™Ë†Ã˜Â§Ã˜Â­Ã˜Â¯ Ã™â€žÃ˜Â¥Ã˜Â¯Ã˜Â§Ã˜Â±Ã˜Â© Ã˜Â§Ã™â€žÃ˜Â¨Ã˜Â§Ã™â€šÃ˜Â© Ã™Ë†Ã˜Â§Ã™â€žÃ˜Â§Ã˜Â³Ã˜ÂªÃ˜Â®Ã˜Â¯Ã˜Â§Ã™â€¦ Ã™Ë†Ã˜Â§Ã™â€žÃ˜Â£Ã˜Â¬Ã™â€¡Ã˜Â²Ã˜Â© Ã™Ë†Ã˜Â§Ã™â€žÃ™ÂÃ™Ë†Ã˜Â§Ã˜ÂªÃ™Å Ã˜Â± Ã™Ë†Ã˜Â§Ã™â€žÃ˜Â¯Ã˜Â¹Ã™â€¦."],
      ["Ã˜ÂªÃ™ÂÃ˜Â¹Ã™Å Ã™â€ž Ã˜Â³Ã˜Â±Ã™Å Ã˜Â¹", "Ã™â€¦Ã˜ÂµÃ™â€¦Ã™â€¦ Ã™â€žÃ™â€žÃ˜ÂªÃ˜Â³Ã˜Â¬Ã™Å Ã™â€ž Ã˜Â§Ã™â€žÃ™ÂÃ™Ë†Ã˜Â±Ã™Å  Ã™Ë†Ã˜Â§Ã™â€žÃ˜ÂªÃ˜Â³Ã™â€žÃ™Å Ã™â€¦ Ã˜Â§Ã™â€žÃ˜Â±Ã™â€šÃ™â€¦Ã™Å ."],
      ["Ã˜Â·Ã˜Â¨Ã™â€šÃ˜Â© Ã˜Â¢Ã™â€¦Ã™â€ Ã˜Â©", "Ã˜Â­Ã™â€¦Ã˜Â§Ã™Å Ã˜Â© Ã˜Â§Ã™â€žÃ™â€¡Ã™Ë†Ã™Å Ã˜Â© Ã™Ë†Ã˜Â§Ã™â€žÃ™â€¦Ã˜Â¯Ã™ÂÃ™Ë†Ã˜Â¹Ã˜Â§Ã˜Âª Ã™Ë†Ã˜Â§Ã™â€žÃ˜Â­Ã˜Â³Ã˜Â§Ã˜Â¨ Ã™â€¦Ã˜Â¯Ã™â€¦Ã˜Â¬Ã˜Â© Ã™ÂÃ™Å  Ã˜Â§Ã™â€žÃ™â€ Ã˜Â¸Ã˜Â§Ã™â€¦."]
    ],
    aiMessages: [
      ["Ã˜Â§Ã™â€žÃ™â€¦Ã˜Â³Ã˜ÂªÃ˜Â®Ã˜Â¯Ã™â€¦", "Ã˜Â³Ã˜Â£Ã˜Â³Ã˜Â§Ã™ÂÃ˜Â± Ã˜Â¥Ã™â€žÃ™â€° Ã˜Â§Ã™â€žÃ™Å Ã˜Â§Ã˜Â¨Ã˜Â§Ã™â€  Ã˜ÂºÃ˜Â¯Ã˜Â§Ã™â€¹. Ã™â€¡Ã™â€ž Ã™â€žÃ˜Â¯Ã™Å  Ã˜ÂªÃ˜ÂºÃ˜Â·Ã™Å Ã˜Â©Ã˜Å¸"],
      ["Invisible AI", "Ã™â€ Ã˜Â¹Ã™â€¦. Ã˜Â´Ã˜Â±Ã™Å Ã˜Â­Ã˜Â© eSIM Ã˜Â§Ã™â€žÃ˜Â®Ã˜Â§Ã˜ÂµÃ˜Â© Ã˜Â¨Ã™Æ’ Ã˜Â¬Ã˜Â§Ã™â€¡Ã˜Â²Ã˜Â© Ã™â€žÃ™â€žÃ˜Â´Ã˜Â¨Ã™Æ’Ã˜Â§Ã˜Âª Ã˜Â§Ã™â€žÃ™â€¦Ã˜Â¯Ã˜Â¹Ã™Ë†Ã™â€¦Ã˜Â©. Ã™â€žÃ˜Â§ Ã˜ÂªÃ˜Â­Ã˜ÂªÃ˜Â§Ã˜Â¬ Ã˜Â¥Ã™â€žÃ™â€° Ã˜Â±Ã™â€¦Ã˜Â² QR Ã˜Â¬Ã˜Â¯Ã™Å Ã˜Â¯."],
      ["Ã˜Â§Ã™â€žÃ™â€¦Ã˜Â³Ã˜ÂªÃ˜Â®Ã˜Â¯Ã™â€¦", "Ã™â€žÃ™â€¦Ã˜Â§Ã˜Â°Ã˜Â§ Ã˜Â§Ã˜ÂªÃ˜ÂµÃ˜Â§Ã™â€žÃ™Å  Ã˜Â¨Ã˜Â·Ã™Å Ã˜Â¡Ã˜Å¸"],
      ["Invisible AI", "Ã˜ÂªÃ˜Â­Ã™â€šÃ™â€šÃ˜Âª Ã™â€¦Ã™â€  Ã˜Â§Ã˜Â³Ã˜ÂªÃ˜Â®Ã˜Â¯Ã˜Â§Ã™â€¦Ã™Æ’ Ã™Ë†Ã˜Â­Ã˜Â§Ã™â€žÃ˜Â© Ã˜Â§Ã™â€žÃ˜Â´Ã˜Â¨Ã™Æ’Ã˜Â©. Ã™Å Ã™â€¦Ã™Æ’Ã™â€ Ã™â€ Ã™Å  Ã˜Â¥Ã˜Â±Ã˜Â´Ã˜Â§Ã˜Â¯Ã™Æ’ Ã˜Â¥Ã™â€žÃ™â€° Ã˜Â£Ã˜Â³Ã˜Â±Ã˜Â¹ Ã˜Â­Ã™â€ž."]
    ],
    appCards: [
      ["Ã™â€¦Ã˜ÂªÃ˜ÂµÃ™â€ž", "Ã˜Â´Ã˜Â±Ã™Å Ã˜Â­Ã˜Â© eSIM Ã˜Â§Ã™â€žÃ˜Â¹Ã˜Â§Ã™â€žÃ™â€¦Ã™Å Ã˜Â© Ã™â€ Ã˜Â´Ã˜Â·Ã˜Â©"],
      ["Ã˜Â§Ã™â€žÃ˜Â¨Ã™Å Ã˜Â§Ã™â€ Ã˜Â§Ã˜Âª", "42.8 Ã˜Â¬Ã™Å Ã˜Â¬Ã˜Â§Ã˜Â¨Ã˜Â§Ã™Å Ã˜Âª Ã™â€¦Ã˜ÂªÃ˜Â§Ã˜Â­Ã˜Â©"],
      ["Ã˜Â§Ã™â€žÃ˜Â³Ã™ÂÃ˜Â±", "Ã˜Â§Ã™â€žÃ™Ë†Ã˜Â¬Ã™â€¡Ã˜Â© Ã˜Â§Ã™â€žÃ˜ÂªÃ˜Â§Ã™â€žÃ™Å Ã˜Â© Ã˜Â¬Ã˜Â§Ã™â€¡Ã˜Â²Ã˜Â©"]
    ],
    people: [
      ["Ã˜Â±Ã™Ë†Ã˜Â§Ã˜Â¯ Ã˜Â§Ã™â€žÃ˜Â£Ã˜Â¹Ã™â€¦Ã˜Â§Ã™â€ž Ã˜Â§Ã™â€žÃ˜Â¯Ã™Ë†Ã™â€žÃ™Å Ã™Ë†Ã™â€ ", "Ã˜Â§Ã˜Â¨Ã™â€š Ã˜Â¹Ã™â€žÃ™â€° Ã˜Â§Ã˜ÂªÃ˜ÂµÃ˜Â§Ã™â€ž Ã˜Â¨Ã™Å Ã™â€  Ã˜Â§Ã™â€žÃ˜Â§Ã˜Â¬Ã˜ÂªÃ™â€¦Ã˜Â§Ã˜Â¹Ã˜Â§Ã˜Âª Ã™Ë†Ã˜Â§Ã™â€žÃ™â€¦Ã˜Â·Ã˜Â§Ã˜Â±Ã˜Â§Ã˜Âª Ã™Ë†Ã˜Â§Ã™â€žÃ˜Â¯Ã™Ë†Ã™â€ž."],
      ["Ã˜Â§Ã™â€žÃ˜Â¹Ã˜Â§Ã™â€¦Ã™â€žÃ™Ë†Ã™â€  Ã˜Â¹Ã™â€  Ã˜Â¨Ã™ÂÃ˜Â¹Ã˜Â¯", "Ã˜Â­Ã˜Â³Ã˜Â§Ã˜Â¨ Ã™Ë†Ã˜Â§Ã˜Â­Ã˜Â¯ Ã™â€žÃ™â€žÃ˜Â¹Ã™â€¦Ã™â€ž Ã™Ë†Ã˜Â§Ã™â€žÃ˜Â³Ã™ÂÃ˜Â± Ã™Ë†Ã˜Â§Ã™â€žÃ˜Â¥Ã™â€ Ã˜ÂªÃ˜Â±Ã™â€ Ã˜Âª Ã˜Â§Ã™â€žÃ™â€¦Ã˜ÂªÃ™â€ Ã™â€šÃ™â€ž Ã˜Â§Ã™â€žÃ™Å Ã™Ë†Ã™â€¦Ã™Å ."],
      ["Ã˜Â§Ã™â€žÃ˜Â¹Ã˜Â§Ã˜Â¦Ã™â€žÃ˜Â§Ã˜Âª Ã˜Â§Ã™â€žÃ˜Â¹Ã˜Â§Ã™â€žÃ™â€¦Ã™Å Ã˜Â©", "Ã˜Â§Ã˜ÂªÃ˜ÂµÃ˜Â§Ã™â€ž Ã˜Â¨Ã˜Â³Ã™Å Ã˜Â· Ã™â€žÃ™â€žÃ˜Â£Ã˜Â´Ã˜Â®Ã˜Â§Ã˜Âµ Ã˜Â§Ã™â€žÃ˜Â°Ã™Å Ã™â€  Ã™Å Ã˜Â¹Ã™Å Ã˜Â´Ã™Ë†Ã™â€  Ã˜Â¨Ã™Å Ã™â€  Ã˜Â¯Ã™Ë†Ã™â€ž Ã™â€¦Ã˜Â®Ã˜ÂªÃ™â€žÃ™ÂÃ˜Â©."]
    ],
    securityItems: ["Ã˜Â§Ã™â€žÃ˜ÂªÃ˜Â­Ã™â€šÃ™â€š Ã™â€¦Ã™â€  Ã˜Â§Ã™â€žÃ™â€¡Ã™Ë†Ã™Å Ã˜Â©", "Ã˜Â¯Ã™ÂÃ˜Â¹ Ã˜Â¢Ã™â€¦Ã™â€ ", "Ã˜Â­Ã˜Â³Ã˜Â§Ã˜Â¨ Ã™â€¦Ã˜Â­Ã™â€¦Ã™Å ", "Ã˜Â¶Ã™Ë†Ã˜Â§Ã˜Â¨Ã˜Â· Ã˜Â§Ã™â€žÃ˜Â®Ã˜ÂµÃ™Ë†Ã˜ÂµÃ™Å Ã˜Â©"],
    comparison: {
      oldTitle: "Ã™â€¦Ã˜Â´Ã˜ÂºÃ™â€ž Ã˜ÂªÃ™â€šÃ™â€žÃ™Å Ã˜Â¯Ã™Å ",
      newTitle: "Invisible Mobile",
      old: ["Ã˜ÂªÃ˜Â¹Ã™â€šÃ™Å Ã˜Â¯Ã˜Â§Ã˜Âª Ã˜Â§Ã™â€žÃ˜Â´Ã˜Â±Ã™Å Ã˜Â­Ã˜Â© Ã˜Â§Ã™â€žÃ˜ÂªÃ™â€šÃ™â€žÃ™Å Ã˜Â¯Ã™Å Ã˜Â©", "Ã™â€šÃ™Ë†Ã˜Â§Ã˜Â¹Ã˜Â¯ Ã˜Â§Ã™â€žÃ˜ÂªÃ˜Â¬Ã™Ë†Ã˜Â§Ã™â€ž", "Ã˜Â§Ã™â€ Ã˜ÂªÃ˜Â¸Ã˜Â§Ã˜Â± Ã˜Â§Ã™â€žÃ˜Â¯Ã˜Â¹Ã™â€¦", "Ã˜Â¨Ã˜Â§Ã™â€šÃ˜Â§Ã˜Âª Ã™â€¦Ã˜Â¹Ã™â€šÃ˜Â¯Ã˜Â©"],
      next: ["Ã˜Â´Ã˜Â±Ã™Å Ã˜Â­Ã˜Â© eSIM Ã™Ë†Ã˜Â§Ã˜Â­Ã˜Â¯Ã˜Â©", "Ã™â€¦Ã˜Â³Ã˜Â§Ã˜Â¹Ã˜Â¯Ã˜Â© Ã˜Â¨Ã˜Â§Ã™â€žÃ˜Â°Ã™Æ’Ã˜Â§Ã˜Â¡ Ã˜Â§Ã™â€žÃ˜Â§Ã˜ÂµÃ˜Â·Ã™â€ Ã˜Â§Ã˜Â¹Ã™Å ", "Ã˜Â¥Ã˜Â¬Ã˜Â±Ã˜Â§Ã˜Â¡Ã˜Â§Ã˜Âª Ã˜Â¨Ã˜Â³Ã™Å Ã˜Â·Ã˜Â©", "Ã˜Â­Ã˜Â³Ã˜Â§Ã˜Â¨ Ã˜Â¹Ã˜Â§Ã™â€žÃ™â€¦Ã™Å "]
    },
    plans: [
      ["One", "Ã˜Â§Ã˜ÂªÃ˜ÂµÃ˜Â§Ã™â€ž Ã™â€¦Ã˜ÂªÃ™â€ Ã™â€šÃ™â€ž Ã˜Â£Ã˜Â³Ã˜Â§Ã˜Â³Ã™Å  Ã™â€žÃ™â€žÃ˜Â§Ã˜Â³Ã˜ÂªÃ˜Â®Ã˜Â¯Ã˜Â§Ã™â€¦ Ã˜Â§Ã™â€žÃ˜Â¹Ã˜Â§Ã™â€žÃ™â€¦Ã™Å  Ã˜Â§Ã™â€žÃ˜Â®Ã™ÂÃ™Å Ã™Â."],
      ["Global", "Ã™â€¦Ã˜ÂµÃ™â€¦Ã™â€¦ Ã™â€žÃ™â€žÃ™â€¦Ã˜Â³Ã˜ÂªÃ˜Â®Ã˜Â¯Ã™â€¦Ã™Å Ã™â€  Ã˜Â§Ã™â€žÃ˜Â¯Ã™Ë†Ã™â€žÃ™Å Ã™Å Ã™â€  Ã™Ë†Ã˜Â§Ã™â€žÃ™â€¦Ã˜Â³Ã˜Â§Ã™ÂÃ˜Â±Ã™Å Ã™â€  Ã˜Â¨Ã˜Â´Ã™Æ’Ã™â€ž Ã™â€¦Ã™â€ Ã˜ÂªÃ˜Â¸Ã™â€¦."],
      ["Ultra", "Ã™â€žÃ™â€žÃ˜Â§Ã˜Â³Ã˜ÂªÃ˜Â®Ã˜Â¯Ã˜Â§Ã™â€¦ Ã˜Â§Ã™â€žÃ™â€¦Ã™Æ’Ã˜Â«Ã™Â Ã™Ë†Ã˜Â§Ã™â€žÃ˜Â¹Ã™â€¦Ã™â€ž Ã˜Â¹Ã™â€  Ã˜Â¨Ã™ÂÃ˜Â¹Ã˜Â¯ Ã™Ë†Ã˜Â§Ã™â€žÃ˜ÂªÃ™â€ Ã™â€šÃ™â€ž Ã˜Â§Ã™â€žÃ™â€¦Ã˜ÂªÃ™Æ’Ã˜Â±Ã˜Â±."]
    ],
    faq: [
      ["Ã™â€¡Ã™â€ž Invisible Mobile Ã™â€¦Ã˜Â´Ã˜ÂºÃ™â€ž Ã˜Â§Ã˜ÂªÃ˜ÂµÃ˜Â§Ã™â€žÃ˜Â§Ã˜Âª Ã˜ÂªÃ™â€šÃ™â€žÃ™Å Ã˜Â¯Ã™Å Ã˜Å¸", "Ã˜ÂªÃ™â€¦ Ã˜ÂªÃ˜ÂµÃ™â€¦Ã™Å Ã™â€¦Ã™â€¡ Ã™Æ’Ã™â€¦Ã™â€ Ã˜ÂµÃ˜Â© Ã˜Â§Ã˜ÂªÃ˜ÂµÃ˜Â§Ã™â€ž Ã™â€¦Ã˜ÂªÃ™â€ Ã™â€šÃ™â€ž Ã˜ÂªÃ˜Â¹Ã˜ÂªÃ™â€¦Ã˜Â¯ Ã˜Â¹Ã™â€žÃ™â€° Ã˜Â§Ã™â€žÃ˜Â°Ã™Æ’Ã˜Â§Ã˜Â¡ Ã˜Â§Ã™â€žÃ˜Â§Ã˜ÂµÃ˜Â·Ã™â€ Ã˜Â§Ã˜Â¹Ã™Å  Ã™Ë†Ã˜ÂªÃ˜Â¹Ã™â€¦Ã™â€ž Ã™â€¦Ã™â€  Ã˜Â®Ã™â€žÃ˜Â§Ã™â€ž Ã˜Â´Ã˜Â±Ã™Æ’Ã˜Â§Ã˜Â¡ Ã˜Â§Ã™â€žÃ˜Â¨Ã™â€ Ã™Å Ã˜Â© Ã˜Â§Ã™â€žÃ˜ÂªÃ˜Â­Ã˜ÂªÃ™Å Ã˜Â© Ã™â€žÃ˜Â´Ã˜Â¨Ã™Æ’Ã˜Â§Ã˜Âª eSIM."],
      ["Ã™â€¡Ã™â€ž Ã˜Â³Ã™Å Ã˜Â­Ã˜ÂªÃ˜Â§Ã˜Â¬ Ã˜Â§Ã™â€žÃ™â€¦Ã˜Â³Ã˜ÂªÃ˜Â®Ã˜Â¯Ã™â€¦Ã™Ë†Ã™â€  Ã˜Â¥Ã™â€žÃ™â€° Ã˜Â´Ã˜Â±Ã™Å Ã˜Â­Ã˜Â© SIM Ã™ÂÃ˜Â¹Ã™â€žÃ™Å Ã˜Â©Ã˜Å¸", "Ã™â€žÃ˜Â§. Ã˜ÂªÃ˜Â¹Ã˜ÂªÃ™â€¦Ã˜Â¯ Ã˜Â±Ã˜Â¤Ã™Å Ã˜Â© Ã˜Â§Ã™â€žÃ™â€¦Ã™â€ Ã˜ÂªÃ˜Â¬ Ã˜Â¹Ã™â€žÃ™â€° Ã˜Â§Ã™â€žÃ˜ÂªÃ™ÂÃ˜Â¹Ã™Å Ã™â€ž Ã˜Â§Ã™â€žÃ˜Â±Ã™â€šÃ™â€¦Ã™Å  Ã™â€žÃ˜Â´Ã˜Â±Ã™Å Ã˜Â­Ã˜Â© eSIM Ã˜Â¹Ã™â€žÃ™â€° Ã˜Â§Ã™â€žÃ˜Â£Ã˜Â¬Ã™â€¡Ã˜Â²Ã˜Â© Ã˜Â§Ã™â€žÃ™â€¦Ã˜ÂªÃ™Ë†Ã˜Â§Ã™ÂÃ™â€šÃ˜Â©."],
      ["Ã™â€¡Ã™â€ž Ã˜Â³Ã˜ÂªÃ˜Â¹Ã™â€¦Ã™â€ž Ã˜Â´Ã˜Â±Ã™Å Ã˜Â­Ã˜Â© eSIM Ã™Ë†Ã˜Â§Ã˜Â­Ã˜Â¯Ã˜Â© Ã™ÂÃ™Å  Ã™Æ’Ã™â€ž Ã™â€¦Ã™Æ’Ã˜Â§Ã™â€ Ã˜Å¸", "Ã˜Â§Ã™â€žÃ™â€¡Ã˜Â¯Ã™Â Ã™â€¡Ã™Ë† Ã˜ÂªÃ™Ë†Ã™ÂÃ™Å Ã˜Â± Ã˜Â´Ã˜Â±Ã™Å Ã˜Â­Ã˜Â© eSIM Ã˜Â¯Ã˜Â§Ã˜Â¦Ã™â€¦Ã˜Â© Ã™ÂÃ™Å  Ã˜Â§Ã™â€žÃ™Ë†Ã˜Â¬Ã™â€¡Ã˜Â§Ã˜Âª Ã˜Â§Ã™â€žÃ™â€¦Ã˜Â¯Ã˜Â¹Ã™Ë†Ã™â€¦Ã˜Â©Ã˜Å’ Ã™Ë†Ã™ÂÃ™â€šÃ˜Â§Ã™â€¹ Ã™â€žÃ™â€šÃ˜Â¯Ã˜Â±Ã˜Â§Ã˜Âª Ã˜Â§Ã™â€žÃ˜Â´Ã˜Â±Ã™Æ’Ã˜Â§Ã˜Â¡."],
      ["Ã™â€¡Ã™â€ž Ã˜Â§Ã™â€žÃ˜Â£Ã˜Â³Ã˜Â¹Ã˜Â§Ã˜Â± Ã™â€ Ã™â€¡Ã˜Â§Ã˜Â¦Ã™Å Ã˜Â©Ã˜Å¸", "Ã™â€žÃ˜Â§. Ã˜Â³Ã™Å Ã˜ÂªÃ™â€¦ Ã˜ÂªÃ˜Â£Ã™Æ’Ã™Å Ã˜Â¯ Ã˜Â§Ã™â€žÃ˜Â£Ã˜Â³Ã˜Â¹Ã˜Â§Ã˜Â± Ã˜Â§Ã™â€žÃ™â€ Ã™â€¡Ã˜Â§Ã˜Â¦Ã™Å Ã˜Â© Ã˜Â¨Ã˜Â¹Ã˜Â¯ Ã˜Â§Ã™â€žÃ˜ÂªÃ˜Â­Ã™â€šÃ™â€š Ã™â€¦Ã™â€  Ã˜ÂªÃ™Æ’Ã˜Â§Ã™â€žÃ™Å Ã™Â Ã˜Â¨Ã™Å Ã˜Â§Ã™â€ Ã˜Â§Ã˜Âª Ã˜Â§Ã™â€žÃ˜Â¨Ã™Å Ã˜Â¹ Ã˜Â¨Ã˜Â§Ã™â€žÃ˜Â¬Ã™â€¦Ã™â€žÃ˜Â© Ã™Ë†Ã˜Â´Ã˜Â±Ã™Ë†Ã˜Â· Ã˜Â§Ã™â€žÃ˜Â´Ã˜Â±Ã™Æ’Ã˜Â§Ã˜Â¡."]
    ],
    footer: {
      description: "Ã™â€¦Ã™â€ Ã˜ÂµÃ˜Â© Ã˜Â¹Ã˜Â§Ã™â€žÃ™â€¦Ã™Å Ã˜Â© Ã™â€žÃ™â€žÃ˜Â§Ã˜ÂªÃ˜ÂµÃ˜Â§Ã™â€ž Ã˜Â§Ã™â€žÃ™â€¦Ã˜ÂªÃ™â€ Ã™â€šÃ™â€ž Ã™â€¦Ã˜Â¯Ã˜Â¹Ã™Ë†Ã™â€¦Ã˜Â© Ã˜Â¨Ã˜Â§Ã™â€žÃ˜Â°Ã™Æ’Ã˜Â§Ã˜Â¡ Ã˜Â§Ã™â€žÃ˜Â§Ã˜ÂµÃ˜Â·Ã™â€ Ã˜Â§Ã˜Â¹Ã™Å .",
      columns: [
        ["Ã˜Â§Ã™â€žÃ™â€¦Ã™â€ Ã˜ÂªÃ˜Â¬", "Ã˜Â§Ã™â€žÃ™â€¦Ã™â€ Ã˜ÂµÃ˜Â©", "Ã™â€¦Ã˜Â´Ã˜ÂºÃ™â€ž Ã˜Â§Ã™â€žÃ˜Â°Ã™Æ’Ã˜Â§Ã˜Â¡ Ã˜Â§Ã™â€žÃ˜Â§Ã˜ÂµÃ˜Â·Ã™â€ Ã˜Â§Ã˜Â¹Ã™Å ", "Ã˜Â§Ã™â€žÃ˜ÂªÃ˜Â·Ã˜Â¨Ã™Å Ã™â€š", "Ã˜Â§Ã™â€žÃ˜ÂªÃ˜ÂºÃ˜Â·Ã™Å Ã˜Â©"],
        ["Ã˜Â§Ã™â€žÃ˜Â´Ã˜Â±Ã™Æ’Ã˜Â©", "Ã™â€¦Ã™â€  Ã™â€ Ã˜Â­Ã™â€ ", "Ã˜Â§Ã™â€žÃ˜Â´Ã˜Â±Ã™Æ’Ã˜Â§Ã˜Â¡", "Ã˜Â§Ã™â€žÃ˜ÂµÃ˜Â­Ã˜Â§Ã™ÂÃ˜Â©", "Ã˜Â§Ã˜ÂªÃ˜ÂµÃ™â€ž Ã˜Â¨Ã™â€ Ã˜Â§"],
        ["Ã™â€šÃ˜Â§Ã™â€ Ã™Ë†Ã™â€ Ã™Å ", "Ã˜Â§Ã™â€žÃ˜Â®Ã˜ÂµÃ™Ë†Ã˜ÂµÃ™Å Ã˜Â©", "Ã˜Â§Ã™â€žÃ˜Â´Ã˜Â±Ã™Ë†Ã˜Â·", "Ã˜Â§Ã™â€žÃ˜Â£Ã™â€¦Ã˜Â§Ã™â€ ", "Ã™â€¦Ã™â€žÃ™ÂÃ˜Â§Ã˜Âª Ã˜ÂªÃ˜Â¹Ã˜Â±Ã™Å Ã™Â Ã˜Â§Ã™â€žÃ˜Â§Ã˜Â±Ã˜ÂªÃ˜Â¨Ã˜Â§Ã˜Â·"]
      ]
    }
  },  it: {
    ...en,
    nav: ["Piattaforma", "IA", "App", "Copertura", "Sicurezza", "Prezzi", "FAQ"],
    heroKicker: "Operatore mobile globale basato sullÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢IA",
    heroTitle: "Una eSIM. Una IA. Connesso ovunque.",
    heroSubtitle: "Invisible Mobile ÃƒÆ’Ã‚Â¨ una piattaforma mobile di nuova generazione in cui gli utenti installano una eSIM una sola volta e lasciano che lÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢IA gestisca connettivitÃƒÆ’Ã‚Â , viaggi, utilizzo, assistenza e operazioni dellÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢account.",
    primaryCta: "Richiedi accesso anticipato",
    secondaryCta: "Guarda lÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢esperienza",
    heroStats: ["184 paesi disponibili", "Attivazione in 60 secondi", "Assistenza IA 24/7"],
    phoneDataLabel: "DATI GLOBALI",
    phoneNetworkText: "Connesso alle reti supportate",
    phoneAiLabel: "IA INVISIBILE",
    phoneAiText: "La tua connettivitÃƒÆ’Ã‚Â  ÃƒÆ’Ã‚Â¨ pronta. Nulla da configurare.",
    chipNetworkLabel: "Rete",
    chipNetworkValue: "5G pronto",
    chipAiLabel: "Azione IA",
    chipAiValue: "Configurazione automatica",
    marquee: "UNA ESIM Ãƒâ€šÃ‚Â· UN ACCOUNT Ãƒâ€šÃ‚Â· OPERATORE IA Ãƒâ€šÃ‚Â· CONNETTIVITÃƒÆ’Ã¢â€šÂ¬ GLOBALE Ãƒâ€šÃ‚Â· ATTIVAZIONE ISTANTANEA Ãƒâ€šÃ‚Â· ZERO COMPLESSITÃƒÆ’Ã¢â€šÂ¬ Ãƒâ€šÃ‚Â·",
    platformEyebrow: "Piattaforma",
    platformTitle: "Un operatore mobile progettato per diventare invisibile.",
    platformText: "Nessun acquisto paese per paese, nessun codice QR ripetuto e nessuna confusione sul roaming. Un unico account controlla lÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢intera esperienza di connettivitÃƒÆ’Ã‚Â .",
    aiEyebrow: "Operatore IA",
    aiTitle: "LÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢operatore diventa conversazionale.",
    aiText: "Gli utenti fanno domande semplici. LÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢IA controlla il contesto, spiega la copertura, prepara i viaggi, aiuta con la configurazione e guida le azioni successive.",
    appEyebrow: "Applicazione",
    appTitle: "UnÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢app mobile premium con pochissimi menu.",
    appText: "LÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢interfaccia si concentra su ciÃƒÆ’Ã‚Â² che conta: connessione, dati rimanenti, preparazione della destinazione e assistenza IA.",
    appReadyText: "Pronto ora.",
    coverageEyebrow: "MobilitÃƒÆ’Ã‚Â  globale",
    coverageTitle: "Creato per le persone che si muovono nel mondo.",
    coverageText: "Per viaggiatori, fondatori, studenti, lavoratori da remoto e team internazionali che hanno bisogno di internet mobile senza complicazioni.",
    securityEyebrow: "Sicurezza",
    securityTitle: "Sicurezza e fiducia fin dalla progettazione.",
    securityText: "IdentitÃƒÆ’Ã‚Â , pagamenti, accesso allÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢account e controlli di utilizzo sono progettati per essere protetti fin dallÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢inizio.",
    comparisonEyebrow: "Confronto",
    comparisonTitle: "La complessitÃƒÆ’Ã‚Â  delle telecomunicazioni tradizionali, eliminata.",
    pricingEyebrow: "Prezzi",
    pricingTitle: "Prezzi semplici dopo la validazione wholesale.",
    pricingNote: "Validazione wholesale richiesta",
    faqEyebrow: "FAQ",
    faqTitle: "Domande prima del lancio.",
    finalTitle: "Installa una volta. Vai ovunque.",
    finalText: "LÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢operatore mobile del futuro ÃƒÆ’Ã‚Â¨ semplice, intelligente e globale.",
    footerTagline: "ConnettivitÃƒÆ’Ã‚Â  mobile globale basata sullÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢IA.",
    cards: [
      ["eSIM persistente", "Installa una volta e mantieni lo stesso profilo mobile digitale."],
      ["Operatore IA", "Assistenza, configurazione e utilizzo diventano conversazionali."],
      ["Globale fin dallÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢inizio", "Progettato per la connettivitÃƒÆ’Ã‚Â  internazionale fin dal primo giorno."],
      ["Account intelligente", "Un unico spazio per piano, utilizzo, dispositivi, fatturazione e assistenza."],
      ["Attivazione rapida", "Progettato per un onboarding istantaneo e una distribuzione digitale."],
      ["Livello sicuro", "IdentitÃƒÆ’Ã‚Â , pagamenti e sicurezza dellÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢account integrati."]
    ],
    aiMessages: [
      ["Utente", "Domani volo in Giappone. Ho copertura?"],
      ["Invisible AI", "SÃƒÆ’Ã‚Â¬. La tua eSIM ÃƒÆ’Ã‚Â¨ pronta per le reti supportate. Non ÃƒÆ’Ã‚Â¨ necessario un nuovo codice QR."],
      ["Utente", "PerchÃƒÆ’Ã‚Â© la mia connessione ÃƒÆ’Ã‚Â¨ lenta?"],
      ["Invisible AI", "Ho controllato il tuo utilizzo e lo stato della rete. Posso guidarti verso la soluzione piÃƒÆ’Ã‚Â¹ rapida."]
    ],
    appCards: [
      ["Connesso", "eSIM globale attiva"],
      ["Dati", "42,8 GB disponibili"],
      ["Viaggio", "Prossima destinazione pronta"]
    ],
    people: [
      ["Fondatori internazionali", "Rimani connesso tra riunioni, aeroporti e paesi."],
      ["Lavoratori da remoto", "Un unico account per lavoro, viaggi e internet mobile quotidiano."],
      ["Famiglie globali", "ConnettivitÃƒÆ’Ã‚Â  semplice per le persone che vivono tra paesi diversi."]
    ],
    securityItems: ["Verifica dellÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢identitÃƒÆ’Ã‚Â ", "Pagamento sicuro", "Account protetto", "Controlli della privacy"],
    comparison: {
      oldTitle: "Operatore tradizionale",
      newTitle: "Invisible Mobile",
      old: ["Limiti della SIM fisica", "Regole di roaming", "Code dellÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢assistenza", "Piani complessi"],
      next: ["Una eSIM", "Assistenza IA", "Azioni semplici", "Account globale"]
    },
    plans: [
      ["One", "ConnettivitÃƒÆ’Ã‚Â  mobile essenziale per un utilizzo globale leggero."],
      ["Global", "Progettato per utenti internazionali e viaggiatori frequenti."],
      ["Ultra", "Per un utilizzo piÃƒÆ’Ã‚Â¹ intenso, lavoro da remoto e mobilitÃƒÆ’Ã‚Â  frequente."]
    ],
    faq: [
      ["Invisible Mobile ÃƒÆ’Ã‚Â¨ un operatore di telecomunicazioni tradizionale?", "ÃƒÆ’Ã‹â€  progettato come una piattaforma di connettivitÃƒÆ’Ã‚Â  mobile basata sullÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢IA e supportata da partner di infrastruttura eSIM."],
      ["Gli utenti avranno bisogno di una SIM fisica?", "No. La visione del prodotto si basa sullÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢attivazione digitale della eSIM per dispositivi compatibili."],
      ["Una sola eSIM funzionerÃƒÆ’Ã‚Â  ovunque?", "LÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢obiettivo ÃƒÆ’Ã‚Â¨ offrire una eSIM persistente nelle destinazioni supportate, in base alle capacitÃƒÆ’Ã‚Â  dei partner."],
      ["I prezzi sono definitivi?", "No. I prezzi finali saranno confermati dopo la validazione dei costi wholesale dei dati e delle condizioni dei partner."]
    ],
    footer: {
      description: "Piattaforma globale di connettivitÃƒÆ’Ã‚Â  mobile basata sullÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢IA.",
      columns: [
        ["Prodotto", "Piattaforma", "Operatore IA", "App", "Copertura"],
        ["Azienda", "Chi siamo", "Partner", "Stampa", "Contatti"],
        ["Legale", "Privacy", "Termini", "Sicurezza", "Cookie"]
      ]
    }
  },  pt: {
    ...en,
    nav: ["Plataforma", "IA", "App", "Cobertura", "SeguranÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§a", "PreÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§os", "FAQ"],
    heroKicker: "Operador mÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³vel global impulsionado por IA",
    heroTitle: "Um eSIM. Uma IA. Conectado em todos os lugares.",
    heroSubtitle: "Invisible Mobile ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â© uma plataforma mÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³vel de nova geraÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â£o onde os utilizadores instalam um eSIM uma ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Âºnica vez e deixam a IA gerir a conectividade, as viagens, a utilizaÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â£o, o suporte e as aÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Âµes da conta.",
    primaryCta: "Solicitar acesso antecipado",
    secondaryCta: "Ver a experiÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Âªncia",
    heroStats: ["184 paÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­ses disponÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­veis", "AtivaÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â£o em 60 segundos", "Suporte IA 24/7"],
    phoneDataLabel: "DADOS GLOBAIS",
    phoneNetworkText: "Conectado a redes compatÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­veis",
    phoneAiLabel: "IA INVISÃƒÆ’Ã†â€™Ãƒâ€šÃ‚ÂVEL",
    phoneAiText: "A sua conectividade estÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¡ pronta. Nada para configurar.",
    chipNetworkLabel: "Rede",
    chipNetworkValue: "5G pronto",
    chipAiLabel: "AÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â£o IA",
    chipAiValue: "ConfiguraÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â£o automÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¡tica",
    marquee: "UM ESIM ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â· UMA CONTA ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â· OPERADOR IA ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â· CONECTIVIDADE GLOBAL ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â· ATIVAÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢O INSTANTÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡NEA ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â· ZERO COMPLEXIDADE ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â·",
    platformEyebrow: "Plataforma",
    platformTitle: "Um operador mÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³vel concebido para parecer invisÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­vel.",
    platformText: "Sem compras paÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­s por paÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­s, sem cÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³digos QR repetidos e sem confusÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â£o com roaming. Uma ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Âºnica conta controla toda a experiÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Âªncia de conectividade.",
    aiEyebrow: "Operador IA",
    aiTitle: "O operador torna-se conversacional.",
    aiText: "Os utilizadores fazem perguntas simples. A IA verifica o contexto, explica a cobertura, prepara viagens, ajuda na configuraÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â£o e orienta as prÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³ximas aÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Âµes.",
    appEyebrow: "AplicaÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â£o",
    appTitle: "Uma aplicaÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â£o mÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³vel premium com quase nenhum menu.",
    appText: "A interface concentra-se no essencial: ligaÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â£o, dados restantes, preparaÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â£o do destino e assistÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Âªncia de IA.",
    appReadyText: "Pronto agora.",
    coverageEyebrow: "Mobilidade global",
    coverageTitle: "Criado para pessoas que se deslocam pelo mundo.",
    coverageText: "Para viajantes, fundadores, estudantes, trabalhadores remotos e equipas internacionais que precisam de internet mÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³vel sem complicaÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Âµes.",
    securityEyebrow: "SeguranÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§a",
    securityTitle: "SeguranÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§a e confianÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§a desde a conceÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â£o.",
    securityText: "A identidade, os pagamentos, o acesso ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â  conta e os controlos de utilizaÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â£o sÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â£o concebidos para estarem protegidos desde o inÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­cio.",
    comparisonEyebrow: "ComparaÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â£o",
    comparisonTitle: "A complexidade tradicional das telecomunicaÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Âµes, eliminada.",
    pricingEyebrow: "PreÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§os",
    pricingTitle: "PreÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§os simples apÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³s a validaÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â£o grossista.",
    pricingNote: "ValidaÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â£o grossista necessÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¡ria",
    faqEyebrow: "FAQ",
    faqTitle: "Perguntas antes do lanÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§amento.",
    finalTitle: "Instale uma vez. VÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¡ para qualquer lugar.",
    finalText: "O operador mÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³vel do futuro ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â© simples, inteligente e global.",
    footerTagline: "Conectividade mÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³vel global impulsionada por IA.",
    cards: [
      ["eSIM persistente", "Instale uma vez e mantenha o mesmo perfil mÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³vel digital."],
      ["Operador IA", "O suporte, a configuraÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â£o e a utilizaÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â£o tornam-se conversacionais."],
      ["Global desde o inÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­cio", "Concebido para conectividade internacional desde o primeiro dia."],
      ["Conta inteligente", "Um ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Âºnico espaÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§o para plano, utilizaÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â£o, dispositivos, faturaÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â£o e suporte."],
      ["AtivaÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â£o rÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¡pida", "Concebido para integraÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â£o instantÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢nea e entrega digital."],
      ["Camada segura", "Identidade, pagamentos e seguranÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§a da conta integrados."]
    ],
    aiMessages: [
      ["Utilizador", "Vou viajar para o JapÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â£o amanhÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â£. Tenho cobertura?"],
      ["Invisible AI", "Sim. O seu eSIM estÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¡ pronto para redes compatÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­veis. NÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â£o ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â© necessÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¡rio um novo cÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³digo QR."],
      ["Utilizador", "Porque ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â© que a minha ligaÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â£o estÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¡ lenta?"],
      ["Invisible AI", "Verifiquei a sua utilizaÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â£o e o estado da rede. Posso orientÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¡-lo para a soluÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â£o mais rÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¡pida."]
    ],
    appCards: [
      ["Conectado", "eSIM global ativo"],
      ["Dados", "42,8 GB disponÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­veis"],
      ["Viagem", "PrÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³ximo destino pronto"]
    ],
    people: [
      ["Fundadores internacionais", "Mantenha-se conectado entre reuniÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Âµes, aeroportos e paÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­ses."],
      ["Trabalhadores remotos", "Uma ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Âºnica conta para trabalho, viagens e internet mÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³vel diÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¡ria."],
      ["FamÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­lias globais", "Conectividade simples para pessoas que vivem entre diferentes paÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­ses."]
    ],
    securityItems: ["VerificaÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â£o de identidade", "Pagamento seguro", "Conta protegida", "Controlos de privacidade"],
    comparison: {
      oldTitle: "Operador tradicional",
      newTitle: "Invisible Mobile",
      old: ["LimitaÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Âµes do SIM fÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­sico", "Regras de roaming", "Filas de suporte", "Planos complexos"],
      next: ["Um eSIM", "AssistÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Âªncia IA", "AÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Âµes simples", "Conta global"]
    },
    plans: [
      ["One", "Conectividade mÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³vel essencial para utilizaÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â£o global moderada."],
      ["Global", "Concebido para utilizadores internacionais e viajantes frequentes."],
      ["Ultra", "Para utilizaÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â£o intensiva, trabalho remoto e mobilidade frequente."]
    ],
    faq: [
      ["O Invisible Mobile ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â© um operador de telecomunicaÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Âµes tradicional?", "Foi concebido como uma plataforma de conectividade mÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³vel centrada em IA e suportada por parceiros de infraestrutura eSIM."],
      ["Os utilizadores precisarÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â£o de um SIM fÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­sico?", "NÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â£o. A visÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â£o do produto baseia-se na ativaÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â£o digital de eSIM para dispositivos compatÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­veis."],
      ["Um ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Âºnico eSIM funcionarÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¡ em todos os lugares?", "O objetivo ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â© oferecer um eSIM persistente nos destinos compatÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­veis, dependendo das capacidades dos parceiros."],
      ["Os preÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§os sÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â£o definitivos?", "NÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â£o. Os preÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§os finais serÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â£o confirmados apÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³s a validaÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â£o dos custos grossistas de dados e das condiÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Âµes dos parceiros."]
    ],
    footer: {
      description: "Plataforma global de conectividade mÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³vel impulsionada por IA.",
      columns: [
        ["Produto", "Plataforma", "Operador IA", "App", "Cobertura"],
        ["Empresa", "Sobre nÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³s", "Parceiros", "Imprensa", "Contacto"],
        ["Legal", "Privacidade", "Termos", "SeguranÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§a", "Cookies"]
      ]
    }
  },  es: {
    ...en,
    nav: ["Plataforma", "IA", "App", "Cobertura", "Seguridad", "Precios", "FAQ"],
    heroKicker: "Operador mÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â³vil global impulsado por IA",
    heroTitle: "Una eSIM. Una IA. Conectado en todas partes.",
    heroSubtitle: "Invisible Mobile es una plataforma mÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â³vil de nueva generaciÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â³n donde los usuarios instalan una eSIM una sola vez y dejan que la IA gestione la conectividad, los viajes, el uso, el soporte y las acciones de la cuenta.",
    primaryCta: "Solicitar acceso anticipado",
    secondaryCta: "Ver la experiencia",
    heroStats: ["184 paÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â­ses disponibles", "ActivaciÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â³n en 60 segundos", "Soporte IA 24/7"],
    phoneDataLabel: "DATOS GLOBALES",
    phoneNetworkText: "Conectado a redes compatibles",
    phoneAiLabel: "IA INVISIBLE",
    phoneAiText: "Tu conectividad estÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡ lista. Nada que configurar.",
    chipNetworkLabel: "Red",
    chipNetworkValue: "5G listo",
    chipAiLabel: "AcciÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â³n IA",
    chipAiValue: "ConfiguraciÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â³n automÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡tica",
    marquee: "UNA ESIM ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â· UNA CUENTA ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â· OPERADOR IA ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â· CONECTIVIDAD GLOBAL ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â· ACTIVACIÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã¢â‚¬Å“N INSTANTÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚ÂNEA ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â· CERO COMPLEJIDAD ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â·",
    platformEyebrow: "Plataforma",
    platformTitle: "Un operador mÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â³vil diseÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â±ado para sentirse invisible.",
    platformText: "Sin comprar paÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â­s por paÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â­s, sin repetir cÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â³digos QR y sin confusiÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â³n con el roaming. Una sola cuenta controla toda la experiencia de conectividad.",
    aiEyebrow: "Operador IA",
    aiTitle: "El operador se vuelve conversacional.",
    aiText: "Los usuarios hacen preguntas sencillas. La IA comprueba el contexto, explica la cobertura, prepara los viajes, ayuda con la configuraciÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â³n y guÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â­a las siguientes acciones.",
    appEyebrow: "AplicaciÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â³n",
    appTitle: "Una aplicaciÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â³n mÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â³vil premium con casi ningÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Âºn menÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Âº.",
    appText: "La interfaz se centra en lo esencial: conexiÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â³n, datos restantes, preparaciÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â³n del destino y asistencia de IA.",
    appReadyText: "Listo ahora.",
    coverageEyebrow: "Movilidad global",
    coverageTitle: "Creado para personas que se mueven por el mundo.",
    coverageText: "Para viajeros, fundadores, estudiantes, trabajadores remotos y equipos internacionales que necesitan internet mÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â³vil sin complicaciones.",
    securityEyebrow: "Seguridad",
    securityTitle: "Seguridad y confianza desde el diseÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â±o.",
    securityText: "La identidad, los pagos, el acceso a la cuenta y los controles de uso estÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡n diseÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â±ados para estar protegidos desde el principio.",
    comparisonEyebrow: "ComparaciÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â³n",
    comparisonTitle: "La complejidad tradicional de las telecomunicaciones, eliminada.",
    pricingEyebrow: "Precios",
    pricingTitle: "Precios sencillos despuÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©s de la validaciÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â³n mayorista.",
    pricingNote: "ValidaciÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â³n mayorista requerida",
    faqEyebrow: "FAQ",
    faqTitle: "Preguntas antes del lanzamiento.",
    finalTitle: "Instala una vez. Ve a cualquier lugar.",
    finalText: "El operador mÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â³vil del futuro es simple, inteligente y global.",
    footerTagline: "Conectividad mÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â³vil global impulsada por IA.",
    cards: [
      ["eSIM persistente", "InstÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡lala una vez y conserva el mismo perfil mÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â³vil digital."],
      ["Operador IA", "El soporte, la configuraciÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â³n y el uso se vuelven conversacionales."],
      ["Global desde el inicio", "DiseÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â±ado para la conectividad internacional desde el primer dÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â­a."],
      ["Cuenta inteligente", "Un solo lugar para el plan, el uso, los dispositivos, la facturaciÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â³n y el soporte."],
      ["ActivaciÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â³n rÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡pida", "DiseÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â±ado para una incorporaciÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â³n instantÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡nea y una entrega digital."],
      ["Capa segura", "Identidad, pagos y seguridad de la cuenta integrados."]
    ],
    aiMessages: [
      ["Usuario", "Vuelo a JapÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â³n maÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â±ana. ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¿Tengo cobertura?"],
      ["Invisible AI", "SÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â­. Tu eSIM estÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡ lista para las redes compatibles. No necesitas un nuevo cÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â³digo QR."],
      ["Usuario", "ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¿Por quÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â© mi conexiÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â³n es lenta?"],
      ["Invisible AI", "He comprobado tu uso y el estado de la red. Puedo guiarte hacia la soluciÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â³n mÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡s rÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡pida."]
    ],
    appCards: [
      ["Conectado", "eSIM global activa"],
      ["Datos", "42,8 GB disponibles"],
      ["Viaje", "PrÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â³ximo destino listo"]
    ],
    people: [
      ["Fundadores internacionales", "Mantente conectado entre reuniones, aeropuertos y paÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â­ses."],
      ["Trabajadores remotos", "Una sola cuenta para el trabajo, los viajes y el internet mÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â³vil diario."],
      ["Familias globales", "Conectividad sencilla para personas que viven entre diferentes paÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â­ses."]
    ],
    securityItems: ["VerificaciÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â³n de identidad", "Pago seguro", "Cuenta protegida", "Controles de privacidad"],
    comparison: {
      oldTitle: "Operador tradicional",
      newTitle: "Invisible Mobile",
      old: ["FricciÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â³n de la SIM fÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â­sica", "Reglas de roaming", "Colas de soporte", "Planes complejos"],
      next: ["Una eSIM", "Asistencia IA", "Acciones sencillas", "Cuenta global"]
    },
    plans: [
      ["One", "Conectividad mÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â³vil esencial para un uso global ligero."],
      ["Global", "DiseÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â±ado para usuarios internacionales y viajeros frecuentes."],
      ["Ultra", "Para un uso mÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡s intensivo, trabajo remoto y movilidad frecuente."]
    ],
    faq: [
      ["ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¿Invisible Mobile es un operador de telecomunicaciones clÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡sico?", "EstÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡ diseÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â±ado como una plataforma de conectividad mÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â³vil centrada en la IA e impulsada por socios de infraestructura eSIM."],
      ["ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¿Los usuarios necesitarÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡n una SIM fÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â­sica?", "No. La visiÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â³n del producto se basa en la activaciÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â³n digital de eSIM para dispositivos compatibles."],
      ["ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¿Una sola eSIM funcionarÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡ en todas partes?", "El objetivo es ofrecer una eSIM persistente en los destinos compatibles, segÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Âºn las capacidades de los socios."],
      ["ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¿Los precios son definitivos?", "No. Los precios finales deben confirmarse despuÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©s de validar los costes de datos mayoristas y las condiciones de los socios."]
    ],
    footer: {
      description: "Plataforma global de conectividad mÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â³vil impulsada por IA.",
      columns: [
        ["Producto", "Plataforma", "Operador IA", "App", "Cobertura"],
        ["Empresa", "Acerca de", "Socios", "Prensa", "Contacto"],
        ["Legal", "Privacidad", "Condiciones", "Seguridad", "Cookies"]
      ]
    }
  },  de: {
    ...en,
    nav: ["Plattform", "KI", "App", "Abdeckung", "Sicherheit", "Preise", "FAQ"],
    heroKicker: "KI-gestÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¼tzter globaler Mobilfunkanbieter",
    heroTitle: "Eine eSIM. Eine KI. ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â¦ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã¢â‚¬Å“berall verbunden.",
    heroSubtitle: "Invisible Mobile ist eine mobile Plattform der nÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¤chsten Generation, bei der Nutzer eine eSIM einmal installieren und die KI KonnektivitÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¤t, Reisen, Nutzung, Support und Kontoverwaltung ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¼bernimmt.",
    primaryCta: "FrÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¼hen Zugang anfragen",
    secondaryCta: "Erlebnis ansehen",
    heroStats: ["184 LÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¤nder bereit", "Aktivierung in 60 Sekunden", "KI-Support 24/7"],
    phoneDataLabel: "GLOBALE DATEN",
    phoneNetworkText: "Mit unterstÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¼tzten Netzwerken verbunden",
    phoneAiLabel: "INVISIBLE KI",
    phoneAiText: "Ihre Verbindung ist bereit. Nichts zu konfigurieren.",
    chipNetworkLabel: "Netzwerk",
    chipNetworkValue: "5G bereit",
    chipAiLabel: "KI-Aktion",
    chipAiValue: "Automatische Einrichtung",
    marquee: "EINE ESIM ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â· EIN KONTO ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â· KI-OPERATOR ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â· GLOBALE KONNEKTIVITÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¾T ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â· SOFORTIGE AKTIVIERUNG ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â· NULL KOMPLEXITÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¾T ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â·",
    platformEyebrow: "Plattform",
    aiEyebrow: "KI-Operator",
    appEyebrow: "Anwendung",
    appReadyText: "Jetzt bereit.",
    coverageEyebrow: "Globale MobilitÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¤t",
    securityEyebrow: "Sicherheit",
    comparisonEyebrow: "Vergleich",
    pricingEyebrow: "Preise",
    pricingNote: "Wholesale-Validierung erforderlich",
    faqEyebrow: "FAQ",
    footerTagline: "KI-gestÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¼tzte globale mobile KonnektivitÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¤t.",
  },
} as const;
