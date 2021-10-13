import { Request, Response } from 'express'
import { v4 as uuid4 } from 'uuid'
import { Usersunlike_articleClass, Usersunlike_articleModel } from '../../../module/tables/usersunlike_article'
module.exports = async (req: Request, res: Response) => {
  req.body.id = uuid4()
  const usersunlike_articleClass = new Usersunlike_articleClass(req.body)
  const result = await Usersunlike_articleModel.add(usersunlike_articleClass)
  if (result) {
    res.send({
      mes: '拉黑段子成功',
      status: 200
    })
  } else {
    res.send({
      mes: '拉黑段子失败',
      status: 400
    })
  }
}