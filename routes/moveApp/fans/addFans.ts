import { Request, Response } from 'express'
import { v4 as uuid4 } from 'uuid'
// 操作关注表实例类
import { FansClass, FansModel } from "../../../module/tables/Fans";
module.exports = async (req: Request, res: Response) => {
  const fansClass = new FansClass(req.body)
  const data: any = await FansModel.get(fansClass);
  if (data.length == 0) {
    req.body.id = uuid4()
    const result: any = await FansModel.add(new FansClass(req.body));
    if (result) {
      res.send({
        mes: '关注用户成功',
        status: 200
      })
    } else {
      res.send({
        mes: '关注用户失败',
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