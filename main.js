const cors = require('cors');
const path = require('path');
const fs = require('node:fs/promises');
const express = require('express');
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));

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

app.get('/api/student', (req, res) => {  
  res.render('student', { name: 'zhangsan', age: 25, stus:[{name: 'lisi', age: 22}, {name: 'wangwu', age: 23}] });
});

app.use((req, res) => {
  res.status(404).send('Not Found');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});