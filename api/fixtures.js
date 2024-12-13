import fetch from 'node-fetch';

// Info om hver kamp

export default async (req, res) => {
    
  try {
    const response = await fetch('https://fantasy.premierleague.com/api/fixtures/');
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
};