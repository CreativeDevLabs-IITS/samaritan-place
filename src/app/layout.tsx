import type { Metadata, Viewport } from "next";
import { Maven_Pro, Newsreader } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MotionRoot } from "@/components/MotionRoot";
import { site } from "@/content/site";
import "./globals.css";

const body = Maven_Pro({ variable: "--font-body", subsets: ["latin"], display: "swap" });
const display = Newsreader({ variable: "--font-display", subsets: ["latin"], style: ["normal", "italic"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Samaritan Place | Long-term care in Saskatoon", template: "%s | Samaritan Place" },
  description:
    "Samaritan Place provides long-term care to over 100 residents in Saskatoon, Saskatchewan, in the tradition of Catholic social justice teaching. Companion suites, resident-directed care and a household model of care.",
  openGraph: { siteName: "Samaritan Place", type: "website", locale: "en_CA", images: ["/images/garden-aerial.jpg"] },
};

export const viewport: Viewport = { themeColor: "#0f4f48" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable}`} suppressHydrationWarning>
      <head>
        {/* Lets the stylesheet hide reveal-on-scroll items only when JavaScript is available. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <MotionRoot />
      </body>
    </html>
  );
}
