import { UserType, GerderType, RoleType, UserModel, UserClass } from '../../../module/tables/users'
function validateTelphone(value: string) {
  const regular = /^[1](([3][0-9])|([4][0,1,4-9])|([5][0-3,5-9])|([6][2,5,6,7])|([7][0-8])|([8][0-9])|([9][0-3,5-9]))[0-9]{8}$/;
  return regular.test(value);
};
//校验密码：只能输入6-20个字母、数字、下划线  function isPasswd(s) 
function validatePassword(value: string) {
  const regular = /^(\w){6,16}$/;
  return regular.test(value);
}

export default async (info: UserType) => {
  if (info.nickname && (info.nickname.length < 1 || info.nickname.length > 16)) {
    throw new Error("用户名不符合规则,长度应在1~16");
  }
  if (!info.telphone) {
    throw new Error("请输入手机号码");
  } else {
    const userClass = new UserClass({ telphone: info.telphone })
    const result: any = await UserModel.get(userClass)
    if (result.length > 0) {
      throw new Error("手机号码已被注册");
    }
  }
  if (info.telphone && !validateTelphone(info.telphone)) {
    throw new Error("请输入正确的手机号码");
  }
  if (!info.password) {
    throw new Error("请输入密码");
  }
  if (info.password && !validatePassword(info.password)) {
    throw new Error("只能输入6-16个字母、数字、下划线");
  }

  if (info.gender && info.gender != GerderType.male && info.gender != GerderType.female) {
    throw new Error(`性别不符合规则,值应为${GerderType.male}或${GerderType.female}`);
  }
  if (info.role && info.role != RoleType.admin && info.role != RoleType.normal && info.role != RoleType.limit) {
    throw new Error(`用户权限不符合规则,值应为${RoleType.admin}或${RoleType.normal}或${RoleType.limit}`);
  }
}