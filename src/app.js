import express from "express";
import cors from 'cors';

import TasksRoutes from './routes/tasks.routes';
const app = express();

app.use(cors());
app.set('port', process.env.PORT || 8080)

app.get('/', (req, res) => {
  res.json({ txt: 'welcome to my aplication' })
});

//lo comun 
app.use('/api/tasks', TasksRoutes);

export default app;