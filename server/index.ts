import express from 'express';
import cors from 'cors';
import { MongoClient } from 'mongodb';
import config from './config.json';
import { log } from './log';

const app = express();
const port = 1717;

app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ limit: '5mb', extended: false }));
app.use(cors());

app.get('/api/tiles', async (_req: any, res: any) => {
  const { client, db } = await connectToDb();
  db.collection('tiles')
    .find({})
    .toArray((err: any, tiles: any) => {
      if (err) {
        log.WARN(err);
        res.status(err.code).send(err);
      } else if (!tiles) {
        res.sendStatus(404);
      } else {
        res.status(200).send(tiles);
      }
      client.close();
    });
});

app.listen(port, () => {
  log.INFO(`ARCYVILK.COM server listening at http://localhost:${port}`);
});

// --------------------------------------------------
// ------------------- DATABASE ---------------------
// --------------------------------------------------

export const connectToDb = (): Promise<{
  client: MongoClient;
  db: any;
}> =>
  // eslint-disable-next-line no-async-promise-executor
  new Promise(async (resolve, reject) => {
    await MongoClient.connect(config.DATABASE_URL, (err, client) => {
      if (err) {
        log.WARN(`Error while connecting to database: ${err}`);
        reject(err);
      }
      if (!client) {
        log.WARN('Could not connect to database.');
        reject();
      } else {
        resolve({
          client,
          db: client.db('arcyvilk'),
        });
      }
    });
  });
