import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        hero: "url('/images/bg.svg')",
        loki: "url('/images/loki.svg')",
        multiverse: "url('/images/multiverse.svg')",
        event_bg: "url('/images/background.svg')",
        card_border_bg: "url('/images/card-border.svg')",
        club_bg: "url('/images/club.png')",
        footer_bg:"url('/images/footer.svg')"
      },
      boxShadow: {
        xs: "1px 1px 0 0 rgba(250, 134, 27, 0.5)",
        md: "3px 3px 0 0 rgba(250, 134, 27, 0.5)",
        "3xl": "10px 10px 0 0 rgba(250, 134, 27, 0.5)",
      },
      textShadow: {
        default: "2px 2px 4px rgba(0, 0, 0, 0.3)",
        md: "4px 4px 8px rgba(0, 0, 0, 0.3)",
        lg: "6px 6px 12px rgba(0, 0, 0, 0.3)",
      },
      letterSpacing: {
        widest: ".25em",
      },
    },
  },
  plugins: [
    require("tailwindcss-animated"),
    require("tailwindcss-motion"),
    require("tailwindcss-intersect"),
    require("tailwindcss-textshadow"),
  ],
} satisfies Config;
