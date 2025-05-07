const express = require('express');
const router = express.Router();
const db = require('../utils/db');

router.get('/info', (req, res) => {
  db.query('SELECT * FROM student', (error, results) => {
    if (error) {
      return res.status(500).json({ error: '数据库查询失败' });
    }
    res.json(results);
  });
});

module.exports = router;