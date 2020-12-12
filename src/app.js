import express, { json } from 'express';
import morgan from 'morgan';
import projectsRoutes from './routes/projects';
import tasksRoutes from './routes/tasks';

const app = express();

app.use(morgan('dev'));
app.use(json());

app.use('/api/projects', projectsRoutes);
app.use('/api/tasks', tasksRoutes);

export default app;