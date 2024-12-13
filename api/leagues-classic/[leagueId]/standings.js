import fetch from 'node-fetch';
import Cors from 'cors';

const cors = Cors({
  methods: ['GET'],
  origin: '*', // Replace '*' with your frontend's URL for more security
});

// Generell info om lag og eier

export default async (req, res) => {
  cors(req, res, async () => {
    const { leagueId } = req.query;

    try {
      const response = await fetch(`https://fantasy.premierleague.com/api/leagues-classic/${leagueId}/standings/`);
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: `Failed to fetch league data for: ${leagueId}` });
    }
  })
};