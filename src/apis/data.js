const express = require('express');
const router = express.Router();
const fs = require('node:fs/promises');

router.get('/', async (_req, res) => {
    try {
        const data = await fs.readFile(path.join(__dirname, './mock/data.json'), 'utf-8');
        res.status(200).json(JSON.parse(data));
    } catch (error) {
        // 重定向请求到 /api/mock
        res.redirect('/api/data/mock');
        res.status(500).send('Internal Server Error');
    }
});

router.get('/mock', (_req, res) => {
    res.status(200).json({ message: 'Mock data' });
});

module.exports = router;
