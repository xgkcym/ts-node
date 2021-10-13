import { Request, Response } from 'express'
// 操作关注表实例类
import { AttentionClass, AttentionField, AttentionModel,AttentionType } from "../../../module/tables/attention";
module.exports = async (req: Request, res: Response) => {
  const attentionClass = new AttentionClass(req.query)
  let data:any = await AttentionModel.get(attentionClass);
  if(data.length != 0){
    const result  = await  AttentionModel.delete(data[0].id)
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