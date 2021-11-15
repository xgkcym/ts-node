import { Request, Response } from 'express'
import jsonwebtoken from 'jsonwebtoken'
// 操作用户实例类
import { UserClass, UserModel,UserType } from "../../../module/tables/users";
import bcrypt from 'bcrypt'
module.exports  = async(req:any,res:Response)=>{
  const userClass = new UserClass({ telphone: req.body.telphone })
  const result: any[] = await UserModel.get(userClass)
  const validatePassword = await bcrypt.compare(req.body.password,result[0].password) 
  
  if(result.length!=0 && validatePassword){
    let data:any = {}
    for(let i in result[0] ){
      data = {...data,[i]:result[0][i]}
    }
    const token = jsonwebtoken.sign(data,'token')
    data.token = token
    req.session.uid = data.uid
    res.json({status:200,data})
  }else{
    res.json({
      status:400,
      msg:'登录失败'
    })
  }
}