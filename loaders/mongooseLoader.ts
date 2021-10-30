import * as mongoose from 'mongoose'
import { Db } from "mongodb";
import requireDir from "require-dir";

async function initializeModels(): Promise<void> {
  console.log("Start loading models...");
  requireDir("../models", {
    mapKey(value: string, baseName: string) {
      console.log(`Model ${baseName} initialized`);
    },
    recurse: true,
  });
}

export default async (): Promise<Db> => {
  try {
    const connection = await mongoose.connect('PASTE_CONNECTION_STRING', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
      autoCreate: true,
    });
    await initializeModels();
    return connection.connection.db;
  } catch (err) {
    console.log("Error while starting Mongo", err);
  }
};
