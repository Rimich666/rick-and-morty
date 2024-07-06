"use strict";

import {conn, connect} from './src/connect.js';
import {insertData} from './src/insert-data.js';
import {createTable} from './src/create-table.js';
import {loadData} from './src/load-data.js';

const fillTable = async () => {
  connect();
  if (!(await createTable())) {
    await conn.end();
    return;
  }
  try {
    await insertData(await loadData());
  }
  finally {
    conn.end();
  }
}

fillTable();

// conn.query("SELECT version()", (err, q) => {
//     if (err) throw err;
//     console.log(q.rows[0]);
//     conn.end();
// });

