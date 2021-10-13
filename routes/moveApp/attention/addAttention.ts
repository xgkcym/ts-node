import { Request, Response } from 'express'
import { v4 as uuid4 } from 'uuid'
// 操作关注表实例类
import { AttentionClass, AttentionModel } from "../../../module/tables/attention";
module.exports = async (req: Request, res: Response) => {
  const attentionClass = new AttentionClass(req.body)
  const data: any = await AttentionModel.get(attentionClass);
  if (data.length == 0) {
    req.body.id = uuid4()
    const result: any = await AttentionModel.add(new AttentionClass(req.body));
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