import "../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Stanley Chukwuka — RWA &amp; Stablecoin Research</title>
        <meta name="description" content="Research and visual storytelling across real-world assets, stablecoins, onchain infrastructure, and materials science." />
        <meta name="theme-color" content="#07111f" />
        <meta property="og:title" content="Stanley Chukwuka — Researching the rails beneath markets" />
        <meta property="og:description" content="RWA research, stablecoin analysis, premium campaign systems, and academic work." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      </head>
      <body>{children}</body>
    </html>
  );
}
