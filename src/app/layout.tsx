import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Elis Family Law | Compassionate Legal Guidance for Every Step Forward",
  description:
    "Elis Family Law provides expert legal counsel in family law, divorce, child custody, estate planning, and more. Our dedicated partners stand by your side every step of the way.",
  keywords:
    "family law, divorce attorney, child custody, estate planning, legal counsel, Elis Family Law",
  openGraph: {
    title: "Elis Family Law",
    description: "Compassionate legal guidance for every step forward.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
