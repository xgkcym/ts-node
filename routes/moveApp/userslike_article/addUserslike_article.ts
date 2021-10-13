import { Request, Response } from 'express'
import { v4 as uuid4 } from 'uuid'
import { Userslike_articleModel, Userslike_articleClass } from '../../../module/tables/userslike_article'
module.exports = async (req: Request, res: Response) => {
  req.body.id = uuid4()
  const userslike_articleClass = new Userslike_articleClass(req.body)
  const result = await Userslike_articleModel.add(userslike_articleClass)
  if (result) {
    res.send({
      mes: '点赞段子成功',
      status: 200
    })
  } else {
    res.send({
      mes: '点赞段子失败',
      status: 400
    })
  }
}