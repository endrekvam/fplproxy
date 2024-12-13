import fetch from 'node-fetch';

// Generell info om lag og eier

export default async (req, res) => {
  const { leagueId } = req.query;

  try {
    const response = await fetch(`https://fantasy.premierleague.com/api/leagues-classic/${leagueId}/standings/`);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: `Failed to fetch league data for: ${leagueId}` });
  }
};