import { Request, Response } from 'express'
import { Userslike_articleModel, Userslike_articleClass,Userslike_articleType } from '../../../module/tables/userslike_article'
module.exports = async (req: Request, res: Response) => {
  const userslike_articleClass = new Userslike_articleClass(req.query)
  let data:any = await Userslike_articleModel.get(userslike_articleClass);
  if(data.length != 0){
    const result  = await  Userslike_articleModel.delete(data[0].id)
    if (result) {
      res.send({
        mes: '取消点赞段子成功',
        status: 200
      })
    } else {
      res.send({
        mes: '取消点赞段子失败',
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