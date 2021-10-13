import { Request, Response } from 'express'
import { Usersunlike_commentClass, Usersunlike_commentModel,Usersunlike_commentType } from '../../../module/tables/usersunlike_comment'
module.exports = async (req: Request, res: Response) => {
  const usersunlike_commentClass = new Usersunlike_commentClass(req.query)
  let data:Usersunlike_commentType[] = await Usersunlike_commentModel.get(usersunlike_commentClass);
  if(data.length != 0){
    const result  = await  Usersunlike_commentModel.delete(data[0].id)
    if (result) {
      res.send({
        mes: '取消拉黑评论成功',
        status: 200
      })
    } else {
      res.send({
        mes: '取消拉黑评论失败',
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