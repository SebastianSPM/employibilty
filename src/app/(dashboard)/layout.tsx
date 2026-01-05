import React from 'react';
import { Sidebar } from './Sidebar';

// Definimos los items del menú aquí para pasarlos al componente
const navItems = [
  { label: 'Overview', icon: <span>🏠</span>, active: true },
  { label: 'Personajes', icon: <span>👥</span>, active: false },
  { label: 'Ajustes', icon: <span>⚙️</span>, active: false },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* El Sidebar fijo a la izquierda */}
      <Sidebar items={navItems} />

      {/* El contenido principal a la derecha */}
      <main className="flex-1 p-8 overflow-y-auto h-screen">
        {children}
      </main>
    </div>
  );
}