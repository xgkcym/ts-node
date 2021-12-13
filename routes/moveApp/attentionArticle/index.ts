import { Request, Response } from 'express'
import { AttentionClass, AttentionField, AttentionModel } from '../../../module/tables/attention'
import articleData from './articleData'
module.exports = async (req: any, res: Response) => {
    const { pagesize = 10, page = 1 } = req.query
    const attentionClass = new AttentionClass({ uid: req.query.uid })
    const data: any = await AttentionModel.get(attentionClass, [{ table: 'users', field: AttentionField.aid }])
    let ArticleArr: any[] = []
    for (let i = 0; i < data.length; i++) {
        const article: any = await articleData({ query: { uid: data[i].aid } }, res)
        ArticleArr = [...ArticleArr, ...article]
    }
    let total = ArticleArr.length
    let article: any[] = []
    for (let i = (Number(Number(page)) - 1) * Number(pagesize); i < ArticleArr.length; i++) {
        if (article.length >= Number(pagesize)) {
            return
        }
        article.push(ArticleArr[i])
    }
    let maxpage = Math.ceil(total / Number(pagesize))
    function sortData(a:any, b:any):any{
        return b.create_time - a.create_time
    }
    article.sort(sortData);
    res.send({
        total,
        pagesize: Number(pagesize),
        page: Number(page),
        maxpage,
        article,
        status: 200
    })
}