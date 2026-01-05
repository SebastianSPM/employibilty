import React from "react";
import { Sidebar } from "@/components/dashboard/Sidebar";

const navItems = [
  { label: 'Overview', href: '/home' },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <div className="flex min-h-screen bg-gray-100">
      
      <Sidebar items={navItems} />

      <main className="flex-1 p-8 overflow-y-auto h-screen">
        {children}
      </main>
    </div>
  );
}