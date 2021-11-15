import { MysqlClass } from '../db'
export enum BlacklistField  {
  uid = 'uid',
  aid = 'aid',
}

export type BlacklistType = {
  id?: string 
  uid?: string ,
  aid?: string 
}

export class BlacklistClass {
  id: string  | undefined
  uid: string  | undefined
  aid: string  | undefined

  constructor(info: BlacklistType) {
    this.uid = info.uid
    this.aid = info.aid
    this.id = info.id
  }
}
export const BlacklistModel = new MysqlClass<BlacklistClass>('blacklist')

