import { MysqlClass } from '../db'


export enum FansField  {
  uid = 'uid',
  aid = 'aid',
}

export type FansType = {
  id?: string 
  uid?: string ,
  aid?: string 
}

export class FansClass {
  id: string  | undefined
  uid: string  | undefined
  aid: string  | undefined

  constructor(info: FansType) {
    this.uid = info.uid
    this.aid = info.aid
    this.id = info.id
  }
}
export const FansModel = new MysqlClass<FansClass>('fans')

