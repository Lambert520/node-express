const express = require('express');
const router = express.Router();

router.get('/', (_req, res) => {
    // 渲染 ejs 模板，并传递数据，最后返回给浏览器
    res.render('student', { name: 'zhangsan', age: 25, stus: [{ name: 'lisi', age: 22 }, { name: 'wangwu', age: 23 }] });
});

module.exports = router;