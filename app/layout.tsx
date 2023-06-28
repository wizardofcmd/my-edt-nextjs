import "./globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
