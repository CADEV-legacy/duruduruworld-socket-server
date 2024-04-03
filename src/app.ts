import dotenv from 'dotenv';
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
import express from 'express';

import { SETTING } from '@/setting';

const app = express();

app.set('port', SETTING.PORT_NUMBER);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번에서 대기중');
});

export { app };
