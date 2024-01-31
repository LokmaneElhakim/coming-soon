import { Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-syne",
});
const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Coming Soon Page",
  description: "Join the waitlist for our upcoming launch!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={syne.className}>
      <link
        rel="icon"
        href="/svg/logo-grey.svg"
        type="image/<generated>"
        sizes="<generated>"
      />
      <body className="bg-background text-foreground coming-soon-page-background">
        <main>{children}</main>
      </body>
    </html>
  );
}
