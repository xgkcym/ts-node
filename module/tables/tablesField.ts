import {UserField} from './users'
import {AttentionField} from './attention'
import {ArticleField} from './article'
export default interface tablesField{
  // 要连接的表
  table:'users' |　'attention' | 'article' | 'article_type',
  // 被连接的字段
  field:UserField |AttentionField | ArticleField
  // 要连接哪个字段 默认id
  tableField?:UserField |AttentionField | ArticleField
}