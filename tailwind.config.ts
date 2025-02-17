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
        'UP-COLOR': '#05599d',
        'UP-COLOR2': '#0066b2',
        'UP-COLOR3' : '#00528f',
        'UP-COLOR4' : '#e8ebfa',
        'UP-COLOR-LINK' : '#3683BA',
        'UP-COLOR-WARN' : '#D37325'
      }
    },
  },
  plugins: [],
} satisfies Config;
