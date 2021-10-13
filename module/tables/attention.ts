import { MysqlClass } from '../db'


export enum AttentionField  {
  uid = 'uid',
  aid = 'aid',
}

export type AttentionType = {
  id?: string 
  uid?: string ,
  aid?: string 
}

export class AttentionClass {
  id: string  | undefined
  uid: string  | undefined
  aid: string  | undefined

  constructor(info: AttentionType) {
    this.uid = info.uid
    this.aid = info.aid
    this.id = info.id
  }
}
export const AttentionModel = new MysqlClass<AttentionClass>('attention')

