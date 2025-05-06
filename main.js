const cors = require('cors');
const path = require('path');
const fs = require('node:fs/promises');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.get('/api/data', async (req, res) => {      
  try {
    const data = await fs.readFile(path.join(__dirname, './mock/data.json'), 'utf-8');
    res.status(200).json(JSON.parse(data));
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

app.use((req, res) => {
  res.status(404).send('Not Found');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});