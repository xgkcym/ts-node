import Express, { Request, Response, NextFunction } from "express";
// 生成随机Id
const moveAppRoute = Express.Router()


// 登录
moveAppRoute.post('/login', require('./users/login'))
moveAppRoute.get('/users', require('./users/getUsers'))
moveAppRoute.post('/users', require('./users/addUsers'))
moveAppRoute.get('/attention', require('./attention/getAttention'))
moveAppRoute.get('/black', require('./blacklist/getAttention'))
moveAppRoute.get('/fans', require('./fans/getFans'))
moveAppRoute.get('/article',require('./article/getArticle'))

// 文章分类
moveAppRoute.get('/article_type',require("./article_type/getArticle_type"))
// 检验用户的token是否有效
// moveAppRoute.use(require('./token'))

moveAppRoute.get('/loginout',require('./users/loginout'))

// 操作用户表
moveAppRoute.put('/users', require('./users/modifyUsers'))
moveAppRoute.post('/users/avatar', require('./users/addUsersAvatar'))

// 用户关注
moveAppRoute.post('/attention', require('./attention/addAttention'))
moveAppRoute.delete('/attention', require('./attention/deleteAttention'))

// 拉黑用户
moveAppRoute.post('/black', require('./blacklist/addAttention'))
moveAppRoute.delete('/black', require('./blacklist/deleteAttention'))

// 粉丝
moveAppRoute.post('/fans', require('./fans/addFans'))
moveAppRoute.delete('/fans', require('./fans/deleteFans'))
//文章
moveAppRoute.post('/article',require('./article/addArticle'))
moveAppRoute.delete('/article',require('./article/deleteArticle'))
moveAppRoute.post('/article/content',require('./article/addArticleContent'))
moveAppRoute.post('/like_article',require('./userslike_article/addUserslike_article'))
moveAppRoute.delete('/like_article',require('./userslike_article/deleteUserslike_article'))
moveAppRoute.post('/unlike_article',require('./usersunlike_article/addUserslike_article'))
moveAppRoute.delete('/unlike_article',require('./usersunlike_article/deleteUserslike_article'))

// 举报文章
moveAppRoute.post('/violation_article',require('./violation_article/addUserslike_article'))



//评论
moveAppRoute.post('/comment',(require('./comment/addComment')))
moveAppRoute.delete('/comment',(require('./comment/deleteComment')))
moveAppRoute.post('/comment2',(require('./comment2/addComment2')))
moveAppRoute.delete('/comment2',(require('./comment2/deleteComment2')))
moveAppRoute.post('/like_comment',require('./userslike_comment/addUserslike_comment'))
moveAppRoute.delete('/like_comment',require('./userslike_comment/deleteUserslike_comment'))
moveAppRoute.post('/unlike_comment',require('./usersunlike_comment/addUserslike_comment'))
moveAppRoute.delete('/unlike_comment',require('./usersunlike_comment/deleteUserslike_comment'))



export default moveAppRoute

