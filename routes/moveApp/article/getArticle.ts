import { Request, Response } from 'express'
import articleData from './articleData'
module.exports = async (req: any, res: Response) => {
    const { pagesize = 10, page = 1 } = req.query
    let ArticleArr:any =  await articleData(req, res)
    let total = ArticleArr.length
    let article:any[] = []
    for(let i=(Number(Number(page))-1)*Number(pagesize);i<ArticleArr.length;i++){
        if(article.length >= Number(pagesize)){
            return
        }
        article.push(ArticleArr[i]) 
    }
    let maxpage = Math.ceil(total / Number(pagesize))
    res.send({
        total,
        pagesize:Number(pagesize),
        page:Number(page),
        maxpage,
        article,
        status:200
    })
}