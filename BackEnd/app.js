const express = require('express');
const path  = require('path');
const morgan = require('morgan');

const {sequelize} = require('./models');
const cors = require('cors');
const app = express();

const kindRoutes = require('./routes/kind');
const catRoutes = require('./routes/cat');
const charcRoutes = require('./routes/charc');
const todoRoutes = require('./routes/todo');


app.set('port', process.env.PORT || 3001);
// force true면 서버 실행마다 테이블응ㄹ 재생성함.
sequelize.sync({force: false}).then(()=>console.log('DB 연결 SUCCESS')).catch((err)=>console.log(err));
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// cors
app.use(cors({origin: '*'}))

// routes
app.use("/api/kind", kindRoutes);
app.use("/api/cat", catRoutes);
app.use("/api/charc", charcRoutes);
app.use("/api/todo", todoRoutes);

app.use((req, res, next)=>{
  const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`)
  error.status = 404;
  next(error)
})

app.use((err, req, res, next)=>{
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== 'production' ? err : {}
  res.status(err.status || 500);
});

app.listen(app.get('port'), ()=>{
  console.log(app.get('port'), '번 포트에서 대기 중');
})