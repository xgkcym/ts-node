import Express, { Request, Response, NextFunction } from "express";
// 生成随机Id
const moveAppRoute = Express.Router()

// 检验用户的token是否有效
// moveAppRoute.use(require('./token'))

// 登录
moveAppRoute.post('/login', require('./users/login'))
moveAppRoute.get('/loginout',require('./users/loginout'))

// 操作用户表
moveAppRoute.get('/users', require('./users/getUsers'))
moveAppRoute.post('/users', require('./users/addUsers'))
moveAppRoute.put('/users', require('./users/modifyUsers'))
moveAppRoute.post('/users/avatar', require('./users/addUsersAvatar'))

// 用户关注
moveAppRoute.get('/attention', require('./attention/getAttention'))
moveAppRoute.post('/attention', require('./attention/addAttention'))
moveAppRoute.delete('/attention', require('./attention/deleteAttention'))

//文章
moveAppRoute.get('/article',require('./article/getArticle'))
moveAppRoute.post('/article',require('./article/addArticle'))
moveAppRoute.delete('/article',require('./article/deleteArticle'))
moveAppRoute.post('/article/content',require('./article/addArticleContent'))
moveAppRoute.post('/like_article',require('./userslike_article/addUserslike_article'))
moveAppRoute.delete('/like_article',require('./userslike_article/deleteUserslike_article'))
moveAppRoute.post('/unlike_article',require('./usersunlike_article/addUserslike_article'))
moveAppRoute.delete('/unlike_article',require('./usersunlike_article/deleteUserslike_article'))

// 文章分类
moveAppRoute.get('/article_type',require("./article_type/getArticle_type"))

//评论
moveAppRoute.post('/comment',(require('./comment/addComment')))
moveAppRoute.delete('/comment',(require('./comment/deleteComment')))
moveAppRoute.post('/comment2',(require('./comment2/addComment2')))
moveAppRoute.delete('/comment2',(require('./comment2/deleteComment2')))
moveAppRoute.post('/like_comment',require('./userslike_comment/addUserslike_article'))
moveAppRoute.delete('/like_comment',require('./userslike_comment/deleteUserslike_article'))
moveAppRoute.post('/unlike_comment',require('./usersunlike_comment/addUserslike_article'))
moveAppRoute.delete('/unlike_comment',require('./usersunlike_comment/deleteUserslike_article'))



export default moveAppRoute

