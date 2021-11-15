import { MysqlClass } from '../db'

export type Violation_articleType = {
  id?: string
  uid?: string,
  article_id?: string
}

export class Violation_articleClass {
  id: string | undefined
  uid: string | undefined
  article_id: string | undefined

  constructor(info: Violation_articleType) {
    this.uid = info.uid
    this.article_id = info.article_id
    this.id = info.id
  }
}
export const Violation_articleModel = new MysqlClass<Violation_articleClass>('violation_article')

