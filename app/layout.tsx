import type { Metadata } from "next";
import { headers } from "next/headers";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const oswald = Oswald({ variable: "--font-oswald", subsets: ["latin"], weight: ["500", "600", "700"] });
const title = "Personal Trainer | Consultoria Online e Treino Personalizado";
const description = "Consultoria online e acompanhamento personalizado com avaliação física, treino individual e acesso pelo MFit Personal. Agende sua avaliação.";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") || requestHeaders.get("host") || "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") || (host.includes("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  return {
    metadataBase: new URL(origin), title, description,
    icons: { icon: "/favicon.png", shortcut: "/favicon.png" },
    openGraph: { title, description, type: "website", locale: "pt_BR", url: origin, siteName: "Lavezso Personal Trainer", images: [{ url: `${origin}/og.png`, width: 1200, height: 630, alt: "Lavezso Personal Trainer — treino inteligente, resultados de verdade" }] },
    twitter: { card: "summary_large_image", title, description, images: [`${origin}/og.png`] },
    robots: { index: true, follow: true },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body className={`${inter.variable} ${oswald.variable}`}>{children}</body></html>;
}
