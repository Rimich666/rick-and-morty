import {conn} from './connect.js';

export const TABLE_NAME = 'rimich';
export const execute = async (query) => {
  try {
    await conn.query(query);  // sends queries
    return true;
  } catch (error) {
    console.error(error.stack);
    return false;
  }
};

export const select = async (query) => {
  const { rows } = await conn.query(query);
  return rows;
}