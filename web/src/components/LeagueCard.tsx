// src/components/LeagueCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface League {
  id: number;
  name: string;
  country: string;
  logo: string;
}

// interface Country {
//   name: string;
//   code: string;
//   logo: string;
// }

interface Props {
  league: League;
//   country: Country;
}

export default function LeagueCard({ league }: Props) {
  return (
    <Link
      to={`/league/${league.id}`}
      className="block bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
    >
      <img
        src={league.logo || 'https://via.placeholder.com/400x300'}
        alt={league.name}
        className="w-24 h-24 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-1">{league.name}</h3>
        <p className="text-gray-500 text-sm">{league.country}</p>
      </div>
    </Link>
  );
}