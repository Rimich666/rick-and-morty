import pg from 'pg';

const config = {
    connectionString:
        "postgres://candidate:62I8anq3cFq5GYh2u4Lh@rc1b-r21uoagjy1t7k77h.mdb.yandexcloud.net:6432/db1",
    ssl: {
        rejectUnauthorized: true,
        ca: process.env.POSTGRES_CA.split('\\end line\\').join('\n')
    },
};

export const conn = new pg.Client(config);

export const connect = () => {
  conn.connect((err) => {
    if (err) throw err;
  });
}