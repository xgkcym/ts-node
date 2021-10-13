import mysql, { Connection } from 'mysql'
// 设置外键连接
import Joint from './tables/tablesField'
interface db<T> {
  table: string | undefined
  add(info: T): any;
  modify(id: string | number, info: T): any;
  delete(id: string | number): any;
  get(info: T, join?: Joint[]): any;
}
export class MysqlClass<T> implements db<T>{
  table: string | undefined;
  static connection: Connection | undefined
  constructor(table?: string) {
    this.table = table
  }
  connect(): void {
    try {
      MysqlClass.connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'neihanduanzi'
      });
      MysqlClass.connection.connect();
      console.log("数据库连接成功");
    } catch (error) {
      console.log("连接数据库失败");
    }
  }

  add(info: T) {
    let sql = `insert into ${this.table}`
    let sqlArr: string[] = []
    let unkownArr = ['values(']
    let sqlFieldArr = ["("]
    for (let i in info) {
      sqlFieldArr.push(`${i},`)
      unkownArr.push('?,')
      if (!info[i]) {
        sqlArr.push('')
        continue
      }
      sqlArr.push(`${info[i]}`)
    }
    let sqlField = sqlFieldArr.join('')
    sqlField = sqlField.substr(0, sqlField.length - 1)
    sqlField += ')'
    let unkone = unkownArr.join('')
    unkone = unkone.substr(0, unkone.length - 1)
    unkone += ')'
    sql = sql + sqlField + unkone
    return new Promise((resovle, reject) => {
      MysqlClass.connection?.query(sql, sqlArr, (err: any, result: any) => {
        if (err) {
          reject(err.message);
        }
        resovle({ mes: "添加成功" })
      })
    })
  }
  modify(id: string | number, info: T): any {
    let sql = `update ${this.table} set `
    let sqlArr = []
    for (let i in info) {
      if (i == 'id') {
        continue
      }
      if (info[i]) {
        sqlArr.push(`${i}='${info[i]}'`)
      }
    }
    sql += sqlArr.join(',')
    sql += ` where id='${id}'`
    return new Promise((resovle, reject) => {
      MysqlClass.connection?.query(sql, (err: any, result: any) => {
        if (err) {
          reject(false);
        }
        resovle(true)
      })
    })

  }
  delete(id: any): any {
    let sql = `delete from ${this.table} where id='${id}'`
    console.log(sql);

    return new Promise((resovle, reject) => {
      MysqlClass.connection?.query(sql, (err: any, result: any) => {
        if (err) {
          reject(false);
        }
        resovle(true)
      })
    })
  }
  /**
   * 
   * @param info 泛型---查询条件
   * @param join 泛型数组---连接表以及字段
   * @param fuzzy_query 布尔值---是否模糊查询
   * @returns 
   */
  get(info: T, join?: Joint[], fuzzy_query = false): Promise<Array<any>> {
    let arr: string[] = [`select * from  ${this.table}`];
    let isWhere: Boolean = true
    let isjoin: Boolean = false
    join?.map(v => {
      isjoin = true
      arr.push(`join ${v.table} on ${this.table}.${v.field}=${v.table}.${v.tableField ? v.tableField : 'uid'}`)
    })
    if (!fuzzy_query) {
      if (!isjoin) {
        for (let i in info) {
          if (info[i]) {
            if (isWhere) {
              arr.push('where')
              isWhere = false
            }
            arr.push(`${i}="${info[i]}" and`)
          }
        }
      } else {
        for (let i in info) {
          if (info[i]) {
            if (isWhere) {
              arr.push('where')
              isWhere = false
            }
            arr.push(`${this.table}.${i}="${info[i]}"`)
          }
        }
      }
    }else{
      for (let i in info) {
        if (info[i]) {
          if (isWhere) {
            arr.push('where')
            isWhere = false
          }
          arr.push(`${this.table}.${i} like "%${info[i]}%"`)
        }
      }
    }
    let sql = arr.join(' ')

    if (sql.substr(sql.length - 3) === 'and') {
      sql = sql.substr(0, sql.length - 3)
    }
    console.log(sql);
    
    return new Promise((resovle, reject) => {
      MysqlClass.connection?.query(sql, (err: any, result: any) => {
        if (err) {
          reject([{
            mes: "查询失败"
          }]);
        }
        if (isjoin) {
          let data = result.map((v: any) => {
            let obj = {}
            for (let k in v) {
              if (k != 'password') {
                obj = { ...obj, [k]: v[k] }
              }
            }
            return obj
          })
          resovle(data)

        } else {
          resovle(result)
        }

      })
    })
  }
}
