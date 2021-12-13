import {Request,Response} from 'express'
import {UserClass,UserModel} from '../../../module/tables/users'
module.exports = async(req:Request,res:Response)=>{
  const userClass = new UserClass(req.query)
  const data = await UserModel.get(userClass, [], true)
  res.send({
    status:200,
    data
  })
} 