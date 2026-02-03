import type { Metadata } from "next";

export const siteConfig = {
  name: "TrustOS",
  description:
    "The trust layer for stablecoin payments. Non-custodial escrow, dispute resolution, and buyer protection for USDC payments on Base.",
  url: "https://trustos.io",
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — The trust layer for stablecoin payments`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "stablecoin payments",
    "USDC escrow",
    "crypto payments",
    "buyer protection",
    "dispute resolution",
    "Base L2",
    "non-custodial",
    "smart contract escrow",
    "TrustOS",
    "Rowship",
    "web3 payments",
    "crypto escrow",
  ],
  authors: [{ name: "Rowship" }],
  creator: "Rowship",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};
