import express from 'express';
import { connectDB } from './database/index.ts';
import articleRoutes from './routes/articles.ts';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT ?? 3000;

const corsOptions = {
  origin: process.env.NODE_ENV === 'development' ? `http://localhost:${process.env.PORT}` : 'https://quentinsautiere.com', // Allow all origins
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

// Routes
app.use('/patate-mag/articles', articleRoutes);

// Connect to database and start server
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Failed to connect to the database', error);
  });