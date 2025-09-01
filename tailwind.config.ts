import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Brand colors для Конфедерації
        brand: {
          blue: '#6BB5FF',
          indigo: '#6A6FFF',
          yellow: '#FFE88A',
          darkBlue: '#10305F',
          darkIndigo: '#1A2166',
          darkYellow: '#7A5B00'
        },
        // Кольори тексту (замість чорного)
        text: {
          light: {
            primary: '#0F172A',   // ≈ slate-900 (заголовки)
            body: '#1F2937',      // ≈ slate-800 (абзаци)
            secondary: '#475569'  // ≈ slate-600 (другорядний текст)
          },
          dark: {
            primary: '#F1F5F9',   // ≈ slate-100
            body: '#E2E8F0',      // ≈ slate-200
            secondary: '#CBD5E1'  // ≈ slate-300
          }
        }
      },
      backgroundImage: {
        // Градієнти для хедера
        'header-light': 'linear-gradient(90deg, #6BB5FF 0%, #6A6FFF 50%, #FFE88A 100%)',
        'header-dark': 'linear-gradient(90deg, #10305F 0%, #1A2166 50%, #7A5B00 100%)',
        // Градієнти для фону сторінки
        'page-light': 'linear-gradient(180deg, #F1F7FF 0%, #FAF9F2 100%)',
        'page-dark': 'linear-gradient(180deg, #0B1220 0%, #0F172A 100%)',
        // Градієнти для футера
        'footer-light': 'linear-gradient(90deg, #6BB5FF 0%, #89C7FF 40%, #FFE88A 100%)',
        'footer-dark': 'linear-gradient(90deg, #0D2447 0%, #1A2166 40%, #7A5B00 100%)'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif']
      },
      dropShadow: {
        'text': '0 1px 0 rgba(0, 0, 0, 0.1)',
        'text-strong': '0 2px 4px rgba(0, 0, 0, 0.15)'
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
