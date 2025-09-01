/**
 * Дизайн-токени для сайту Конфедерації організацій інвалідів України
 * Централізоване управління кольорами, шрифтами, розмірами та іншими візуальними елементами
 */

export const designTokens = {
  // Шрифти
  fonts: {
    primary: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
    weights: {
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    }
  },

  // Типографічна шкала
  typography: {
    h1: {
      size: { base: '40px', lg: '48px' },
      weight: 'extrabold',
      leading: 'tight',
      tracking: 'tight'
    },
    h2: {
      size: { base: '28px', lg: '32px' },
      weight: 'bold', 
      leading: 'snug'
    },
    h3: {
      size: { base: '22px', lg: '24px' },
      weight: 'semibold',
      leading: 'normal'
    },
    body: {
      size: '18px', // мінімум
      weight: 'medium',
      leading: '1.7'
    },
    small: {
      size: { base: '15px', lg: '16px' },
      weight: 'medium',
      leading: 'normal'
    }
  },

  // Кольорова палітра
  colors: {
    // Brand colors
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
    },

    // Кольори для інтерфейсу
    interface: {
      light: {
        background: '#FFFFFF',
        surface: '#F8FAFC',
        border: '#E2E8F0',
        hover: '#F1F5F9'
      },
      dark: {
        background: '#0F172A',
        surface: '#1E293B',
        border: '#334155', 
        hover: '#475569'
      }
    }
  },

  // Градієнти
  gradients: {
    header: {
      light: 'linear-gradient(90deg, #6BB5FF 0%, #6A6FFF 50%, #FFE88A 100%)',
      dark: 'linear-gradient(90deg, #10305F 0%, #1A2166 50%, #7A5B00 100%)'
    },
    page: {
      light: 'linear-gradient(180deg, #F1F7FF 0%, #FAF9F2 100%)',
      dark: 'linear-gradient(180deg, #0B1220 0%, #0F172A 100%)'
    },
    footer: {
      light: 'linear-gradient(90deg, #6BB5FF 0%, #89C7FF 40%, #FFE88A 100%)',
      dark: 'linear-gradient(90deg, #0D2447 0%, #1A2166 40%, #7A5B00 100%)'
    }
  },

  // Відступи та розміри
  spacing: {
    container: {
      maxWidth: '1320px',
      padding: '5.5vw'
    },
    header: {
      paddingX: '7vw',
      paddingY: '3.5rem' // 56px
    },
    footer: {
      paddingX: '5.5vw',
      paddingY: '2.5rem' // 40px
    },
    section: {
      paddingY: { base: '2rem', md: '3rem' }
    }
  },

  // Тіні
  shadows: {
    card: '0 10px 30px rgba(2, 12, 27, 0.06)',
    cardHover: '0 20px 40px rgba(2, 12, 27, 0.12)',
    header: '0 1px 0 rgba(0, 0, 0, 0.1)'
  },

  // Радіуси
  borderRadius: {
    card: '1rem',      // 16px
    button: '0.5rem',  // 8px
    pill: '9999px'     // повністю скруглений
  },

  // Переходи
  transitions: {
    default: '300ms ease-in-out',
    fast: '150ms ease-in-out',
    slow: '500ms ease-in-out'
  },

  // Розміри компонентів
  components: {
    themeToggle: {
      width: '3.5rem',   // 56px ≈ 64px з padding
      height: '1.75rem', // 28px ≈ 30px з padding
      circle: '1.5rem'   // 24px
    },
    logo: {
      desktop: '5rem',   // 80px (збільшено на 30% від базових 60px)
      mobile: '4.5rem'   // 72px
    }
  },

  // Точки зламу (breakpoints) - для довідки
  breakpoints: {
    sm: '640px',
    md: '768px', 
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
  },

  // Z-індекси
  zIndex: {
    header: 40,
    sidebar: 30,
    modal: 50,
    dropdown: 45,
    themeToggle: 45
  }
} as const;

// Типи для TypeScript
export type DesignTokens = typeof designTokens;
export type ColorTheme = 'light' | 'dark';
export type BrandColor = keyof typeof designTokens.colors.brand;
export type TextColor = keyof typeof designTokens.colors.text.light;