import { Request, Response } from 'express'
import { Violation_articleModel, Violation_articleClass,Violation_articleType } from '../../../module/tables/violationArticle'
module.exports = async (req: Request, res: Response) => {
  const violation_articleClass = new Violation_articleClass(req.query)
  let data:any = await Violation_articleModel.get(violation_articleClass);
  if(data.length != 0){
    const result  = await  Violation_articleModel.delete(data[0].id)
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
  }else{
    res.send({
      mes: '参数不正确',
      status: 400
    })
  }
}