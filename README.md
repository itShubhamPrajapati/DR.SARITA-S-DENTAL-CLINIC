# 🦷 Dr. Sarita's Dental Clinic | Premium Web Experience

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-14-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" />
  <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/PWA_Ready-5A0FC8?style=for-the-badge&logo=pwa&logoColor=white" alt="PWA Ready" />
</div>

<br />

A highly optimized, enterprise-grade landing page engineered for **Dr. Sarita's Dental Clinic**. Designed with a "Luxury Spa & Wellness" aesthetic, this application transcends traditional clinic websites by focusing on reducing patient anxiety, building trust, and driving seamless, zero-cost lead generation through smart automation.

## 📋 Table of Contents
- [Architecture & Key Features](#-architecture--key-features)
- [System Workflow (Zero-Cost Backend)](#-system-workflow-zero-cost-backend)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Performance & SEO](#-performance--seo)
- [Getting Started](#-getting-started)
- [Author](#-author)

---

## ✨ Architecture & Key Features

*   **Serverless WhatsApp Booking:** A cost-effective approach to appointment scheduling. User data is strictly validated via `Zod` and securely formatted into a highly readable WhatsApp message, routing directly to the clinic's management without relying on external databases or paid SMS APIs.
*   **Dynamic Live Status Engine:** Real-time clinic status (🟢 Open / 🔴 Closed) is calculated automatically based on precise Indian Standard Time (IST) business hours, including conditional logic for custom Sunday schedules.
*   **Progressive Web App (PWA):** Fully installable on mobile and desktop devices. It provides a native app-like experience with offline fallback capabilities, reducing friction for returning patients.
*   **Bulletproof Security:** Engineered with frontend rate-limiting (submission cooldowns) and strict regex sanitization via Zod to prevent URL injection and XSS attacks.
*   **Premium UI/UX:** Built on top of **Shadcn UI** (Radix Primitives) and enriched with hardware-accelerated scroll animations using **Framer Motion** for a luxurious, fluid experience.

## 🔄 System Workflow (Zero-Cost Backend)

Unlike traditional setups that require a Node.js/PostgreSQL backend for a simple booking form, this project utilizes the client's device to handle data transmission securely:

1. **Input:** User fills out the Shadcn UI Form.
2. **Validation:** React Hook Form + Zod intercepts and sanitizes the data.
3. **Compilation:** A formatted string is generated securely.
4. **Execution:** The browser redirects to a pre-filled WhatsApp API protocol natively, acting as a secure, zero-maintenance lead generation funnel.

## 🛠️ Tech Stack

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Core Framework** | Next.js 14 (App Router) | Server-Side Rendering (SSR) & Routing |
| **Language** | TypeScript | Static typing for enterprise reliability |
| **Styling** | Tailwind CSS | Utility-first, responsive design system |
| **Components** | Shadcn UI | Accessible, unstyled component primitives |
| **Animations** | Framer Motion | High-performance micro-interactions |
| **Validation** | Zod + React Hook Form | Strict client-side schema validation |

## 📂 Project Structure

```text
├── app/
│   ├── layout.tsx         # Global layout, SEO Metadata & Fonts
│   ├── page.tsx           # Main Landing Page assembly
│   ├── not-found.tsx      # Custom 404 Fallback
│   └── error.tsx          # Global Error Boundary
├── components/
│   ├── layout/            # Navbar, Footer
│   ├── sections/          # Hero, Services, Doctors, AppointmentForm
│   └── ui/                # Shadcn UI primitives (Buttons, Cards, Inputs)
├── lib/
│   └── utils.ts           # Tailwind merge & global utilities
├── public/
│   └── manifest.json      # PWA configuration
└── tailwind.config.ts     # Custom theme & color palette
```

## 🚀 Performance & SEO
This application targets a 95+ Lighthouse Score across all metrics:

*   **SEO:** Pre-configured with dynamic Metadata API and strictly typed `LocalBusiness` JSON-LD schema markup (including precise geographical coordinates: `19.427425, 72.824162`) to dominate local search rankings in Vasai-Virar.
*   **LCP (Largest Contentful Paint):** Next.js `<Image />` component handles automatic WebP conversion, aggressive caching, and priority loading for above-the-fold assets.
*   **Stability:** Strict React Error Boundaries prevent the application from crashing globally during runtime exceptions.

## 💻 Getting Started
To run this project locally for development or auditing:

1. Clone the repository:
   ```bash
   git clone https://github.com/itShubhamPrajapati/DR.SARITA-S-DENTAL-CLINIC.git
   cd DR.SARITA-S-DENTAL-CLINIC
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
Navigate to `http://localhost:3000` to view the application in your browser.

## 👨‍💻 Author
Designed & Developed by **Shubham Prajapati**  
*Full Stack Developer*
