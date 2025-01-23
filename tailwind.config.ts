import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBG: '#171717',
        lightBG: '#262626',
        lightGreen: '#22C55E',
        buttonBGDark: '#16A34A',
        buttonBGLight: '#DCFCE7',
        borderLight: '#6b6b6b',
      },
      gridTemplateColumns: {
        // Optional if you want auto-fit behavior, not needed for basic grid classes
        'auto': 'repeat(auto-fit, minmax(200px, 1fr))',
      },
    },
  },
  plugins: [],
} satisfies Config;
