import { MysqlClass } from '../db'

export type Usersunlike_commentType = {
  id?: string 
  uid?: string ,
  comment_id?: string 
}

export class Usersunlike_commentClass {
  id: string  | undefined
  uid: string  | undefined
  comment_id: string  | undefined

  constructor(info: Usersunlike_commentType) {
    this.uid = info.uid
    this.comment_id = info.comment_id
    this.id = info.id
  }
}
export const Usersunlike_commentModel = new MysqlClass<Usersunlike_commentClass>('usersunlike_comment')

