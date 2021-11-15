import { Request, Response } from 'express'
import { CommentClass, CommentModel } from '../.././../module/tables/comment'
import { Comment2Class, Comment2Model, Comment2Type } from '../../../module/tables/comment2'
import { Userslike_commentClass, Userslike_commentModel } from '../../../module/tables/userslike_comment'
import { Usersunlike_commentClass, Usersunlike_commentModel } from '../../../module/tables/usersunlike_comment'
module.exports = async (req: Request, res: Response) => {
  const commentClass = new CommentClass(req.query)
  const comment2Class = new Comment2Class({ comment_id: commentClass.comment_id })
  const c2 = await Comment2Model.get(comment2Class)
  c2.map(async (v: Comment2Type) => {
    const userslike_commentClass = new Userslike_commentClass({ comment_id: v.comment2_id })
    const userslike_commentdata: any[] = await Userslike_commentModel.get(userslike_commentClass)
    for (let i = 0; i < userslike_commentdata.length; i++) {
      await Userslike_commentModel.delete({ id: userslike_commentdata[i].id })
    }
    const usersunlike_commentClass = new Usersunlike_commentClass({ comment_id: v.comment2_id })
    const usersunlike_commentdata: any[] = await Usersunlike_commentModel.get(usersunlike_commentClass)
    for (let j = 0; j < usersunlike_commentdata.length; j++) {
      await Usersunlike_commentModel.delete({ id: usersunlike_commentdata[j].id })
    }
    await Comment2Model.delete({ comment2_id: v.comment2_id })
  })
  const userslike_commentClass = new Userslike_commentClass({ comment_id: commentClass.comment_id })
  const userslike_commentdata: any[] = await Userslike_commentModel.get(userslike_commentClass)
  for (let i = 0; i < userslike_commentdata.length; i++) {
    await Userslike_commentModel.delete({ id: userslike_commentdata[i].id })
  }
  const usersunlike_commentClass = new Usersunlike_commentClass({ comment_id: commentClass.comment_id })
  const usersunlike_commentdata: any[] = await Usersunlike_commentModel.get(usersunlike_commentClass)
  for (let j = 0; j < usersunlike_commentdata.length; j++) {
    await Usersunlike_commentModel.delete({ id: usersunlike_commentdata[j].id })
  }
  const result = await CommentModel.delete({ comment_id: commentClass.comment_id });
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