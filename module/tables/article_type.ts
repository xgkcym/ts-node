import { MysqlClass } from '../db'

export type Article_typeType = {
  id?: string | number
  type?:string
}

export class Article_typeClass {
  id: string | number | undefined
  type?: string  | undefined

  constructor(info: Article_typeType) {
    this.id = info.id
    this.type = info.type
  }
}
export const Article_typeModel = new MysqlClass<Article_typeClass>('article_type')

