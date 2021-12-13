import { Request, Response } from 'express'
import { v4 as uuid4 } from 'uuid'
import { Violation_articleModel, Violation_articleClass } from '../../../module/tables/violationArticle'
module.exports = async (req: Request, res: Response) => {
  const violation_articleClass = new Violation_articleClass()
  const result = await Violation_articleModel.get(violation_articleClass,[{table:'users',field:'uid'},{table:'article',field:'article_id',tableField:'article_id'}])
  res.send({
    status:200,
    data:result
  })
   
}