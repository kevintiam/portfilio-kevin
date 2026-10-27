// Polices hébergées avec le site (paquets @fontsource) : pas de CDN externe
import "@fontsource/syne/600.css";
import "@fontsource/syne/700.css";
import "@fontsource/syne/800.css";
import "@fontsource/instrument-sans/400.css";
import "@fontsource/instrument-sans/500.css";
import "@fontsource/instrument-sans/600.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "./globals.css";
import Header from "./Layaout/Header";
import Footer from "./Layaout/Footer";
import ScrollEffects from "./components/ScrollEffects";
import BlueprintCursor from "./components/BlueprintCursor";

export const metadata = {
  title: "Kevin Tiam | Développeur Full-Stack — Ottawa",
  description:
    "Portfolio de Kevin Tiam, développeur full-stack (React, Next.js, Node.js, PostgreSQL) basé à Ottawa, Canada. Disponible immédiatement.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        {/* Texture de grain par-dessus tout le site */}
        <div className="grain" aria-hidden="true" />
        <BlueprintCursor />
        <ScrollEffects />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
