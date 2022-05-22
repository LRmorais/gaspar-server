import express, { json } from 'express';
// import http from 'http';
import { db } from './database/db';
import { router } from './routes';
import { User } from './database/models/user.model';

const app = express();

app.use(json());
app.use(router);

app.listen(3333, async () => {
  await db.sync();
  await User.sync();
  console.log('App listening on running at 3333!');
});

// db.sync({ force: false }).then(() => {
//   app.set('port', 3333);
//   User.sync();
//   const server = http.createServer(app); // inicia o servidor
//   server.listen(3333);
// });
