// src/pages/LeagueDetail.tsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

interface Detail {
  league: { id: number; name: string; country: string; logo: string; season: number };
}

export default function LeagueDetail() {
  const { id } = useParams<{ id: string }>();
  const [d, setD] = useState<Detail | null>(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/league/${id}`)
      .then(r => setD(r.data))
      .catch(console.error);
  }, [id]);

  if (!d) return <p className="text-center py-8">Cargando detalle…</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/" className="text-blue-500 hover:underline mb-4 inline-block">
        &larr; Volver al listado
      </Link>
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
        <img
          src={d.league.logo || 'https://via.placeholder.com/500x400'}
          alt={d.league.name}
          className="rounded-full h-full max-w-xs"
        />
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-3">{d.league.name}</h2>
          <p className="text-gray-600 mb-1">
            <span className="font-semibold">ID:</span> {d.league.id}
          </p>
          <p className="text-gray-600 mb-1">
            <span className="font-semibold">País:</span> {d.country.name}
          </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {d.seasons.map(item => (
                    <p>
                        Temporadas: {item.year} - {item.start} - {item.end}
                    </p>
                  ))}
                </div>
          <p className="text-gray-600">
            {/* <span className="font-semibold">Temporada:</span> {d.league.season} */}
          </p>
        </div>
      </div>
    </div>
  );
}