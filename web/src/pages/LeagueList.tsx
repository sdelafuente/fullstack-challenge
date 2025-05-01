import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { from, Subject } from 'rxjs';
// import { switchMap } from 'rxjs/operators';
// import { Link } from 'react-router-dom';
import  LeagueCard  from '../components/LeagueCard';

interface LeagueType {
    league: { id: number; name: string; country: string; logo: string };
  }

export default function LeagueList() {
  const [leagues, setLeagues] = useState<LeagueType[]>([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/leagues`, {
        headers: {
            'x-rapidapi-host': 'v3.football.api-sports.io',
            'x-rapidapi-key': import.meta.env.VITE_API_FOOTBALL_KEY,
        },
        params: { country: 'argentina' }
      })
      .then(res => setLeagues(res.data))
      .catch(console.error);
  }, []);

  return (

    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ligas</h1>
      <div className="grid grid-cols-1 sm:grid-cols-5 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {leagues.map(item => (
          <LeagueCard
            key={item.league.id}
            league={{
              id: item.league.id,
              name: item.league.name,
              country: item.country.name,
              logo: item.league.logo,
            }}
          />
        ))}
      </div>
    </div>
    </div>

  );

}
