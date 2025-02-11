import express from 'express';
const { Application, Request, Response, NextFunction } = express;
import articleRoutes from './routes/articlesRoutes.ts';
import imageRoutes from './routes/imagesRoutes.ts';
import cors from 'cors';

const app: Application = express();
const PORT = process.env.PORT ?? 3000;

const corsOptions = {
	origin:
		process.env.NODE_ENV === 'development'
			? `http://localhost:${process.env.PORT}`
			: 'https://quentinsautiere.com', // Allow all origins
	methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
	credentials: true,
	optionsSuccessStatus: 204,
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

// Routes
app.use('/patate-mag/articles', articleRoutes);
app.use('/patate-mag/images', imageRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	console.error('Erreur : ', err.message);
	res.status(500).json({ error: err.message });
});

export default app;
