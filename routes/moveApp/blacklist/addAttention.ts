import { Request, Response } from 'express'
import { v4 as uuid4 } from 'uuid'
// 操作关注表实例类
import { BlacklistClass, BlacklistModel } from "../../../module/tables/Blacklist";
module.exports = async (req: Request, res: Response) => {
  const blacklistClass = new BlacklistClass(req.body)
  const data: any = await BlacklistModel.get(blacklistClass);
  if (data.length == 0) {
    req.body.id = uuid4()
    const result: any = await BlacklistModel.add(new BlacklistClass(req.body));
    if (result) {
      res.send({
        mes: '拉黑用户成功',
        status: 200
      })
    } else {
      res.send({
        mes: '拉黑用户失败',
        status: 400
      })
    }
  } else {
    res.send({
      mes: '已关注',
      status: 422
    })
  }

}