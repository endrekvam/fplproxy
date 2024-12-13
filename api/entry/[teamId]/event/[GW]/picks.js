import fetch from 'node-fetch';

// Info om spillere i lag

export default async (req, res) => {
    const { teamId, GW } = req.query;

    try {
        const response = await fetch(`https://fantasy.premierleague.com/api/entry/${teamId}/event/${GW}/picks/`);
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: `Failed to fetch team data for: ${teamId} and Gameweek ${GW}` });
    }
};