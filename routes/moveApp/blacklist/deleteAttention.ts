import { Request, Response } from 'express'
// 操作关注表实例类
import { BlacklistClass, BlacklistField, BlacklistModel,BlacklistType } from "../../../module/tables/Blacklist";
module.exports = async (req: Request, res: Response) => {
  const blacklistClass = new BlacklistClass(req.query)
  let data:any = await BlacklistModel.get(blacklistClass);
  if(data.length != 0){
    const result  = await  BlacklistModel.delete(data[0].id)
    if (result) {
      res.send({
        mes: '取消拉黑用户成功',
        status: 200
      })
    } else {
      res.send({
        mes: '取消拉黑用户失败',
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