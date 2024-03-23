import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex flex-col items-center gap-[10px] p-24">
        {children}
        <p>This is from layouts of dashboard</p>
        <Link href="/" className="no-underline"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">go to Home page</button></Link>
    </section>
  );
}
