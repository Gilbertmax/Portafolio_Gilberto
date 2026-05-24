# Gilberto Gonzalez Portfolio

Personal bilingual portfolio for Gilberto Gonzalez, Senior Full Stack & AI Systems Engineer.

## Stack

- React
- TypeScript
- Vite
- CSS

## Content

- English and Spanish language switcher
- Language-specific CV downloads:
  - English: `public/CV_GilbertoGonzalez.pdf`
  - Spanish: `public/CV_Gilberto_Gonzalez.pdf`
- Expanded work, capabilities, experience, technical stack and education sections

## Local Development

```bash
npm install
npm run dev
```

## Checks

```bash
npm run lint
npm run build
npm audit --audit-level=high
```

## Deploy To Vercel

Recommended flow:

1. Create a GitHub repository.
2. Push this project to the `main` branch.
3. Import the GitHub repository in Vercel.
4. Use Vercel's default Vite settings:
   - Build command: `npm run build`
   - Output directory: `dist`
