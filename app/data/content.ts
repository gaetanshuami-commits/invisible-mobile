export type Lang = "en" | "fr";

export const languages = [
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
] as const;

export const content = {
  en: {
    nav: ["Platform", "AI Operator", "App", "Coverage", "Security", "Pricing", "FAQ"],
    heroTitle: "The global mobile operator powered by AI.",
    heroSubtitle: "One eSIM. One subscription. One intelligent operator. Invisible Mobile removes roaming, setup, support and data-management friction.",
    primaryCta: "Request early access",
    secondaryCta: "Explore platform",
  },
  fr: {
    nav: ["Plateforme", "Opérateur IA", "Application", "Couverture", "Sécurité", "Prix", "FAQ"],
    heroTitle: "L’opérateur mobile mondial piloté par IA.",
    heroSubtitle: "Une eSIM. Un abonnement. Un opérateur intelligent. Invisible Mobile supprime la complexité du roaming, de la configuration, du support et de la gestion data.",
    primaryCta: "Demander un accès",
    secondaryCta: "Voir la plateforme",
  },
} as const;
