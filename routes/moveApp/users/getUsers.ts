// 操作用户实例类
import { UserClass, UserModel } from "../../../module/tables/users";
import {Request,Response} from 'express'
import deleteField from '../../../util/deleteField'
module.exports =  async(req:Request,res:Response)=>{
  req.body.password = ''
  const userClass = new UserClass(req.query)
  //  外键查询
  const data:any = await UserModel.get(userClass)
  const result = data.map((v:any)=>deleteField(v,['password']))
  res.send({
    status:200,
    data:result
  })
}