import Express, { Request, Response, NextFunction } from "express";
import jsonwebtoken from 'jsonwebtoken'
module.exports = (req: any, res: Response, next: NextFunction) => {
  // console.log(req.path+'@'+req.method);
  if (req.path == '/login' || (req.path == '/users' && req.method == 'POST') || (req.path == '/article' && req.method == 'GET`')) {
    return next()
  }
  const token: any = req.headers.authorization
  jsonwebtoken.verify(token, "token", (err: any, decode: any) => {
    // console.log("err",err) //null就代表没有报错
    if (err) { //一旦报错了，说明用户信息校验失败
      console.log("没用token,或token错误");
      res.send({
        status: 400,
        msg: "token失效"
      })

    } else { //校验成功
      console.log("校验成功");
      if (!req.session.uid) {
        res.send({
          status: 400,
          msg: "账号密码储存过期,需重新登录"
        })
      }
      if (req.method == 'POST' ||  req.method == 'PUT' ) {
        if (!req.body.uid) {
          req.body.uid = req.session.uid
        }
      } else if (req.method == 'DELETE'  || (req.method == 'GET' && req.path != '/article') || (req.method == 'GET' && req.path != '/users')) {
        if (!req.query.uid) {
          req.query.uid = req.session.uid
        }
      }
      next()
    }
  })
}