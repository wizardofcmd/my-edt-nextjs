import Navbar from "../components/Navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="h-screen w-screen bg-slate-800 p-2">{children}</main>
    </>
  );
}
