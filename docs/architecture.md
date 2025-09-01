# Архітектура проекту: Конфедерація організацій осіб з інвалідністю України

## Огляд проекту

Сучасний веб-сайт для Всеукраїнської спілки громадських організацій «Конфедерація громадських організацій людей з інвалідністю України», побудований на React з TypeScript та Tailwind CSS. Проект трансформований з WishBoard додатка в повноцінний інформаційний ресурс з підтримкою світлої та темної тем, повною українською локалізацією та дотриманням стандартів доступності WCAG AA+.

## 1. Технологічний стек

### Frontend Framework
- **React 18** з TypeScript
- **Vite** для швидкої розробки та збірки
- **Wouter** для клієнтського роутингу
- **TanStack React Query** для управління серверним станом

### UI Framework & Стилізація
- **Tailwind CSS** як основний CSS framework
- **shadcn/ui** компоненти на базі Radix UI
- **Lucide React** для іконок
- **Framer Motion** для анімацій
- **next-themes** для управління темами

### Backend & База даних
- **Node.js** з Express.js framework
- **TypeScript** з ES modules
- **PostgreSQL** з Neon serverless driver
- **Drizzle ORM** для типобезпечних операцій з БД
- **Multer** для завантаження файлів
- **Express sessions** з PostgreSQL store (connect-pg-simple)
- **TSX** для TypeScript виконання та hot reloading

### Додаткові бібліотеки
- **React Hook Form** з Zod валідацією
- **Date-fns** для роботи з датами
- **@hookform/resolvers** для інтеграції з валідацією
- **Class Variance Authority** для варіантів компонентів

## 2. Структура проєкту

```
client/src/
  components/
    Header.tsx         # Хедер з лого, градієнтом, централізованим текстом
    NavigationSidebar.tsx  # Акордеони навігації
    MainContent.tsx    # Основний контент
    Footer.tsx         # Футер на градієнті з високим контрастом
    ThemeToggle.tsx    # Компактний перемикач теми (pill ~64×30px)
  pages/
    Index.tsx          # Головна сторінка
  lib/
    tokens.ts          # Дизайн-токени (шрифти, розміри, кольори)
  i18n/
    uk.ts              # Тексти українською
  index.css            # Tailwind layers + базові змінні
docs/
  architecture.md      # Ця документація
```

## 3. Дизайн-система

### 3.1. Шрифти
- **Primary**: Inter (Google Fonts)
- **Ваги**: 500, 600, 700, 800, 900
- **Fallback**: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif

### 3.2. Типографічна шкала

| Елемент | Розмір (px) | Вага | Leading | Застосування |
|---------|-------------|------|---------|--------------|
| H1      | 40 (lg: 48) | extrabold | tight | Основний заголовок |
| H2      | 28 (lg: 32) | bold | snug | Підзаголовки |
| H3      | 22-24       | semibold | normal | Розділи |
| Body    | 18+         | medium | 7/8 | Основний текст |
| Small   | 15-16       | medium | normal | Дрібний текст |

### 3.3. Кольорова палітра

#### Brand Colors (Tailwind extend.colors.brand)
```typescript
brand: {
  blue: '#6BB5FF',
  indigo: '#6A6FFF', 
  yellow: '#FFE88A',
  darkBlue: '#10305F',
  darkIndigo: '#1A2166',
  darkYellow: '#7A5B00'
}
```

#### Text Colors
```typescript
text: {
  light: {
    primary: '#0F172A',  // ≈ slate-900 (заголовки)
    body: '#1F2937'      // ≈ slate-800 (абзаци)
  },
  dark: {
    primary: '#F1F5F9',  // ≈ slate-100
    body: '#E2E8F0'      // ≈ slate-200
  }
}
```

### 3.4. Градієнти (Tailwind extend.backgroundImage)

| Назва | Застосування | Значення |
|-------|--------------|----------|
| header-light | Хедер (світла тема) | `linear-gradient(90deg,#6BB5FF 0%,#6A6FFF 50%,#FFE88A 100%)` |
| header-dark | Хедер (темна тема) | `linear-gradient(90deg,#10305F 0%,#1A2166 50%,#7A5B00 100%)` |
| page-light | Фон сторінки (світла) | `linear-gradient(180deg,#F1F7FF 0%,#FAF9F2 100%)` |
| page-dark | Фон сторінки (темна) | `linear-gradient(180deg,#0B1220 0%,#0F172A 100%)` |
| footer-light | Футер (світла тема) | `linear-gradient(90deg,#6BB5FF 0%,#89C7FF 40%,#FFE88A 100%)` |
| footer-dark | Футер (темна тема) | `linear-gradient(90deg,#0D2447 0%,#1A2166 40%,#7A5B00 100%)` |

### 3.5. Відступи та сітка

- **Контейнер сторінки**: `max-w-[1320px]`, `margin: 0 auto`, `padding: 5.5vw` з боків
- **Картки**: `rounded-2xl`, `shadow-xl`, `p-6 md:p-8`
- **Хедер відступи**: `px-[7vw] py-14`
- **Футер відступи**: `px-[5.5vw] py-10`

