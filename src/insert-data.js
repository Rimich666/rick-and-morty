import {execute} from './execute.js';

export const insertData = async (data) => {
  const insertText =
    `INSERT INTO "rimich"
    ("name", "data")
VALUES 
    ${data.map((item) => `('${item.name.replace("'", "''")}', '${JSON.stringify(item.data).replace("'", "''")}')`).join(',\n    ')};`;
  await execute(insertText)
}