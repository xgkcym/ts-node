import {Request,Response} from 'express'
// 操作关注表实例类
import { FansClass, FansModel,FansField } from "../../../module/tables/Fans";
import deleteField from '../../../util/deleteField'
module.exports = async (req:any, res:Response) => {
  const fansClass = new FansClass({uid:req.query.uid})
  const data:any = await FansModel.get(fansClass,[{table:'users',field:FansField.aid}])
  const result = data.map((v:any)=>deleteField(v,['uid','aid']))
  res.send(result)
}