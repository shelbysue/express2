import express from "express";
import movieRouter from "./routes/movies";

const app = express();

app.use(express.json());

app.use('/', movieRouter);

app.listen(3001, () => console.log('server works'));