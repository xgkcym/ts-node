import {MysqlClass} from './db'
// 连接数据库
new MysqlClass().connect()
// 设置定时连接
  setInterval(()=>{
    MysqlClass.connection?.end()
    new MysqlClass().connect()
},1000*60*60)