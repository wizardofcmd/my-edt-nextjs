import "./globals.css";
import { Inter_Tight } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

const interTight = Inter_Tight({ subsets: ["latin"] });

export const metadata = {
  title: "My EDT Portal",
  description: "Track your driving lessons using the My EDT portal.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${interTight.className}`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
