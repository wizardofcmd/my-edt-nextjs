export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="h-screen w-screen p-1 bg-teal-500">
      {children}
    </main>
  )
}