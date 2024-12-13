import fetch from 'node-fetch';

// Info om lag, kamper og gameweeks, mye info

export default async (req, res) => {

  try {
    const response = await fetch('https://fantasy.premierleague.com/api/bootstrap-static/');
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
};