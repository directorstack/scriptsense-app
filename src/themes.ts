
// themes.ts

export type Theme = {
  name: string;
  description: string;
  background: string;
  text: string;
  accent: string;
  fontFamily: string;
};

export const themes: Record<string, Theme> = {
  modern: {
    name: "Modern Minimal",
    description: "Clean lines, bold typography, gradient accents",
    background: "#F9FFFB",
    text: "#111111",
    accent: "linear-gradient(90deg, #00C6FF 0%, #0072FF 100%)",
    fontFamily: "'Inter', sans-serif",
  },
  cinematic: {
    name: "Cinematic Dark",
    description: "Dark theme, film-inspired, dramatic visuals",
    background: "#0A0E1B",
    text: "#FFFFFF",
    accent: "#FF3C38",
    fontFamily: "'DM Sans', sans-serif",
  },
  classic: {
    name: "Classic Elegant",
    description: "Timeless design, sophisticated typography",
    background: "#FFFCEB",
    text: "#1C1C1C",
    accent: "#FFC857",
    fontFamily: "'Playfair Display', serif",
  },
};
