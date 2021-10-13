import { MysqlClass } from '../db'

export type Usersunlike_articleType = {
  id?: string 
  uid?: string ,
  article_id?: string 
}

export class Usersunlike_articleClass {
  id: string  | undefined
  uid: string  | undefined
  article_id: string  | undefined

  constructor(info: Usersunlike_articleType) {
    this.uid = info.uid
    this.article_id = info.article_id
    this.id = info.id
  }
}
export const Usersunlike_articleModel = new MysqlClass<Usersunlike_articleClass>('usersunlike_article')

