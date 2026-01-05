// O puedes ponerlo dentro de src/app/(dashboard)/hooks/useDashboardData.ts
import { useState, useEffect, useMemo } from 'react';
import { getCharacters, Character } from '@/services/api';

export function useDashboardData() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    try {
      const data = await getCharacters();
      setCharacters(data);
    } catch (err) {
      setError('Error al cargar personajes');
    } finally {
      setLoading(false);
    }
  };

  // Lógica de filtrado
  const filteredCharacters = useMemo(() => {
    return characters.filter(c => {
      const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase());
      const matchesStatus = statusFilter === 'all' || c.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [search, statusFilter, characters]);

  // Lógica de estadísticas
  const stats = useMemo(() => {
    return {
      total: characters.length,
      alive: characters.filter(c => c.status === 'Alive').length,
      dead: characters.filter(c => c.status === 'Dead').length,
      unknown: characters.filter(c => c.status === 'unknown').length,
      visible: filteredCharacters.length
    };
  }, [characters, filteredCharacters]);

  return {
    characters: filteredCharacters, // Devolvemos ya los filtrados
    stats,
    loading,
    error,
    filters: {
      search,
      status: statusFilter,
      setSearch,
      setStatus: setStatusFilter
    }
  };
}