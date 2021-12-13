import { ArticleClass, ArticleModel, ArticleType } from '../../../module/tables/article'
import { CommentClass, CommentModel, CommentType } from '../.././../module/tables/comment'
import { Comment2Class, Comment2Model, Comment2Type } from '../.././../module/tables/comment2'
import { Userslike_commentClass, Userslike_commentModel } from '../../../module/tables/userslike_comment'
import { Usersunlike_commentClass, Usersunlike_commentModel } from '../../../module/tables/usersunlike_comment'
import { Userslike_articleClass, Userslike_articleModel } from '../../../module/tables/userslike_article'
import { Usersunlike_articleClass, Usersunlike_articleModel } from '../../../module/tables/usersunlike_article'
import { Violation_articleModel } from '../../../module/tables/violationArticle'
import fs from 'fs'
import path from 'path'
module.exports = async (req: any, res: any) => {
  const data: ArticleType[] = await ArticleModel.get(new ArticleClass(req.query))
  if (data.length != 0) {
    const commentclass = new CommentClass({ article_id: data[0].article_id })
    const comment2class = new Comment2Class({ article_id: data[0].article_id })
    const c1 = await CommentModel.get(commentclass)
    const c2 = await Comment2Model.get(comment2class)
    for (let x = 0; x < c2.length; x++) {
      const userslike_commentClass = new Userslike_commentClass({ comment_id: c2[x].comment2_id })
      const userslike_commentdata: any[] = await Userslike_commentModel.get(userslike_commentClass)
      for (let i = 0; i < userslike_commentdata.length; i++) {
        await Userslike_commentModel.delete({ id: userslike_commentdata[i].id })
      }
      const usersunlike_commentClass = new Usersunlike_commentClass({ comment_id: c2[x].comment2_id })
      const usersunlike_commentdata: any[] = await Usersunlike_commentModel.get(usersunlike_commentClass)
      for (let j = 0; j < usersunlike_commentdata.length; j++) {
        await Usersunlike_commentModel.delete({ id: usersunlike_commentdata[j].id })
      }
      await Comment2Model.delete( {comment2_id:c2[x].comment2_id})
    }
    for (let y = 0; y < c1.length; y++) {
      const userslike_commentClass = new Userslike_commentClass({ comment_id: c1[y].comment_id })
      const userslike_commentdata: any[] = await Userslike_commentModel.get(userslike_commentClass)
      for (let i = 0; i < userslike_commentdata.length; i++) {
        await Userslike_commentModel.delete({ id: userslike_commentdata[i].id })
      }
      const usersunlike_commentClass = new Usersunlike_commentClass({ comment_id: c1[y].comment_id })
      const usersunlike_commentdata: any[] = await Usersunlike_commentModel.get(usersunlike_commentClass)
      for (let j = 0; j < usersunlike_commentdata.length; j++) {
        await Usersunlike_commentModel.delete({ id: usersunlike_commentdata[j].id })
      }
      await CommentModel.delete({comment_id:c1[y].comment_id})
    }

    const userslike_articleClass = new Userslike_articleClass({ article_id: data[0].article_id })
    const userslike_articledata: any[] = await Userslike_articleModel.get(userslike_articleClass)
    for (let i = 0; i < userslike_articledata.length; i++) {
      await Userslike_articleModel.delete({ id: userslike_articledata[i].id })
    }
    const usersunlike_articleClass = new Usersunlike_articleClass({ article_id: data[0].article_id })
    const usersunlike_articledata: any[] = await Usersunlike_articleModel.get(usersunlike_articleClass)
    for (let j = 0; j < usersunlike_articledata.length; j++) {
      await Usersunlike_articleModel.delete({ id: usersunlike_articledata[j].id })
    }
    await Violation_articleModel.delete({ article_id: data[0].article_id })
    if(data[0].content){
      data[0].content.split(',').map((v:any)=>{
        fs.unlinkSync(path.join(__dirname,'..','..','..','public','moveApp','article')+'\\'+v.split('article')[1].substr(1))
      })
    }
    const result = await ArticleModel.delete({article_id:data[0].article_id })
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