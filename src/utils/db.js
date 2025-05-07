const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: `${process.env.DB_USERNAME}`,
  password: `${process.env.DB_PASSWORD}`,
  database: 'node'
});
console.log("连接数据库中...", process.env.DB_USERNAME, process.env.DB_PASSWORD);

connection.connect((err) => {
  if (err) {
    console.error('MySQL 连接失败:', err);
    return;
  }
  console.log('MySQL 连接成功');
});

module.exports = connection;