import { Request, Response } from 'express'
import { v4 as uuid4 } from 'uuid'
import { Comment2Class, Comment2Model } from '../../../module/tables/comment2'
module.exports = async (req: Request, res: Response) => {
  req.body.comment2_id = uuid4()
  req.body.create_time = new Date().getTime()
  const commentClass = new Comment2Class(req.body)
  const result = await Comment2Model.add(commentClass)
  if (result) {
    res.send({
      mes: '评论成功',
      status: 200
    })
  } else {
    res.send({
      mes: '评论失败',
      status: 400
    })
  }
}