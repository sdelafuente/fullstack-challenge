#!/usr/bin/env node

import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();
const PORT = process.env.PORT || 3000;
const API_KEY = process.env.API_FOOTBALL_KEY;
const BASE_URL = 'https://v3.football.api-sports.io';

if (!API_KEY) {
  console.error('⚠️ Por favor, define la variable de entorno API_FOOTBALL_KEY');
  process.exit(1);
};

app.use(cors());
app.use(express.json());

// Listar ligas paginadas
app.get('/api/leagues', async (req, res) => {
    const { country = 'argentina'} = req.query;
    try {
      const response = await axios.get('https://v3.football.api-sports.io/leagues', {
        headers: {
            'x-rapidapi-host': 'v3.football.api-sports.io',
            'x-rapidapi-key': API_KEY
        },
        params: { country }
      });
      res.json(response.data.response);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al obtener ligas' });
    }
  });

  // Detalle de una liga
app.get('/api/league/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const response = await axios.get('https://v3.football.api-sports.io/leagues', {
        headers: {
            'x-rapidapi-host': 'v3.football.api-sports.io',
            'x-rapidapi-key': API_KEY
        },
        params: { id }
      });
      res.json(response.data.response[0]);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al obtener detalle de liga' });
    }
  });

// Listar equipos paginados por país
app.get('/api/teams', async (req, res) => {
    const { country = 'china' } = req.query;
    try {
      const response = await axios.get('https://v3.football.api-sports.io/teams', {
        headers: {
            'x-rapidapi-host': 'v3.football.api-sports.io',
            'x-rapidapi-key': API_KEY
        },
        params: { country }
      });
      res.json(response.data.response);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al obtener equipos' });
    }
  });

  app.listen(PORT, () => {
    console.log(`🚀 Backend escuchando en http://localhost:${PORT}`);
  });

