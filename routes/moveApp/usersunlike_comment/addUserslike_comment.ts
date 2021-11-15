import { Request, Response } from 'express'
import { v4 as uuid4 } from 'uuid'
import { Usersunlike_commentClass, Usersunlike_commentModel } from '../../../module/tables/usersunlike_comment'
module.exports = async (req: Request, res: Response) => {
  req.body.id = uuid4()
  const usersunlike_commentClass = new Usersunlike_commentClass(req.body)
  const result = await Usersunlike_commentModel.add(usersunlike_commentClass)
  if (result) {
    res.send({
      mes: '拉黑评论成功',
      status: 200
    })
  } else {
    res.send({
      mes: '拉黑评论失败',
      status: 400
    })
  }
}