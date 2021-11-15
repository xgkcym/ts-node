import { Request, Response } from 'express'
import { v4 as uuid4 } from 'uuid'
import { Violation_articleModel, Violation_articleClass } from '../../../module/tables/violationArticle'
module.exports = async (req: Request, res: Response) => {
  req.body.id = uuid4()
  const violation_articleClass = new Violation_articleClass(req.body)
  const result = await Violation_articleModel.add(violation_articleClass)
  if (result) {
    res.send({
      mes: '举报段子成功',
      status: 200
    })
  } else {
    res.send({
      mes: '举报段子失败',
      status: 400
    })
  }
}