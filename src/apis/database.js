const express = require('express');
const router = express.Router();
const db = require('../utils/db');

router.get('/', (req, res) => {
  db.query('SELECT * FROM student', (error, results) => {
    if (error) {
      return res.status(500).json({ error: '数据库查询失败' });
    }
    res.json(results);
  });
});

router.delete('/delete/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM student WHERE id = ?', [id], (error, results) => {
    if (error) {
      return res.status(500).json({ error: '数据库删除失败' });
    }
    res.json({ message: '学生信息删除成功' });
  });
});

router.post('/insert', (req, res) => {
  const { id, name, age } = req.body;
  db.query('INSERT INTO student (id, name, age) VALUES (?, ?, ?)', [id, name, age], (error, results) => {
    if (error) {
      return res.status(500).json({ error: '数据库插入失败' });
    }
    res.status(200).json({ message: '学生信息添加成功', id: results.insertId });
  });
});
module.exports = router;

router.put('/update/:id', (req, res) => {
  const { id } = req.params;
  const { name, age } = req.body;
  db.query('UPDATE student SET name = ?, age = ? WHERE id = ?', [name, age, id], (error, results) => {
    if (error) {
      return res.status(500).json({ error: '数据库更新失败' });
    }
    res.json({ message: '学生信息更新成功' });
  });
});
