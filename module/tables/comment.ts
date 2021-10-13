import { MysqlClass } from '../db'


export enum CommentField {
  uid = 'uid',
  aid = 'aid',
  article_id = 'article_id'
}

export type CommentType = {
  comment_id?: string,
  uid?: string,
  aid?: string,
  article_id?: string
  text?: string,
  image?: string,
  video?: string,
  audio?: string,
  create_time?: string
}

export class CommentClass {
  comment_id: string | undefined
  uid: string | undefined
  aid: string | undefined
  article_id: string | undefined
  text: string | undefined
  image: string | undefined
  video: string | undefined
  audio: string | undefined
  create_time: string | undefined
  constructor(info: CommentType) {
    this.comment_id = info.comment_id
    this.uid = info.uid
    this.aid = info.aid
    this.article_id = info.article_id
    this.text = info.text
    this.image = info.image
    this.video = info.video
    this.audio = info.audio
    this.create_time = info.create_time
  }
}
export const CommentModel = new MysqlClass<CommentClass>('comment')

