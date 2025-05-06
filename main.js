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
    // 重定向请求到 /api/mock
    res.redirect('/api/mock');
    res.status(500).send('Internal Server Error');
  }
});

app.get('/api/student', (req, res) => {  
  // 渲染 ejs 模板，并传递数据，最后返回给浏览器
  res.render('student', { name: 'zhangsan', age: 25, stus:[{name: 'lisi', age: 22}, {name: 'wangwu', age: 23}] });
});

app.get('/api/mock', (req, res) => {  
  res.status(200).json({ message: 'Mock data' });
}); 

app.use((req, res) => {
  res.status(404).send('Not Found');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});