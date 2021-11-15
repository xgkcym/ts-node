import {Request,Response} from 'express'
// 操作关注表实例类
import { BlacklistClass, BlacklistModel,BlacklistField } from "../../../module/tables/Blacklist";
import deleteField from '../../../util/deleteField'
module.exports = async (req:any, res:Response) => {
  const blacklistClass = new BlacklistClass({uid:req.query.uid})
  const data:any = await BlacklistModel.get(blacklistClass,[{table:'users',field:BlacklistField.aid}])
  const result = data.map((v:any)=>deleteField(v,['uid','aid']))
  res.send(result)
}