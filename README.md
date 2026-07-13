# Stanley Chukwuka — Research Portfolio

A responsive, animated portfolio for RWA research, stablecoin analysis, Web3 campaign systems, and academic work. Built with Next.js and deployed on Vercel.

## Focus

- Real-world asset research
- Stablecoin and onchain infrastructure analysis
- Research-led Web3 campaigns
- Academic materials science
- Verifiable proof of work with direct publication links

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
npm start
```

## Add or edit work

Portfolio entries live in the `projects` array in `components/Portfolio.jsx`. Each entry has a category, title, description, note, and visual component. Add a new project there, then add its visual to `components/WorkVisuals.jsx`.

Global visual tokens and responsive behavior live in `styles/globals.css`.
