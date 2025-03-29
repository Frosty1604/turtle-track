import { Injectable, isDevMode } from '@angular/core';
import { addRxPlugin, createRxDatabase, RxCollection, RxDatabase } from 'rxdb';
import { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';
import { OdoDocType, odoSchema } from '../../schema/odo.model';

export type OdoCollection = RxCollection<OdoDocType>;

export type TurtleDbCollections = {
  odo: OdoCollection;
};

export type TurtleDb = RxDatabase<TurtleDbCollections>;

let initState: Promise<TurtleDb> | null = null;
let DB_INSTANCE: TurtleDb;

async function createDB() {
  if (isDevMode()) {
    await import('rxdb/plugins/dev-mode').then((module) =>
      addRxPlugin(module.RxDBDevModePlugin)
    );
  }

  const db: TurtleDb = await createRxDatabase<TurtleDbCollections>({
    name: 'turtle-track-db',
    storage: getRxStorageDexie({
      allowEmptyDB: true,
    }),
  });

  await db.addCollections({
    odo: {
      schema: odoSchema,
    },
  });
  return db;
}

export async function initDB() {
  if (!initState) {
    console.log('initDB()');
    initState = createDB().then((db) => (DB_INSTANCE = db));
  }
  await initState;
}

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  get db() {
    return DB_INSTANCE;
  }
}
