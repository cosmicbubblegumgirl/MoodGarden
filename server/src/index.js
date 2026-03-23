import express from 'express';
import cors from 'cors';
import { router } from './routes.js';
import { initDb } from './db.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', router);

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

const port = process.env.PORT || 5179;

initDb()
  .then(() => {
    app.listen(port, () => {
      console.log(`MoodGarden server running on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error('Failed to initialize DB:', err);
    process.exit(1);
  });
