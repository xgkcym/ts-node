import { MysqlClass } from '../db'


export enum Comment2Field {
  uid = 'uid',
  aid = 'aid',
  comment_id = 'comment_id',
  article_id = 'article_id'
}

export type Comment2Type = {
  comment2_id?: string,
  uid?: string,
  aid?: string,
  article_id?:string
  comment_id?: string
  text?: string,
  image?: string,
  video?: string,
  audio?: string,
  create_time?: string
}

export class Comment2Class {
  comment2_id: string | undefined
  uid: string | undefined
  aid: string | undefined
  article_id:string |undefined
  comment_id: string | undefined
  text: string | undefined
  image: string | undefined
  video: string | undefined
  audio: string | undefined
  create_time: string | undefined
  constructor(info: Comment2Type) {
    this.comment2_id = info.comment2_id
    this.uid = info.uid
    this.aid = info.aid
    this.article_id = info.article_id
    this.comment_id = info.comment_id
    this.text = info.text
    this.image = info.image
    this.video = info.video
    this.audio = info.audio
    this.create_time = info.create_time
  }
}
export const Comment2Model = new MysqlClass<Comment2Class>('comment2')

