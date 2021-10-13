import {Request,Response} from 'express'
// 操作关注表实例类
import { AttentionClass, AttentionModel,AttentionField } from "../../../module/tables/attention";
import deleteField from '../../../util/deleteField'
module.exports = async (req:any, res:Response) => {
  const attentionClass = new AttentionClass(req.query.uid)
  const data:any = await AttentionModel.get(attentionClass,[{table:'users',field:AttentionField.aid}])
  const result = data.map((v:any)=>deleteField(v,['uid','aid']))
  res.send(result)
}