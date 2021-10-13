import Express, { Application, Request, Response, NextFunction } from 'express'
const session = require('express-session');
import path from 'path'
const app: Application = Express()
// 连接数据库
import './module/connect'
import moveAppRoute from './routes/moveApp'
//设置静态文件路径
app.use(Express.static(path.join(__dirname, 'public')))
// 设置文件解析
app.use(Express.urlencoded({ extended: false }))
app.use(Express.json())
app.use(session({ secret: 'keyboard cat', saveUninitialized: false, resave: false, cookie: { maxAge: 24 * 60 * 60 * 1000*30 } }))
// 设置跨域
app.all("*", (req: Request, res: Response, next: NextFunction) => {
  // 设置跨域的网站
  var orginList = [
    // "http://www.zhangpeiyue.com",
    // "http://www.alibaba.com",
    // "http://www.qq.com",
    // "http://www.baidu.com"
  ]
  
  
  if(req.headers.origin?.toLocaleLowerCase()){
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin", req.headers.origin);
  }
  //允许的header类型`
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization,'Origin',Accept,X-Requested-With");
  //跨域允许的请求方式
  res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
  if (req.method.toLowerCase() == 'options')
    res.sendStatus(200);  //让options尝试请求快速结束
  else
    next();
})
app.use('/moveApp', moveAppRoute)
app.listen(3000, () => {
  console.log("服务器启动");
})