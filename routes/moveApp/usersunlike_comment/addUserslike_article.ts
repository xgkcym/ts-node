import { Request, Response } from 'express'
import { v4 as uuid4 } from 'uuid'
import { Userslike_commentClass, Userslike_commentModel } from '../../../module/tables/userslike_comment'
module.exports = async (req: Request, res: Response) => {
  req.body.id = uuid4()
  const userslike_commentClass = new Userslike_commentClass(req.body)
  const result = await Userslike_commentModel.add(userslike_commentClass)
  if (result) {
    res.send({
      mes: '点赞评论成功',
      status: 200
    })
  } else {
    res.send({
      mes: '点赞评论失败',
      status: 400
    })
  }
}