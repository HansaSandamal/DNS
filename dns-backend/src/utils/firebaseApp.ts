import admin from 'firebase-admin';
import * as dotenv from "dotenv";
dotenv.config();
//import serviceAccount = require('./firebaseServiceAccountCredentials');
//import serviceAccount = require('../firebaseServiceAccountCredentials.json');

// eslint-disable-next-line @typescript-eslint/no-var-requires
const serviceAccount = require("../firebaseServiceAccountCredentials.json");
//TODO: add firebase service account credentials.

const firebaseApp = admin.initializeApp({credential: admin.credential.cert(serviceAccount)});

export const firebaseAuth = firebaseApp.auth();