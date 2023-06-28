import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

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
        <body className="h-screen w-screen bg-emerald-400">{children}</body>
      </html>
    </ClerkProvider>
  );
}
