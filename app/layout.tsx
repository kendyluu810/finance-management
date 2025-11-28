import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import AppSidebar from "@/components/AppSidebar";
import Navbar from "@/components/Navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { cookies } from "next/headers";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Fynix - Finance Management",
  description: "Manage your finances with ease using Fynix.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

  return (
    <html lang="en">
      <body
        className={`${urbanist.variable} antialiased flex min-h-screen bg-gray-100`}
      >
        <SidebarProvider defaultOpen={defaultOpen}>
          <AppSidebar />
          <main className="flex-1 flex flex-col w-full transition-all duration-300 ease-in-out">
            <div className="sticky top-0 z-10  bg-slate-50/80 backdrop-blur-md">
              <Navbar />
            </div>
            <div className="flex-1 p-2 md:p-4 overflow-y-auto">
              <div className="max-w-full mx-auto w-full space-x-4">
                {children}
              </div>
            </div>
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
