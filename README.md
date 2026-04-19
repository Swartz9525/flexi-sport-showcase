# Arbeit Sports (OPC) Pvt Ltd — Official Website

A modern, responsive marketing & catalog website for **Arbeit Sports (OPC) Pvt Ltd**, a premium sporting equipment brand serving athletes, academies, and clubs across India.

Built with a focus on performance, smooth motion, clean typography, and a strong, energetic brand identity.

---

## ✨ Features

- **Sticky Responsive Navbar** — adapts to mobile, tablet, and desktop
- **Hero Carousel** — animated, full-width banners showcasing the brand
- **Featured Section** — highlights core values and brand promise
- **Home Page Product Preview** — shows top picks from the catalog
- **Dedicated Products Page** (`/products`) — full catalog with **category filtering**
- **Alternating Product Layouts** — image/text flip on desktop, stacked on mobile
- **About Section** — company story with owner details
- **Contact Section** — get in touch form & business info
- **Footer** — quick links, categories, social handles
- **SEO Optimized** — per-page titles, meta descriptions & OpenGraph tags
- **Smooth Animations** — powered by Framer Motion
- **Fully Responsive** — mobile-first design across all breakpoints

---

## 🛠 Tech Stack

| Layer         | Technology                                   |
| ------------- | -------------------------------------------- |
| Framework     | **React 19** + **TanStack Start v1** (SSR)   |
| Build Tool    | **Vite 7**                                   |
| Routing       | **TanStack Router** (file-based)             |
| Styling       | **Tailwind CSS v4** (semantic design tokens) |
| Animations    | **Framer Motion**                            |
| UI Primitives | **shadcn/ui** + Radix                        |
| Icons         | **lucide-react**                             |
| Language      | **TypeScript** (strict mode)                 |
| Data          | Local **`products.json`**                    |
| Deployment    | Cloudflare Workers (Edge)                    |

---

## 📁 Project Structure

```
src/
├── assets/              # Product & hero images
├── components/
│   ├── Navbar.tsx
│   ├── HeroCarousel.tsx
│   ├── Featured.tsx
│   ├── ProductsPreview.tsx   # Home page (3 products)
│   ├── Products.tsx          # Full catalog with filters
│   ├── ProductCard.tsx       # Reusable alternating card
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── ui/                   # shadcn primitives
├── data/
│   └── products.json         # Product catalog source
├── routes/
│   ├── __root.tsx            # Root layout & shell
│   ├── index.tsx             # Home page
│   └── products.tsx          # Full products page
├── styles.css                # Tailwind + design tokens (oklch)
└── router.tsx
```

---

## 🎨 Design System

The brand uses a warm, energetic palette with an **electric ember primary**, deep secondary surfaces, and elegant display typography.

- Defined as semantic tokens in `src/styles.css` using `oklch`
- Tokens: `--primary`, `--secondary`, `--background`, `--muted`, `--accent`, gradients (`--gradient-primary`, `--gradient-dark`), and shadows (`--shadow-elegant`, `--shadow-card`)
- Display font for headings, clean sans-serif for body
- Components consume tokens only — no hard-coded colors

---

## 📦 Data Handling

Products are loaded from **`src/data/products.json`** using dynamic imports inside `useEffect`. Each product entry includes:

```json
{
  "id": 1,
  "title": "Cricket Kit",
  "category": "cricket",
  "image": "/src/assets/product-cricket.jpg",
  "description": "Tournament-grade cricket gear..."
}
```

- **Home page** → shows the first 3 products as a preview
- **Products page** → renders the full list with `useState`-powered category filtering

---

## 🚀 Getting Started

### Prerequisites

- Node.js 20+ (or Bun)

### Install

```bash
bun install
# or
npm install
```

### Run dev server

```bash
bun run dev
```

### Production build

```bash
bun run build
```

---

## 🏢 About Arbeit Sports

**Arbeit Sports (OPC) Pvt Ltd** delivers premium sporting equipment — cricket, badminton, jerseys, fitness, and football gear — built on quality and driven by passion. Our mission is to equip champions across India with tournament-grade kits and custom solutions for academies and clubs.

> _Crafted for champions._

---

## 📄 License

© Arbeit Sports (OPC) Pvt Ltd. All rights reserved.
