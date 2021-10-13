import {Request,Response} from 'express'
import {ArticleClass,ArticleModel} from '../../../module/tables/article'
import {v4 as uuid4} from 'uuid'
module.exports =async (req:Request,res:Response)=>{
    req.body.article_id = uuid4()
    req.body.create_time = new Date().toLocaleString()
    const articleClass = new ArticleClass(req.body)
    const result = await ArticleModel.add(articleClass)
    if (result) {
        res.send({
            mes: '发布文章成功',
            status: 200
        })
    } else {
        res.send({
            mes: '发布文章失败',
            status: 400
        })
    }
}