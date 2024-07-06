import {execute, select, TABLE_NAME} from './execute.js';


export const createTable = async () => {
  const existsText = `SELECT tablename FROM pg_tables WHERE tablename = '${TABLE_NAME}';`;
  const dropText = `DROP TABLE "${TABLE_NAME}"`;
  const createText = `CREATE TABLE "${TABLE_NAME}" (
	  "id" SERIAL,
	  "name" TEXT NOT NULL,
	  "data" JSONB NOT NULL,
	  PRIMARY KEY ("id")
  );`;
  if ((await select(existsText)).length > 0) {
    await execute(dropText);
  }
  return execute(createText);
}