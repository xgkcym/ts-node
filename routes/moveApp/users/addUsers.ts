import { Request, Response } from 'express'
import { v4 as uuidv4 } from 'uuid';
import validateUsers from './validateUsers'
// 操作用户实例类
import { UserClass, UserModel } from "../../../module/tables/users";
import bcrypt from 'bcrypt'
module.exports = async (req: Request, res: Response) => {
    
    try {
      await  validateUsers(req.body)
    } catch (error) {
         res.send({ msg: error, status: 400 })
         return
    }
    const uuid = uuidv4()
    req.body.uid = uuid
    req.body.usable = true
    req.body.nickname ='新用户'+ req.body.telphone 
    if (!req.body.role) {
        req.body.role = '1'
    }
    if(!req.body.avatar){
        req.body.avatar='/moveApp/avatar/default.webp' 
    }
    if (req.body.password) {
        const sail = await bcrypt.genSalt(11);
        const password= await bcrypt.hash(req.body.password, sail);
        req.body.password = password
    }
    const userClass = new UserClass(req.body)
    const result = await UserModel.add(userClass)
    const data = await UserModel.get(req.body)
    if (result) {
        res.send({
            data,
            status: 200
        })
    } else {
        res.send({
            mes: '创建用户失败',
            status: 400
        })
    }
}