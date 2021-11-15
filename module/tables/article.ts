import { MysqlClass } from '../db'


export enum ArticleField  {
  uid = 'uid',
}

export type ArticleType = {
  article_id?: string 
  uid?: string ,
  title?: string,
  article_type?:string,
  content_type?:string,
  content?:any,
  create_time?:string
}

export class ArticleClass {
  article_id: string  | undefined
  uid: string  | undefined
  title:string | undefined
  article_type:string | undefined
  content_type : string | undefined
  content : any | undefined
  create_time : string | undefined
  constructor(info:ArticleType){
    this.article_id = info.article_id
    this.uid = info.uid
    this.title = info.title
    this.article_type = info.article_type
    this.content_type = info.content_type
    this.content = info.content
    this.create_time = info.create_time
  }
}
export const ArticleModel = new MysqlClass<ArticleClass>('article')

