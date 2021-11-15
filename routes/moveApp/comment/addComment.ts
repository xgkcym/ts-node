import { Request, Response } from 'express'
import { v4 as uuid4 } from 'uuid'
import { CommentClass, CommentModel } from '../.././../module/tables/comment'
module.exports = async (req: Request, res: Response) => {
  req.body.comment_id = uuid4()
  req.body.create_time = new Date().getTime()
  const commentClass = new CommentClass(req.body)
  const result = await CommentModel.add(commentClass)
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