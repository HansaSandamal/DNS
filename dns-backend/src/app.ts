import express from 'express';
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import cors from 'cors';
import router from './routes';
const app = express();


dotenv.config();
const dbURL: string = process.env.MONGO_DB2 || '';
const port: string | number = process.env.PORT || 3001;

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

const initDB = async () => {
  let client;
  try {
    client = await mongoose.connect(dbURL);
  } catch (error) {
    console.log("Can't connect to MongoDB. " + error);
    console.log(error);
  }
  if (client) {
    console.log("Connected");
  }
}
initDB().catch(error => console.log(error));

// -standard middleware-
app.use(cors(corsOptions));

app.use(express.json());

app.use('/', router);
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});