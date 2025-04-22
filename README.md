# 🚀 Careerio - AI Powered Career Coach

Your intelligent career companion! Careerio leverages **Google Gemini AI** to provide personalized career guidance, resume generation, interview preparation, and industry insights tailored to your skills.

## ⚙️ Key Features

- **AI-Powered Resume Builder** - Generate polished resumes tailored to your industry
- **Smart Cover Letter Generator** - Create compelling letters in seconds
- **Interview Simulator** - Practice with industry-specific questions
- **Career Insights** - Get personalized recommendations
- **PDF Export** - Download professional resume PDFs
- **Secure Authentication** - Powered by Clerk

## 🛠 Tech Stack
[![Next.js 15](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](#)  
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](#)  
[![Clerk](https://img.shields.io/badge/Clerk-000000?style=for-the-badge&logo=clerk&logoColor=white)](#)  
[![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)](#)  
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)](#)  
[![Google Gemini](https://img.shields.io/badge/Google_Gemini-4285F4?style=for-the-badge&logo=google&logoColor=white)](#)  
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](#)  

## ✨ Quick Start

**Steps to set up the project:**  

_Requirements:_  

[![NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)](#)  
[![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)](#)  
[![NodeJS](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](#)  

**Clone the repository**
```bash
git clone https://github.com/SwapnilBhattacharya05/ai-career-coach.git
cd ai-career-coach
```

**Install the dependencies**
```bash
npm install
```

**Set up environment variables**
   Create .env file:
  ```bash
  # CLERK
  NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
  CLERK_SECRET_KEY=
  NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
  NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
  NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/onboarding
  NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/onboarding

  # NEON
  DATABASE_URL=

  # GEMINI
  GEMINI_API_KEY=

  # SENTRY
  SENTRY_AUTH_TOKEN=
   ```

**Setup the database**
```bash
npx prisma migrate dev
```

Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## 🌐 Socials

[![Discord](https://img.shields.io/badge/Discord-%237289DA.svg?logo=discord&logoColor=white)](https://discord.gg/https://discord.com/invite/MvRFh7qMvA) [![Facebook](https://img.shields.io/badge/Facebook-%231877F2.svg?logo=Facebook&logoColor=white)](https://facebook.com/swapnil.bhattacharya.39) [![Instagram](https://img.shields.io/badge/Instagram-%23E4405F.svg?logo=Instagram&logoColor=white)](https://instagram.com/iam___swapnil) [![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://linkedin.com/in/swapnil-bhattacharya-357ab527a)

---
