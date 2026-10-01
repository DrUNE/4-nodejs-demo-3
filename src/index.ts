import express, { type Request, type Response, type NextFunction } from 'express';
import { userRouter } from 'users'

const port = 8000;
const app = express();

app.use((_req, _res, next) => {
  console.log('Время ', Date.now());
  next();
});

app.get('/hello', (_req, _res) => {
  throw new Error('Ошибка!!');
});

app.use('/users', userRouter);

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.log(err.message);
  res.status(401).send(err.message);
});

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
