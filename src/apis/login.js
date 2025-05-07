const express = require('express');
const router = express.Router();

// 登录接口
router.post('/', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }
    // 模拟登录成功
    res.json({ message: 'Login successful' });
});

module.exports = router;