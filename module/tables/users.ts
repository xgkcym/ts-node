import { MysqlClass } from '../db'
export enum GerderType {
  male = '0',
  female = '1'
}
export enum RoleType{
  admin = '0',
  normal = '1',
  limit = '2'
}
export enum UserField {
  uid = 'uid',
  nickname = 'nickname',
  telphone = 'telphone',
  password = 'password',
  avatar = 'avatar',
  gender = 'gender',
  city = 'city',
  birthday = 'birthday',
  // 星座
  constellation = 'constellation',
  // 个性
  individuality = 'individuality',
  role = 'role',
  usable = 'usable'
}
export type UserType = {
  uid?: string ,
  nickname?: string,
  telphone?: string,
  password?:string
  avatar?: string
  gender?: GerderType,
  city?: string,
  birthday?: string,
  // 星座
  constellation?: string,
  // 个性
  individuality?: string
  role?:RoleType
  usable?:boolean
}

export class UserClass {
  uid: string  | undefined
  nickname: string | undefined
  telphone: string | undefined
  password:string | undefined
  avatar: string | undefined
  gender: GerderType | undefined
  city: string | undefined
  birthday: string | undefined
  constellation: string | undefined
  individuality: string | undefined
  role?:RoleType | undefined
  usable?:boolean | undefined
  constructor(info: UserType) {
    this.uid = info.uid
    this.nickname = info.nickname
    this.telphone = info.telphone
    this.password = info.password
    this.avatar = info.avatar
    this.gender = info.gender
    this.city = info.city
    this.birthday = info.birthday
    this.constellation = info.constellation
    this.individuality = info.individuality
    this.role = info.role
    this.usable = info.usable
  }
}
export const UserModel = new MysqlClass<UserClass>('users')

