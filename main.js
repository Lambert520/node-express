const cors = require('cors');
const path = require('path');
const DataRouter = require('./src/apis/data.js');
const StudentRouter = require('./src/apis/student.js');
const TeacherRouter = require('./src/apis/teacher.js');
const LoginRouter = require('./src/apis/login.js');
const express = require('express');
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));

app.use(express.static(path.join(__dirname, 'public')));
// 跨域处理
app.use(cors());
// 解析 POST 请求体，确保能正确解析 application/x-www-form-urlencoded 格式的请求体
app.use(express.urlencoded({ extended: true }));
// 解析 POST 请求体，确保能正确解析 application/json 格式的请求体
app.use(express.json());

// 中间件函数拦截指定请求
app.use('/data', DataRouter);

app.use('/student', StudentRouter);

app.use('/teacher', TeacherRouter);

// 登录接口
app.use('/login', LoginRouter);

// 处理 404 错误
app.use((_req, res) => {
  res.status(404).send('Not Found');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});