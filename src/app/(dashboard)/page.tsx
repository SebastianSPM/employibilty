'use client';

import { useDashboardData } from '@/hooks/useDashboardData'; // El hook que creamos arriba
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import FiltersPanel from '@/components/dashboard/FiltersPanel';
import LoadingState from '@/components/dashboard/LoadingState';
import StatsCard from '@/components/dashboard/StatsCard'; // Asumo que existe o lo creamos abajo
import CharacterCard from '@/components/dashboard/CharacterCard'; // Lo movemos a su propio archivo

export default function DashboardPage() {
  // 1. Extraemos toda la lógica y estado del hook
  const { characters, stats, loading, error, filters } = useDashboardData();

  if (loading) return <LoadingState />;
  if (error) return <div className="text-red-500 p-4">Error: {error}</div>;

  return (
    <div className="container-fluid space-y-6">
      
      {/* Header */}
      <DashboardHeader 
        title="Dashboard de Personajes" 
        subtitle="Gestión y vista general de la API de Rick & Morty"
      />

      {/* Sección de Estadísticas (Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatsCard label="Total" value={stats.total} />
        <StatsCard label="Vivos" value={stats.alive} type="success" />
        <StatsCard label="Muertos" value={stats.dead} type="danger" />
        <StatsCard label="Desconocidos" value={stats.unknown} type="warning" />
      </div>

      {/* Panel de Filtros */}
      <FiltersPanel
        search={filters.search}
        status={filters.status}
        onSearchChange={filters.setSearch}
        onStatusChange={filters.setStatus}
      />
      <div className="text-sm text-gray-500 mb-4">
        Mostrando {stats.visible} resultados
      </div>

      {/* Grid de Personajes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {characters.map((char) => (
          <CharacterCard key={char.id} character={char} />
        ))}
      </div>

      {characters.length === 0 && (
        <div className="p-4 bg-blue-50 text-blue-700 rounded text-center">
           No se encontraron resultados con los filtros actuales.
        </div>
      )}
    </div>
  );
}