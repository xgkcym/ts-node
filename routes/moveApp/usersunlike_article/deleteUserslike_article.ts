import { Request, Response } from 'express'
import { Usersunlike_articleModel, Usersunlike_articleClass,Usersunlike_articleType } from '../../../module/tables/usersunlike_article'
module.exports = async (req: Request, res: Response) => {
  const usersunlike_articleClass = new Usersunlike_articleClass(req.query)
  let data:any = await Usersunlike_articleModel.get(usersunlike_articleClass);
  if(data.length != 0){
    const result  = await  Usersunlike_articleModel.delete(data[0].id)
    if (result) {
      res.send({
        mes: '取消拉黑段子成功',
        status: 200
      })
    } else {
      res.send({
        mes: '取消拉黑段子失败',
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