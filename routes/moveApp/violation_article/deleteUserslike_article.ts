import { Request, Response } from 'express'
import { Violation_articleModel, Violation_articleClass, Violation_articleType } from '../../../module/tables/violationArticle'
module.exports = async (req: Request, res: Response) => {
  const violation_articleClass = new Violation_articleClass(req.query)
  const result = await Violation_articleModel.delete({article_id:violation_articleClass.article_id})
  if (result) {
    res.send({
      mes: '取消举报段子成功',
      status: 200
    })
  } else {
    res.send({
      mes: '取消举报段子失败',
      status: 400
    })
  }
}