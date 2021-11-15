import { Request, Response } from 'express'
import { ArticleClass, ArticleModel, ArticleField, ArticleType } from '../../../module/tables/article'
import { Userslike_articleClass, Userslike_articleModel, Userslike_articleType } from '../../../module/tables/userslike_article'
import { Usersunlike_articleClass, Usersunlike_articleModel } from '../../../module/tables/usersunlike_article'
import { CommentModel, CommentClass, CommentType } from '../../../module/tables/comment'
import { Comment2Class, Comment2Model, Comment2Type } from '../../../module/tables/comment2'
import { Userslike_commentClass, Userslike_commentModel } from '../../../module/tables/userslike_comment'
import { Usersunlike_commentClass, Usersunlike_commentModel } from '../../../module/tables/usersunlike_comment'
export default (req: any, res: any) => {
    return new Promise(async (resolve, reject) => {
        const articleClass = new ArticleClass(req.query)
        const data: ArticleType[] = await ArticleModel.get(articleClass, [{ table: 'users', field: ArticleField.uid }])
        let ArticleArr: any[] = []
        for (let i = 0; i < data.length; i++) {
            let Articledata: any = data[i]
            Articledata.content = Articledata.content.split(',')
            const userslike_articleClass = new Userslike_articleClass({ article_id: data[i].article_id })
            const userslike_articleModel: Userslike_articleType[] = await Userslike_articleModel.get(userslike_articleClass)
            Articledata.likeNum = userslike_articleModel.length
            const userslike_articleModelIndex = userslike_articleModel.findIndex((v: any) => {
                if (req.session.uid) {
                    return v.uid == req.session.uid
                } else {
                    return v.uid == 'xcadascasx'
                }
            })


            if (userslike_articleModelIndex == -1) {
                Articledata.islike = false
            } else {
                Articledata.islike = true
            }
            const usersunlike_articleClass = new Usersunlike_articleClass({ article_id: data[i].article_id })
            const usersunlike_articleModel = await Usersunlike_articleModel.get(usersunlike_articleClass)
            Articledata.unlikeNum = usersunlike_articleModel.length
            const usersunlike_articleModelIndex = usersunlike_articleModel.findIndex((v: any) => {
                if (req.session.uid) {
                    return v.uid == req.session.uid
                } else {
                    return v.uid == 'xcadascasx'
                }
            })
            if (usersunlike_articleModelIndex == -1) {
                Articledata.isunlike = false
            } else {
                Articledata.isunlike = true
            }
            const commentClass = new CommentClass({ article_id: data[i].article_id })
            const commentdata = await CommentModel.get(commentClass, [{ table: 'users', field: 'uid' }])
            let Comment1data = []
            for (let j = 0; j < commentdata.length; j++) {
                const Commentdata: any = commentdata[j]
                const userslike_commentClass = new Userslike_commentClass({ comment_id: commentdata[j].comment_id })
                const userslike_commentModel = await Userslike_commentModel.get(userslike_commentClass)
                Commentdata.likeNum = userslike_commentModel.length
                const userslike_commentModelIndex = userslike_commentModel.findIndex((v: any) => {
                    if (req.session.uid) {
                        return v.uid == req.session.uid
                    } else {
                        return v.uid == 'xcadascasx'
                    }
                })
                if (userslike_commentModelIndex == -1) {
                    Commentdata.islike = false
                } else {
                    Commentdata.islike = true
                }
                const usersunlike_commentClass = new Usersunlike_commentClass({ comment_id: commentdata[j].comment_id })
                const usersunlike_commentModel = await Usersunlike_commentModel.get(usersunlike_commentClass)
                Commentdata.unlikeNum = usersunlike_commentModel.length
                const usersunlike_commentModelIndex = usersunlike_commentModel.findIndex((v: any) => {
                    if (req.session.uid) {
                        return v.uid == req.session.uid
                    } else {
                        return v.uid == 'xcadascasx'
                    }
                })
                if (usersunlike_commentModelIndex == -1) {
                    Commentdata.isunlike = false
                } else {
                    Commentdata.isunlike = true
                }
                const comment2Class = new Comment2Class({ comment_id: commentdata[j].comment_id })
                const comment2data = await Comment2Model.get(comment2Class, [{ table: 'users', field: 'uid' }])
                let Commen2tdata = []
                for (let k = 0; k < comment2data.length; k++) {
                    let Commentdata: any = comment2data[k]
                    const userslike_commentClass = new Userslike_commentClass({ comment_id: comment2data[k].comment2_id })
                    const userslike_commentModel = await Userslike_commentModel.get(userslike_commentClass)
                    Commentdata.likeNum = userslike_commentModel.length
                    const userslike_commentModelIndex = userslike_commentModel.findIndex((v: any) => {
                        if (req.session.uid) {
                            return v.uid == req.session.uid
                        } else {
                            return v.uid == 'xcadascasx'
                        }
                    })
                    if (userslike_commentModelIndex == -1) {
                        Commentdata.islike = false
                    } else {
                        Commentdata.islike = true
                    }
                    const usersunlike_commentClass = new Usersunlike_commentClass({ comment_id: comment2data[k].comment2_id })
                    const usersunlike_commentModel = await Usersunlike_commentModel.get(usersunlike_commentClass)
                    Commentdata.unlikeNum = usersunlike_commentModel.length
                    const usersunlike_commentModelIndex = usersunlike_commentModel.findIndex((v: any) => {
                        if (req.session.uid) {
                            return v.uid == req.session.uid
                        } else {
                            return v.uid == 'xcadascasx'
                        }
                    })
                    if (usersunlike_commentModelIndex == -1) {
                        Commentdata.isunlike = false
                    } else {
                        Commentdata.isunlike = true
                    }
                    Commen2tdata.push(Commentdata)
                }
                Commentdata.comment = Commen2tdata
                Comment1data.push(Commentdata)
            }
            Articledata.comment = Comment1data
            ArticleArr.push(Articledata)
        }
        resolve(ArticleArr)
    })
}