import { Request, Response } from 'express'
import { Comment2Class, Comment2Model } from '../../../module/tables/comment2'
module.exports = async (req: Request, res: Response) => {
  const commentClass = new Comment2Class(req.query)
  const result = await Comment2Model.delete(commentClass.comment_id);
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