import fetch from 'node-fetch';
import Cors from 'cors';

const cors = Cors({
    methods: ['GET'],
    origin: '*',
})

// Info om hver kamp

export default async (req, res) => {
    cors(req, res, async () => {
        try {
            const response = await fetch('https://fantasy.premierleague.com/api/fixtures/');
            const data = await response.json();
            res.status(200).json(data);
          } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Failed to fetch data' });
          }
    })
};