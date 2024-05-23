import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import routes from './routes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Routes
app.use('/api', routes);

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export default app;
