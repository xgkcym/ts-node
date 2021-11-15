import { Request, Response } from 'express'
import { Userslike_commentClass, Userslike_commentModel,Userslike_commentType } from '../../../module/tables/userslike_comment'
module.exports = async (req: Request, res: Response) => {
  const userslike_commentClass = new Userslike_commentClass(req.query)
  let data:Userslike_commentType[] = await Userslike_commentModel.get(userslike_commentClass);
  if(data.length != 0){
    const result  = await  Userslike_commentModel.delete(data[0].id)
    if (result) {
      res.send({
        mes: '取消点赞评论成功',
        status: 200
      })
    } else {
      res.send({
        mes: '取消点赞评论失败',
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