// 登录接口需要的携带的参数的类型
export interface loginForm {
  username: string
  password: string
}

interface dataType {
  toke: string
}

// 登录接口返回的数据的类型
export interface loginResponseData {
  code: number
  data: dataType
}

// 服务其返回用户信息相关的数据类型\
interface userInfo {
  userId: number
  avatar: string
  username: string
  password: string
  desc: string
  roles: string[]
  buttons: string[]
  routes: string[]
  token: string
}
interface user {
  checkUser: userInfo
}
export interface userResponseData {
  code: number
  data: user
}
