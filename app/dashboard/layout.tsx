import Navbar from "../components/Navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen w-screen flex-col">
      <Navbar />
      <main className="flex-1 bg-slate-800 p-2">{children}</main>
    </div>
  );
}