### 3.6. Стани та анімації

- **Focus**: `focus-visible:ring-2 focus-visible:ring-offset-2`
- **Hover**: `transition-all duration-300`
- **Картки на hover**: `hover:-translate-y-0.5 hover:shadow-2xl`
- **Кнопки на hover**: `hover:scale-105`

## 4. Специфіка компонентів

### 4.1. Header
- **Макет**: Лого зліва (збільшене на 30%), заголовковий блок по центру
- **Текст**: Українською, вирівняний по центру
- **Кольори**: `text-slate-900/95` (light) / `text-slate-100` (dark)
- **Ефекти**: `drop-shadow-[0_1px_0_rgba(0,0,0,0.1)]` для читабельності
- **ThemeToggle**: Компактний pill (~64×30px), праворуч угорі

### 4.2. NavigationSidebar
- **Рівень 1** (головні розділи): `font-bold`, `text-sky-700` (light) / `text-slate-100` (dark)
- **Рівень 2** (підпункти): `font-medium`, `text-slate-700` (light) / `text-slate-300` (dark)
- **Активний стан**: `bg-sky-100 text-sky-900` (light) / `bg-sky-900/40 text-sky-100` (dark)
- **Відступи**: `px-3 py-2`, між групами `mt-3`

### 4.3. Контентні картки
- **Ширина**: `max-w-[72ch]`
- **Стилі**: `rounded-2xl shadow-xl p-6 md:p-8`
- **Текст**: `18px` (мінімум), `leading-7`
- **Кольори**: `text-slate-800` (light) / `text-slate-200` (dark)

### 4.4. Footer
- **Проблема читабельності**: Вирішена через комбінацію підходів:
  - Темні кольори тексту: `text-slate-900` (light) / `text-slate-100` (dark)
  - `backdrop-blur-sm` для текстових блоків
  - Розділювач: `border-t border-slate-800/30 dark:border-white/15`
- **Макет**: `grid md:grid-cols-3 gap-6`
- **Контраст**: Перевірено на всіх ділянках градієнта (AA+)

### 4.5. ThemeToggle
- **Розмір**: 64×30px (компактний pill)
- **Стилі**: `rounded-full bg-slate-200 dark:bg-slate-700`
- **Іконки**: Монохромні, `h-3 w-3`
- **Анімація**: `transition transform` для плавного переключення

## 5. Доступність (A11Y)

### 5.1. Семантика
- `lang="uk"` у `<html>`
- Правильні заголовки `h1`, `h2`, `h3`
- `role="banner"`, `role="main"`, `role="contentinfo"`

### 5.2. Клавіатурна навігація
- `focus-visible:ring-2 focus-visible:ring-offset-2` для всіх інтерактивних елементів
- `tabIndex={0}` для навігаційних посилань

### 5.3. ARIA
- `aria-expanded` / `aria-controls` для акордеонів
- `aria-label` для зовнішніх посилань та іконок
- `sr-only` класи для screen readers

### 5.4. Контраст
- **Заголовки**: WCAG AA+ (4.5:1+)
- **Основний текст**: WCAG AA+ (4.5:1+)
- **Футер**: Спеціально оптимізований для градієнтного фону

## 6. Інтернаціоналізація

### 6.1. Українська локалізація
- Заголовок: "ВСЕУКРАЇНСЬКА СПІЛКА ГРОМАДСЬКИХ ОРГАНІЗАЦІЙ"
- Підзаголовок: "«КОНФЕДЕРАЦІЯ ГРОМАДСЬКИХ ОРГАНІЗАЦІЙ ЛЮДЕЙ З ІНВАЛІДНІСТЮ УКРАЇНИ»"
- Повний переклад інтерфейсу в `i18n/uk.ts`

### 6.2. Мовні атрибути
- `lang="uk"` в HTML документі
- Правильне кодування UTF-8

## 7. Продуктивність

### 7.1. Оптимізація
- Vite для швидкої збірки
- TailwindCSS purging для мінімального розміру CSS
- Lazy loading для зображень

### 7.2. Кешування
- localStorage для збереження теми
- React Query для кешування API запитів

## 8. Acceptance Criteria

✅ **Хедер**: Заголовок по центру, сучасний колір замість чорного, лого збільшене на 30%
✅ **Футер**: Текст чітко читається на всіх ділянках градієнта (AA+)
✅ **Документація**: Повний опис в `docs/architecture.md`
✅ **Локалізація**: Повна українська локалізація з `lang="uk"`
✅ **Доступність**: Фокуси, ARIA, контраст AA+
✅ **Дизайн-токени**: Централізовані в `lib/tokens.ts` та Tailwind config

## 9. Браузерна підтримка

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 10. Майбутні покращення

- PWA функціональність
- Додаткові мови інтерфейсу
- Розширена система компонентів
- Тестування доступності