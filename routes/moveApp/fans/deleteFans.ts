import { Request, Response } from 'express'
// 操作关注表实例类
import { FansClass, FansField, FansModel,FansType } from "../../../module/tables/Fans";
module.exports = async (req: Request, res: Response) => {
  const fansClass = new FansClass(req.query)
  let data:any = await FansModel.get(fansClass);
  if(data.length != 0){
    const result  = await  FansModel.delete(data[0].id)
    if (result) {
      res.send({
        mes: '取消关注用户成功',
        status: 200
      })
    } else {
      res.send({
        mes: '取消关注用户失败',
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