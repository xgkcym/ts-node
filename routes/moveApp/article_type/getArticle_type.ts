import {Request,Response} from 'express'
import {Article_typeClass,Article_typeModel} from '../../../module/tables/article_type'
module.exports = async(req:Request,res:Response)=>{
  const data =  await Article_typeModel.get(new Article_typeClass(req.query))
  res.send(data)
}