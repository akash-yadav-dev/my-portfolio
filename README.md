<!-- README.md -->
# Akash Portfolio

A personal portfolio built with Next.js 14, TypeScript, and Tailwind CSS.

## Tech Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run in development

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Start production server

```bash
npm run start
```

### 5. Lint

```bash
npm run lint
```

## Project Structure

- `src/app` - App Router routes and page-level composition
- `src/components` - Shared UI and layout components
- `src/data/content.ts` - Typed, central content source
- `public/assets` - Static assets served by Next.js

## Notes

- The `writing/logic-first-ai` page is implemented as a dedicated static route.
- Dynamic writing routes skip reserved slugs to avoid duplicate static generation.

## Deployment

This app can be deployed on Vercel or any Node.js host that supports Next.js.

## Repository Setup

If you are setting up this repository for the first time:

```bash
git init
git remote add origin git@github.com:akash-yadav-dev/my-portfolio.git
git branch -M main
git add .
git commit -m "feat: initial portfolio setup"
git push -u origin main
```
