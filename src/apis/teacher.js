const express = require('express');
const router = express.Router();

router.get('/:id', (req, res) => {
    const { id } = req.params;
    if (!id || id.trim() === '') {
        return res.status(400).json({ error: 'Bad Request: Missing or invalid ID' });
    }
    res.json(`老师的ID是: ${id}`);
});

module.exports = router;