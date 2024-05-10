import Navbar from "../components/Common/Navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen w-screen min-w-fit flex-col">
      <Navbar />
      <main className="w-full flex-1 bg-slate-800 p-2">{children}</main>
    </div>
  );
}
