import { Request, Response } from 'express'
import validateUsers from './validateUsers'
// 操作用户实例类
import { UserClass, UserModel } from "../../../module/tables/users";
import fs from 'fs'
import path from 'path'
module.exports = async (req: Request, res: Response) => {
    // try {
    //     validateUsers(req.body)
    // } catch (error) {
    //     return res.send({ msg: error, status: 400 })
    // }

    const userClass = new UserClass(req.body)
    if (req.body.avatar) {
        const userClass = new UserClass({ uid: req.body.uid })
        const res: any = await UserModel.get(userClass)
        if (res[0].avatar.split('avatar')[1].substr(1) != 'default.webp') {
            fs.unlinkSync(path.join(__dirname, '..', '..', '..', 'public', 'moveApp', 'avatar') + '\\' + res[0].avatar.split('avatar')[1].substr(1))
        }
    }
    const result = await UserModel.modify(req.body.id, userClass)
    
    if (result) {
        res.send({
            mes: '修改用户成功',
            status: 200
        })
    } else {
        res.send({
            mes: '修改用户失败',
            status: 400
        })
    }
}