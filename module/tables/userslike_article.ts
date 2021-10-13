import { MysqlClass } from '../db'

export type Userslike_articleType = {
  id?: string 
  uid?: string ,
  article_id?: string 
}

export class Userslike_articleClass {
  id: string  | undefined
  uid: string  | undefined
  article_id: string  | undefined

  constructor(info: Userslike_articleType) {
    this.uid = info.uid
    this.article_id = info.article_id
    this.id = info.id
  }
}
export const Userslike_articleModel = new MysqlClass<Userslike_articleClass>('userslike_article')

