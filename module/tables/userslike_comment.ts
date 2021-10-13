import { MysqlClass } from '../db'

export type Userslike_commentType = {
  id?: string 
  uid?: string ,
  comment_id?: string 
}

export class Userslike_commentClass {
  id: string  | undefined
  uid: string  | undefined
  comment_id: string  | undefined

  constructor(info: Userslike_commentType) {
    this.uid = info.uid
    this.comment_id = info.comment_id
    this.id = info.id
  }
}
export const Userslike_commentModel = new MysqlClass<Userslike_commentClass>('userslike_comment')

