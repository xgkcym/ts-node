import { Request, Response } from 'express'
import { ArticleClass, ArticleModel, ArticleType } from '../../../module/tables/article'
import { CommentClass, CommentModel,CommentType } from '../.././../module/tables/comment'
import { Comment2Class, Comment2Model ,Comment2Type} from '../.././../module/tables/comment2'
module.exports = async (req: Request, res: Response) => {
  const data: ArticleType[] = await ArticleModel.get(new ArticleClass(req.query))
  if (data.length != 0) {
    const commentclass = new CommentClass({ article_id: data[0].article_id })
    const comment2class = new Comment2Class({ article_id: data[0].article_id })
    const c1 = await CommentModel.get(commentclass)
    const c2 = await Comment2Model.get(comment2class)
    c2.forEach(async(v:Comment2Type)=>{
      await CommentModel.delete(v.comment2_id as string)
     })
     c1.forEach(async(v:CommentType)=>{
      await CommentModel.delete(v.comment_id as string)
    })
    const result = await ArticleModel.delete(data[0].article_id as string)
    if (result) {
      res.send({
        mes: '取消关注用户成功',
        status: 200
      })
    } else {
      res.send({
        mes: '取消关注用户失败',
        status: 400
      })
    }
  } else {
    res.send({
      mes: '参数不正确',
      status: 400
    })
  }

}