export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="h-screen w-screen bg-slate-800">
      {children}
    </main>
  )
}