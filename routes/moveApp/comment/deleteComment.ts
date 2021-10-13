import { Request, Response } from 'express'
import { CommentClass, CommentModel } from '../.././../module/tables/comment'
module.exports = async (req: Request, res: Response) => {
  const commentClass = new CommentClass(req.query)
  const result = await CommentModel.delete(commentClass.comment_id);
  if (result) {
    res.send({
      mes: '删除评论成功',
      status: 200
    })
  } else {
    res.send({
      mes: '删除评论失败',
      status: 400
    })
  }
}