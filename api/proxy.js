import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/api/bootstrap-static', async (req, res) => {
  try {
    const response = await fetch('https://fantasy.premierleague.com/api/bootstrap-static/');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

app.get('/api/fixtures', async (req, res) => {
  try {
    const response = await fetch('https://fantasy.premierleague.com/api/fixtures/');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server is running on http://localhost:${PORT}`);
});