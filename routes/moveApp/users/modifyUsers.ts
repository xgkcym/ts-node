import { Request, Response } from 'express'
import validateUsers from './validateUsers'
// 操作用户实例类
import { UserClass, UserModel } from "../../../module/tables/users";
module.exports = async (req: Request, res: Response) => {
    // try {
    //     validateUsers(req.body)
    // } catch (error) {
    //     return res.send({ msg: error, status: 400 })
    // }
    const userClass = new UserClass(req.body)
    const result =  await UserModel.modify(req.body.id,userClass)
    if(result){
        res.send({
            mes:'修改用户成功',
            status:200
        })
    }else{
        res.send({
            mes:'修改用户失败',
            status:400
        })
    }
}