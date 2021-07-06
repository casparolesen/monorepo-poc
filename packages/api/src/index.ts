import express from 'express';
import cors from 'cors';
import usersRouter from './routes/users';

const app = express();
const port = 4000;

app.use(cors());

app.use('/users', usersRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// export the route types
export * from './routes/users';
